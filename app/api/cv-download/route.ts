import { NextRequest, NextResponse } from 'next/server'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

// Simple in-memory download counter (use a DB like Supabase/Vercel KV in production)
let downloadCount = 0

export async function GET(req: NextRequest) {
  // Track the download
  downloadCount++
  const timestamp = new Date().toISOString()
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'

  console.log(`[CV Download] #${downloadCount} at ${timestamp} from ${ip}`)

  // Try to serve the actual PDF from the public directory
  const cvPath = join(process.cwd(), 'public', 'Bilal-Arshad-CV.pdf')

  if (existsSync(cvPath)) {
    const file = readFileSync(cvPath)
    return new NextResponse(file, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Bilal-Arshad-CV.pdf"',
        'Cache-Control': 'no-cache',
      },
    })
  }

  // Fallback: redirect to the static file
  return NextResponse.redirect(new URL('/Bilal-Arshad-CV.pdf', req.url))
}

// Stats endpoint (protected by a simple secret in production)
export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('authorization')
  const secret = process.env.ADMIN_SECRET

  if (secret && authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }

  return NextResponse.json({
    downloads: downloadCount,
    message: `CV has been downloaded ${downloadCount} time(s) since last cold start.`,
  })
}
