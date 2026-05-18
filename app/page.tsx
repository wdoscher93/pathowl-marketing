export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 px-6 py-24 text-neutral-100">
      <div className="w-full max-w-xl space-y-8">
        {/* Wordmark */}
        <div>
          <span className="text-sm font-medium tracking-widest text-neutral-500 uppercase">
            PathOwl
          </span>
        </div>

        {/* Headline + body */}
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-neutral-50 sm:text-5xl">
            The agentic adjuster for auto claims.
          </h1>
          <p className="text-lg leading-relaxed text-neutral-400">
            We&apos;re building an AI system that performs the work of an
            independent claims adjuster — starting with supplement triage and
            expanding toward full claim resolution under licensed adjuster
            oversight.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-12 bg-neutral-800" />

        {/* Status + contact */}
        <div className="space-y-3 text-sm text-neutral-500">
          <p>Launching August 2026.</p>
          <p>
            For early access conversations:{" "}
            <a
              href="mailto:will@pathowl.io"
              className="text-neutral-300 underline underline-offset-4 transition-colors hover:text-neutral-100"
            >
              will@pathowl.io
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
