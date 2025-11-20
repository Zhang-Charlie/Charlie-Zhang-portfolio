export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16 text-[#e9eefc]">
      <div className="max-w-5xl text-center">
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="block">
            Hello! I&apos;m{" "}
            <span className="text-[var(--color-accent)]">Charlie Zhang</span>,
          </span>
          <span className="block mt-2">
            a <span className="text-[var(--color-accent)]">UCD CS Student.</span>
          </span>
        </h1>

        <p className="mx-auto mt-10 max-w-3xl text-base font-medium leading-8 text-[#d2e1ff] sm:text-lg">
          Driven by learning and a love for technology, I constantly
          <br />
          explore new technologies and challenge my limits.
        </p>
      </div>
    </main>
  );
}
