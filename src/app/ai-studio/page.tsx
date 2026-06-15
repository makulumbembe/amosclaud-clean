export default function AIStudioPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#000", color: "#fff", padding: "2rem" }}>
      <h1>AI Studio</h1>
      <p>Build, generate, fix, and manage Amosclaud AI tools.</p>

      <div style={{ display: "grid", gap: "16px", marginTop: "24px" }}>
        <a href="/chat" style={{ color: "#ffd400" }}>Open Chat</a>
        <a href="/ai-studio/coding" style={{ color: "#ffd400" }}>AI Coding</a>
        <a href="/ai-studio/image" style={{ color: "#ffd400" }}>AI Image</a>
        <a href="/ai-studio/marketplace" style={{ color: "#ffd400" }}>AI Marketplace</a>
      </div>
    </main>
  );
}
