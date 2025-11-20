import Image from "next/image"

const techStack = [
  {
    name: "Java",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  },
  {
    name: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    name: "C",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "SQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Scheme",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/racket/racket-original.svg",
  },
  {
    name: "x86 Assembly",
    src: "/icons/x86.svg",
  },

  // modern stack
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
  },
  {
    name: "Tailwind CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "React.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
]

export function TechStackSection() {
  return (
    <section className="w-full bg-[#111111] px-4 py-12 text-slate-100 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-8">
        <h3 className="text-lg font-semibold sm:text-xl">Current tech stack</h3>
        <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-3 md:grid-cols-5">
          {techStack.map(({ name, src }) => (
            <div
              key={name}
              className="group flex flex-col items-center gap-2 transition-transform duration-200 hover:-translate-y-1"
            >
              <img
                src={src}
                alt={name}
                className={`transition-transform duration-200 group-hover:scale-105 object-contain ${
                  name === "x86 Assembly" ? "h-14 w-14" : "h-10 w-10"
                }`}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <span className="text-sm font-medium text-gray-200 transition-colors duration-200 group-hover:text-white">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="flex min-h-screen items-center justify-center px-4 py-12 text-[#e9eefc] sm:px-6 sm:py-16">
        <div className="max-w-5xl text-center px-2">
          <h1 className="text-[clamp(2.4rem,5vw,3.5rem)] font-semibold leading-[1.15] sm:text-[clamp(2.8rem,4vw,4rem)] lg:text-[clamp(3.2rem,3vw,4.5rem)]">
            <span className="block">
              Hello! I&apos;m{" "}
              <span className="text-[clamp(2.6rem,5.2vw,3.7rem)] font-semibold text-[var(--color-accent)] sm:text-[clamp(3rem,4.5vw,4rem)]">
                Charlie Zhang
              </span>
              ,
            </span>
            <span className="block mt-2">
              a{" "}
              <span className="text-[clamp(2.6rem,5.2vw,3.7rem)] font-semibold text-[var(--color-accent)] sm:text-[clamp(3rem,4.5vw,4rem)]">
                UCD CS Student.
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-[clamp(1rem,2.5vw,1.2rem)] font-medium leading-[1.7] text-[#d2e1ff] sm:leading-[1.8]">
            Driven by learning and a love for technology, I constantly
            <br />
            explore new technologies and challenge my limits.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-14 text-slate-900 sm:px-6 sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:gap-10">
          <div className="mx-auto w-fit md:mx-0">
            <Image
              src="/profile-placeholder.svg"
              alt="Charlie Zhang portrait"
              width={220}
              height={220}
              sizes="(max-width: 768px) 160px, (max-width: 1024px) 200px, 220px"
              className="h-auto w-40 rounded-md border-4 border-slate-900 shadow-xl -rotate-2 sm:w-48 md:w-56"
              priority
            />
          </div>

          <div className="flex-1 space-y-4 px-1 text-left">
            <h2 className="text-2xl font-bold sm:text-3xl">About Me</h2>
            <p className="text-base leading-relaxed text-slate-800 sm:text-lg">
              I help bring ideas to life through clean, high-performing web and
              mobile experiences. Whether you need a fast MVP, a polished
              product, or help scaling your stack, I focus on reliable, modern
              solutions using tools like React, React Native, Go, and Node.js
              From backend architecture to frontend design, I care about speed,
              usability, and maintainability, so you get software that not only
              works, but works well in the real world
            </p>
          </div>
        </div>
      </section>

      <TechStackSection />
    </main>
  )
}
