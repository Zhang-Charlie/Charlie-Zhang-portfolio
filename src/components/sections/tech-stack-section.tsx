import { techStack } from "@/data/tech-stack"

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full bg-neutral-900 px-4 py-12 text-neutral-200 sm:px-6 sm:py-14"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <h3 className="text-lg font-semibold text-neutral-100 sm:text-xl">
          Skills
        </h3>

        <div className="border-b border-neutral-800">
          {techStack.map(({ label, skills }) => (
            <div
              key={label}
              className="grid gap-2 border-t border-neutral-800 py-4 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-8"
            >
              <h4 className="text-sm font-medium leading-6 text-neutral-400">
                {label}
              </h4>

              <ul className="flex flex-wrap items-baseline text-sm leading-7 text-neutral-200 sm:text-[0.95rem]">
                {skills.map(skill => (
                  <li
                    key={skill}
                    className="after:mx-2.5 after:text-neutral-600 after:content-['·'] last:after:content-none"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
