const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "TECH STACK", href: "#tech-stack" },
  { label: "EDUCATION", href: "#education" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
]

export function TopBar() {
  return (
    <div className="absolute top-0 left-0 z-40 w-full bg-transparent">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-5 py-4 sm:gap-6 sm:px-8 sm:py-5 lg:gap-8 lg:px-10 lg:py-6">
        {navItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:text-[var(--color-accent)] sm:text-sm lg:text-base"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
