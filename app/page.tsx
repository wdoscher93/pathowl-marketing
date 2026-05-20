export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink">
      {/* Nav — 64px tall, canvas background, hairline border */}
      <header className="sticky top-0 z-10 flex h-16 items-center justify-end border-b border-hairline bg-canvas px-6">
        <a
          href="https://app.pathowl.io"
          className="text-[15px] font-normal text-slate no-underline transition-colors duration-200 hover:text-forest"
        >
          Sign in
        </a>
      </header>

      {/* Main — fills remaining viewport, centered */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        {/* SVG logo — owl mark + PathOwl wordmark, scales natively */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/pathowl-logo.svg"
          alt="PathOwl"
          className="h-[100px] w-auto sm:h-[140px]"
        />

        <p className="mt-8 text-[18px] font-normal text-slate">
          In private development.
        </p>

        <a
          href="mailto:will@pathowl.io"
          className="mt-4 text-[18px] font-medium text-forest no-underline transition-all duration-200 hover:text-forest-deep hover:underline"
        >
          will@pathowl.io
        </a>
      </main>

      {/* Footer — Midnight Ink dark inversion band */}
      <footer className="bg-ink py-12 text-center">
        <span
          className="text-[13px] font-normal"
          style={{ color: "rgba(248, 247, 244, 0.6)" }}
        >
          &copy; 2026 PathOwl
        </span>
      </footer>
    </div>
  );
}
