export default function ProgrammingPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          background: "#ffd400",
          color: "#000",
          border: "4px solid #000",
          borderRadius: "24px",
          padding: "24px",
          boxShadow: "10px 10px 0 #b14cff",
          maxWidth: "420px",
          margin: "0 auto 28px",
          overflow: "hidden",
        }}
      >
        <h1
          style={{
            fontSize: "34px",
            lineHeight: "1",
            margin: "0 0 12px",
            fontWeight: 900,
            wordBreak: "break-word",
          }}
        >
          PROGRAMMING
        </h1>

        <p style={{ fontSize: "20px", margin: 0, fontWeight: 700 }}>
          14,400 posts
        </p>
      </section>

      <section style={{ maxWidth: "420px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>
          Programming Hub
        </h2>

        <p style={{ fontSize: "18px", lineHeight: "1.5", color: "#d9d9d9" }}>
          Build websites, apps, dashboards, APIs, AI tools, and full-stack
          projects with Amosclaud.
        </p>

        <div style={{ display: "grid", gap: "16px", marginTop: "24px" }}>
          <a href="/ai-studio/coding" style={linkCard}>
            💻 AI Coding Studio
          </a>

          <a href="/marketplace/apps" style={linkCard}>
            🚀 Apps Marketplace
          </a>

          <a href="/marketplace/agents" style={linkCard}>
            🤖 AI Agents
          </a>

          <a href="/marketplace/prompts" style={linkCard}>
            ✍️ Programming Prompts
          </a>

          <a href="/feed" style={linkCard}>
            🔥 Programming Feed
          </a>
        </div>
      </section>
    </main>
  );
}

const linkCard = {
  display: "block",
  background: "#111",
  color: "#ffd400",
  border: "3px solid #ffd400",
  borderRadius: "18px",
  padding: "18px",
  fontSize: "20px",
  fontWeight: 800,
  textDecoration: "none",
  boxShadow: "6px 6px 0 #ff0099",
} as const;
