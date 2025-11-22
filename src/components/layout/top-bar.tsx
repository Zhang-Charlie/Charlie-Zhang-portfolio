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
    <div className="absolute top-0 left-0 w-full z-40 bg-transparent">
      <nav className="mx-auto flex max-w-6xl items-center justify-center gap-8 px-10 py-6">
        {navItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            className="text-base font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:text-[var(--color-accent)]"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
