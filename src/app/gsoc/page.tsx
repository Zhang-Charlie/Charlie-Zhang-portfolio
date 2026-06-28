import type { Metadata } from "next"
import { STIX_Two_Text } from "next/font/google"

const stixTwoText = STIX_Two_Text({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
})

const linkClass =
  "underline decoration-[#737373] decoration-1 underline-offset-[2.5px] transition-colors hover:decoration-[#a1a1a1]"

export const metadata: Metadata = {
  title: "Google Summer of Code with JBoss | Charlie Zhang",
  description:
    "Notes from Charlie Zhang's Google Summer of Code 2026 work with JBoss.",
}

export default function GsocPage() {
  return (
    <main className={`${stixTwoText.className} min-h-screen bg-[#1a1a1a] text-[#eaeaea]`}>
      <article className="mx-auto w-full max-w-[650px] px-8 pb-16 pt-16 text-[17px] leading-[1.5] md:pt-32">
        <h1 className="mb-1 text-xl font-medium leading-6 tracking-[-0.02em] text-[#f2f2f2] md:text-2xl">
          Google Summer of Code with JBoss
        </h1>

        <p className="my-5 text-[#afafaf]">June 2026 &ndash; Charlie Zhang</p>

        <p className="my-5">
          I&apos;m spending Google Summer of Code 2026 contributing to{" "}
          <a
            className={linkClass}
            href="https://www.redhat.com/en/technologies/jboss-middleware/application-platform"
            rel="noreferrer"
            target="_blank"
          >
            JBoss
          </a>
          . I&apos;m excited because this is real open source work. I get to learn
          from experienced maintainers and improve software that other
          developers rely on.
        </p>

        <p className="my-5">
          <a
            className={linkClass}
            href="https://summerofcode.withgoogle.com/programs/2026/projects/IxEENt98"
            rel="noreferrer"
            target="_blank"
          >
            Official GSoC project page
          </a>
        </p>

        <p className="my-5">
          I wanted a place to keep notes as I go. Some of this will be about
          the technical work. Some of it will be about the small lessons that
          only show up once you start contributing to a larger project.
        </p>

        <h2 className="mb-2 mt-12 text-xl font-medium text-[#f2f2f2]">
          1. Why GSoC
        </h2>

        <p className="my-5">
          Google Summer of Code stood out because it combines two things I care
          about: learning by building and contributing to software that exists
          outside my own laptop. The work has to be clear enough for other
          people to review and useful enough to matter beyond my own project.
        </p>

        <p className="my-5">
          GSoC felt like a natural next step because I had already started
          learning through open source. Contributing before the program helped
          me understand how much there is to learn from real reviews, existing
          code, and maintainers who care about the long-term health of a
          project.
        </p>

        <p className="my-5">
          I wanted to see how large enterprise codebases work in practice: how
          they are structured, maintained, and improved without breaking the
          systems people rely on.
        </p>

        <p className="my-5">
          That changes how I think about code. It&apos;s not enough for something
          to work once. It has to fit the project. It also has to be something
          another person can understand later without reading my mind.
        </p>

        <h2 className="mb-2 mt-12 text-xl font-medium text-[#f2f2f2]">
          2. Why JBoss / WildFly?
        </h2>

        <p className="my-5">
          I was drawn to JBoss and WildFly because they sit in a part of
          enterprise software that is both mature and important. They power
          systems used by real teams to run serious applications, which makes
          contributing feel more meaningful to me.
        </p>

        <p className="my-5">
          Working in this ecosystem gives me a chance to learn how enterprise
          Java projects are designed, tested, maintained, and led over time. I
          wanted to understand what it takes to contribute to software where
          reliability, stability, compatibility, and long-term maintainability
          really matter.
        </p>

        <h2 className="mb-2 mt-12 text-xl font-medium text-[#f2f2f2]">
          3. Working in the open
        </h2>

        <p className="my-5">
          Open source makes the learning process visible. Questions, review
          comments, commits, and design decisions all become part of the work.
          That can feel intimidating at first. It also makes the feedback loop
          much better.
        </p>

        <p className="my-5">
          I&apos;m learning to explain my changes more clearly and keep them
          smaller. I&apos;m also learning that review is not something after the
          real work. It is part of the work.
        </p>

        <h2 className="mb-2 mt-12 text-xl font-medium text-[#f2f2f2]">
          4. What I&apos;m hoping to learn
        </h2>

        <p className="my-5">
          I want to get better at making changes carefully. That means reading
          more before touching code, understanding the tradeoffs, and leaving
          the project easier to work with than I found it.
        </p>

        <p className="my-5">
          I&apos;m also hoping to improve the quieter parts of engineering. Things
          like testing carefully, documenting decisions, and knowing when a
          simple solution is better than a clever one.
        </p>

        <h2 className="mb-2 mt-12 text-xl font-medium text-[#f2f2f2]">
          5. Notes along the way
        </h2>

        <p className="my-5">
          I&apos;ll use this page as a starting point for updates as the summer
          goes on. Some notes will be technical. Some will be about process.
          Some will probably just be things I wish I understood sooner.
        </p>

        <p className="my-5">
          For now, I&apos;m grateful for the chance to contribute and excited to
          see how much I can learn by working with the JBoss community.
        </p>
      </article>
    </main>
  )
}
