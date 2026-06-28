import type { Metadata } from "next"
import { STIX_Two_Text } from "next/font/google"

const stixTwoText = STIX_Two_Text({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Building My Own Infrastructure: Home Lab & Networking | Charlie Zhang",
  description:
    "Notes from Charlie Zhang on building a home lab and learning networking.",
}

export default function HomeLabNetworkingPage() {
  return (
    <main className={`${stixTwoText.className} min-h-screen bg-[#1a1a1a] text-[#eaeaea]`}>
      <article className="mx-auto w-full max-w-[650px] px-8 pb-16 pt-16 text-[17px] leading-[1.5] md:pt-32">
        <h1 className="mb-1 text-xl font-medium leading-6 tracking-[-0.02em] text-[#f2f2f2] md:text-2xl">
          Building My Own Infrastructure: Home Lab &amp; Networking
        </h1>

        <p className="my-5 text-[#afafaf]">June 2026 &ndash; Charlie Zhang</p>

        <p className="my-5">
          I started building a home lab because I wanted to understand the parts
          of computing that usually stay hidden behind cloud dashboards. It is
          one thing to deploy an app. It is another thing to understand the
          network, machines, services, and tradeoffs underneath it.
        </p>

        <p className="my-5">
          This page is where I&apos;ll keep notes on what I&apos;m setting up, what I
          break, and what I learn from running my own small piece of
          infrastructure.
        </p>

        <h2 className="mb-2 mt-12 text-xl font-medium text-[#f2f2f2]">
          1. Why build a home lab
        </h2>

        <p className="my-5">
          I wanted a place where I could learn by doing. A home lab gives me
          room to experiment with networking, servers, storage, and deployment
          without worrying about breaking something important.
        </p>

        <p className="my-5">
          It also makes abstract ideas feel concrete. DNS, routing, firewalls,
          monitoring, backups, and access control are easier to understand when
          I have to configure them myself.
        </p>

        <h2 className="mb-2 mt-12 text-xl font-medium text-[#f2f2f2]">
          2. What I&apos;m learning
        </h2>

        <p className="my-5">
          The biggest lesson so far is that infrastructure is about systems
          thinking. Every small decision connects to something else. A network
          rule affects how services talk to each other. A storage decision
          affects backups. A security choice affects how easy the system is to
          use.
        </p>

        <p className="my-5">
          That is what makes it interesting. I&apos;m learning not just how to run
          services, but how to reason about reliability, security, and
          maintainability.
        </p>

        <h2 className="mb-2 mt-12 text-xl font-medium text-[#f2f2f2]">
          3. Networking in practice
        </h2>

        <p className="my-5">
          Networking used to feel like something I only needed to understand for
          exams. Building a home lab changed that. Subnets, ports, DNS records,
          VPNs, and firewall rules all become much more memorable when they
          decide whether something actually works.
        </p>

        <p className="my-5">
          I like that feedback loop. When something breaks, I have to slow down
          and understand the path a request takes through the system. That kind
          of debugging teaches more than reading a diagram on its own.
        </p>

        <h2 className="mb-2 mt-12 text-xl font-medium text-[#f2f2f2]">
          4. Notes along the way
        </h2>

        <p className="my-5">
          I&apos;ll update this as the lab grows. Some notes will be practical setup
          logs. Some will be mistakes I ran into. Some will be things I wish I
          understood before I started.
        </p>

        <p className="my-5">
          For now, I&apos;m treating it as a small environment for learning how
          real infrastructure fits together.
        </p>
      </article>
    </main>
  )
}
