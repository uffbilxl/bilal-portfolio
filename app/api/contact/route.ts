import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Rate limiting store (in-memory, resets on cold starts)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function getRateLimitKey(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

function isRateLimited(key: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(key)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + 60 * 60 * 1000 }) // 1hr window
    return false
  }

  if (entry.count >= 3) return true // Max 3 messages per hour per IP

  entry.count++
  return false
}

function sanitise(input: string): string {
  return input.trim().replace(/[<>]/g, '').slice(0, 2000)
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ipKey = getRateLimitKey(req)
  if (isRateLimited(ipKey)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  // Parse body
  let body: { name: string; email: string; subject: string; message: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const { name, email, subject, message } = body

  // Validate
  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  const cleanName = sanitise(name)
  const cleanEmail = sanitise(email)
  const cleanSubject = sanitise(subject)
  const cleanMessage = sanitise(message)

  // Check env vars
  const emailUser = process.env.EMAIL_USER
  const emailPass = process.env.EMAIL_PASS
  const emailTo = process.env.EMAIL_TO ?? emailUser

  if (!emailUser || !emailPass) {
    // In development without env vars, just log and succeed
    if (process.env.NODE_ENV === 'development') {
      console.log('[CONTACT FORM] New submission:', {
        from: `${cleanName} <${cleanEmail}>`,
        subject: cleanSubject,
        message: cleanMessage,
      })
      return NextResponse.json({ success: true, message: 'Message logged (dev mode).' })
    }
    return NextResponse.json(
      { error: 'Email service not configured. Please contact via LinkedIn.' },
      { status: 503 }
    )
  }

  // Send email via SMTP
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST ?? 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT ?? '587', 10),
      secure: process.env.EMAIL_PORT === '465',
      auth: { user: emailUser, pass: emailPass },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${emailUser}>`,
      replyTo: `${cleanName} <${cleanEmail}>`,
      to: emailTo,
      subject: `[Portfolio] ${cleanSubject}`,
      text: `
New contact form submission from bilalarshad.dev

Name: ${cleanName}
Email: ${cleanEmail}
Subject: ${cleanSubject}

Message:
${cleanMessage}
      `,
      html: `
<div style="font-family: monospace; background: #050a0e; color: #c8d8e8; padding: 24px; border: 1px solid #1a3a4a;">
  <h2 style="color: #00f5ff; margin-top: 0;">New Portfolio Contact</h2>
  <table style="border-collapse: collapse; width: 100%;">
    <tr><td style="color: #6b8a9a; padding: 6px 0; width: 80px;">Name</td><td style="padding: 6px 0;">${cleanName}</td></tr>
    <tr><td style="color: #6b8a9a; padding: 6px 0;">Email</td><td style="padding: 6px 0;"><a href="mailto:${cleanEmail}" style="color: #00f5ff;">${cleanEmail}</a></td></tr>
    <tr><td style="color: #6b8a9a; padding: 6px 0;">Subject</td><td style="padding: 6px 0;">${cleanSubject}</td></tr>
  </table>
  <hr style="border-color: #1a3a4a; margin: 16px 0;" />
  <p style="color: #6b8a9a; margin: 0 0 8px;">Message:</p>
  <p style="margin: 0; white-space: pre-wrap;">${cleanMessage}</p>
</div>
      `,
    })

    return NextResponse.json({ success: true, message: 'Message sent successfully.' })
  } catch (err) {
    console.error('[CONTACT FORM] Email send error:', err)
    return NextResponse.json(
      { error: 'Failed to send email. Please try LinkedIn.' },
      { status: 500 }
    )
  }
}

// Reject other methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 })
}
