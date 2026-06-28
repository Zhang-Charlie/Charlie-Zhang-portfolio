import type { Metadata } from "next"
import Link from "next/link"
import { STIX_Two_Text } from "next/font/google"

const stixTwoText = STIX_Two_Text({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
})

const posts = [
  {
    title: "Google Summer of Code with JBoss",
    href: "/gsoc",
  },
  {
    title: "Building My Own Infrastructure: Home Lab & Networking",
    href: "/home-lab-networking",
  },
]

export const metadata: Metadata = {
  title: "Blog | Charlie Zhang",
  description: "Writing and notes from Charlie Zhang.",
}

export default function BlogPage() {
  return (
    <main className={`${stixTwoText.className} min-h-screen bg-[#1a1a1a] text-[#eaeaea]`}>
      <div className="mx-auto w-full max-w-[650px] px-8 pb-16 pt-16 text-[17px] leading-[1.5] md:pt-32">
        <h1 className="mb-1 text-xl font-medium leading-6 tracking-[-0.02em] text-[#f2f2f2] md:text-2xl">
          Charlie Zhang
        </h1>

        <p className="my-5">
          I&apos;m a Computer Science with Data Science &amp; AI student at
          University College Dublin, currently a Software Engineering Intern at{" "}
          <a
            className="underline decoration-[#737373] decoration-1 underline-offset-[2.5px] transition-colors hover:decoration-[#a1a1a1]"
            href="https://www.linkedin.com/company/area22/?originalSubdomain=ie"
            rel="noreferrer"
            target="_blank"
          >
            Area22
          </a>{" "}
          and a{" "}
          <a
            className="underline decoration-[#737373] decoration-1 underline-offset-[2.5px] transition-colors hover:decoration-[#a1a1a1]"
            href="/gsoc"
          >
            Google Summer of Code 2026 contributor
          </a>
          {" "}with{" "}
          <a
            className="underline decoration-[#737373] decoration-1 underline-offset-[2.5px] transition-colors hover:decoration-[#a1a1a1]"
            href="https://www.redhat.com/en/technologies/jboss-middleware/application-platform"
            rel="noreferrer"
            target="_blank"
          >
            JBoss
          </a>
          .
        </p>

        <p className="my-5">
          I enjoy building practical software, learning new technologies, and
          turning small ideas into useful projects.
        </p>

        <p className="my-5">
          My work is somewhere between  backend systems, AI,
          and security. 
          This is where I write through what I&apos;m learning: 
          the projects, ideas, mistakes, and small discoveries that come with building software.
        </p>

        <p className="my-5">Some things I&apos;m writing about include:</p>

        <ul className="space-y-1 pl-0">
          {posts.map(post => (
            <li key={post.href} className="relative pl-4 pr-1">
              <span className="absolute left-1 top-1 text-[0.5em] text-[#9ca3af]">
                ■
              </span>
              <a
                className="underline decoration-[#737373] decoration-1 underline-offset-[2.5px] transition-colors hover:decoration-[#a1a1a1]"
                href={post.href}
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>

        <p className="mb-2 mt-5">
          This is where I share my work, progress, and what I&apos;m learning
          along the way.
        </p>

        <p className="mb-5 mt-2">
          You can{" "}
          <a
            className="underline decoration-[#737373] underline-offset-[2.5px] hover:decoration-[#a1a1a1]"
            href="https://www.linkedin.com/in/zhang-charlie/"
            rel="noreferrer"
            target="_blank"
          >
            connect with me online
          </a>
          ,{" "}
          <Link
            className="underline decoration-[#737373] underline-offset-[2.5px] hover:decoration-[#a1a1a1]"
            href="/#projects"
          >
            explore my projects
          </Link>
          , or{" "}
          <a
            className="underline decoration-[#737373] underline-offset-[2.5px] hover:decoration-[#a1a1a1]"
            href="https://github.com/Zhang-Charlie"
            rel="noreferrer"
            target="_blank"
          >
            follow what I&apos;m building
          </a>
          .
        </p>
      </div>
    </main>
  )
}
