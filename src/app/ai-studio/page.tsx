export default function AIStudioPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#000", color: "#fff", padding: "32px" }}>
      <a href="/" style={{ color: "#ffd400", fontSize: "22px", textDecoration: "none" }}>
        ← Back Home
      </a>

      <h1 style={{ fontSize: "48px", marginTop: "40px" }}>AI Studio</h1>
      <p style={{ fontSize: "22px", color: "#ddd" }}>
        Build, generate, fix, and manage Amosclaud AI tools.
      </p>

      <div style={{ display: "grid", gap: "18px", marginTop: "35px" }}>
        <a href="/chat" style={button}>Open Chat</a>
        <a href="/ai-code-generator" style={button}>Code Generator</a>
        <a href="/ai-fix" style={button}>AI Fix</a>
        <a href="/creator-dashboard" style={button}>Creator Dashboard</a>
      </div>
    </main>
  );
}

const button = {
  display: "block",
  padding: "20px",
  border: "3px solid #ffd400",
  borderRadius: "20px",
  color: "#fff",
  textDecoration: "none",
  fontSize: "22px",
  fontWeight: "800",
  textAlign: "center" as const,
};
