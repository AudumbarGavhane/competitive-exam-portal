import { GraduationCap } from 'lucide-react'

const links = [
  { label: 'Study', href: '#focus' },
  { label: 'Practice', href: '#how' },
  { label: 'Dashboard', href: '#stats' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="size-4" />
          </span>
          <span className="text-sm text-muted-foreground">
            © 2026 Exam Point.
          </span>
        </div>
        <nav className="flex gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
