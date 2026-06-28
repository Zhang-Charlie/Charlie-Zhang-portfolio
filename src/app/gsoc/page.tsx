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
          2. How I got into GSoC
        </h2>

        <p className="my-5">
          I first found my way into GSoC through open source. Before applying,
          I had already been contributing to public projects such as A2A. I
          wanted to gain more experience with real codebases and learn how
          development works outside of university assignments.
        </p>

        <p className="my-5">
          After looking through the GSoC organizations and project ideas, I
          thought JBoss was the best fit for me. It matched my interest in Java,
          backend engineering, security, and cloud infrastructure. The fact that
          it is part of the wider Red Hat and IBM ecosystem made it even more
          interesting.
        </p>

        <p className="my-5">
          I knew GSoC would be competitive, so I spent time researching how to
          improve my chances. One piece of advice that always came up again and
          again was to start contributing before the application period.
        </p>

        <p className="my-5">
          That is what I did. I started contributing to JBoss-related projects
          and learning how the community worked. Those early contributions
          helped me understand the codebase, get used to reviews, and see where
          I could make a useful contribution.
        </p>

        <p className="my-5">
          By the time I applied, GSoC did not feel like a random opportunity
          anymore. It felt like the next step in work I had already started.
        </p>

        <h2 className="mb-2 mt-12 text-xl font-medium text-[#f2f2f2]">
          3. Why JBoss / WildFly?
        </h2>

        <p className="my-5">
          I was drawn to JBoss and WildFly because they sit in a part of
          enterprise software that is mature and important. These projects are
          used to run real applications, so contributing to them felt more
          meaningful than working on something purely experimental.
        </p>

        <p className="my-5">
          WildFly also matched the kind of engineering I want to get better at.
          I am interested in backend systems, security, Java, and cloud
          infrastructure. Working in this ecosystem gives me a chance to see how
          those areas come together inside a production-grade application
          server.
        </p>

        <p className="my-5">
          I also wanted to learn how large enterprise Java projects are designed
          and maintained over time. In projects like WildFly and Elytron, code
          quality is not just about making something work once. It also has to
          be reliable, tested, compatible, and maintainable for the long term.
        </p>

        <p className="my-5">
          That was a big reason why JBoss appealed to me. It gave me the chance
          to contribute to a serious open-source community while learning from
          experienced maintainers and working on software that has real-world
          impact.
        </p>

        <h2 className="mb-2 mt-12 text-xl font-medium text-[#f2f2f2]">
          4. Working in the open
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
          5. What I&apos;m hoping to learn
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
          6. Notes along the way
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
