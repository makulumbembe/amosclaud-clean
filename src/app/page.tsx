export default function HomePage() {
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
      <h1>AMOSCLAUD</h1>
      <p>Build. Create. Connect.</p>

      <div style={{ display: "grid", gap: "16px", marginTop: "24px" }}>
        <a href="/feed" style={link}>Feed</a>
        <a href="/ai-studio" style={link}>AI Studio</a>
        <a href="/chat" style={link}>Chat</a>
        <a href="/profile" style={link}>Profile</a>
        <a href="/login" style={link}>Login</a>
        <a href="/logout" style={link}>Logout</a>
      </div>
    </main>
  );
}
