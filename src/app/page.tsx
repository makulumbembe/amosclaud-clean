export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Amosclaud</h1>
      <p>Build. Create. Connect.</p>

      <div style={{ display: "grid", gap: "12px", marginTop: "24px" }}>
        <a href="/feed" style={link}>Open Feed</a>
        <a href="/ai-studio" style={link}>Open AI Studio</a>
        <a href="/chat" style={link}>Open Chat</a>
        <a href="/profile" style={link}>Open Profile</a>
      </div>
    </main>
  );
}

const link = {
  display: "block",
  background: "#ffd400",
  color: "#000",
  padding: "16px",
  borderRadius: "16px",
  textDecoration: "none",
  fontWeight: 900,
  textAlign: "center" as const,
};
