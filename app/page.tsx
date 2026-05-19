import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#0A0E27", color: "#E2E8F0" }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-10 flex items-center justify-between px-6 py-6"
        style={{ backgroundColor: "#0A0E27" }}
      >
        <Link href="/" aria-label="PathOwl home">
          <Image
            src="/pathowl-logo.png"
            alt="PathOwl"
            height={36}
            width={0}
            style={{ width: "auto", height: "36px" }}
            priority
          />
        </Link>
        <a
          href="https://app.pathowl.io"
          className="font-medium no-underline hover:underline text-[#3B82F6] hover:text-[#60A5FA]"
        >
          Sign In
        </a>
      </header>

      {/* Main — fills remaining space, centered */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <Image
          src="/pathowl-logo.png"
          alt="PathOwl"
          height={140}
          width={0}
          style={{ width: "auto", height: "140px" }}
          priority
        />
        <p
          className="mt-8 font-normal"
          style={{ color: "#94A3B8", fontSize: "16px" }}
        >
          In private development.
        </p>
        <a
          href="mailto:will@pathowl.io"
          className="mt-4 font-medium no-underline hover:underline text-[#3B82F6] hover:text-[#60A5FA]"
          style={{ fontSize: "16px" }}
        >
          will@pathowl.io
        </a>
      </main>

      {/* Footer */}
      <footer className="flex justify-center px-6 py-6">
        <span style={{ color: "#64748B", fontSize: "12px" }}>
          &copy; 2026 PathOwl
        </span>
      </footer>
    </div>
  );
}
