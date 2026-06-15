import Link from "next/link";

export default function AIStudioPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        AI Studio
      </h1>

      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        Build, generate, fix, and manage Amosclaud AI tools.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Link href="/chat">Open Chat</Link>

        <Link href="/ai-studio/coding">
          AI Coding
        </Link>

        <Link href="/ai-studio/image">
          AI Image
        </Link>

        <Link href="/ai-studio/marketplace">
          AI Marketplace
        </Link>

        <Link href="/ai-studio/marketplace/games">
          AI Games
        </Link>
      </div>
    </main>
  );
}
