'use client'

import { useInView } from 'react-intersection-observer'
import clsx from 'clsx'

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
  label?: string
}

export default function SectionWrapper({ id, children, className, label }: SectionWrapperProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      id={id}
      ref={ref}
      aria-label={label}
      className={clsx(
        'relative z-10 py-20 sm:py-28',
        'section-fade',
        inView && 'in-view',
        className
      )}
    >
      {children}
    </section>
  )
}
