export default function HubPage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#000",
      color: "#fff",
      padding: "2rem"
    }}>
      <h1>Amosclaud Hub</h1>

      <p>Welcome to the central hub.</p>

      <div style={{
        display: "grid",
        gap: "16px",
        marginTop: "24px"
      }}>
        <a href="/feed">Feed</a>
        <a href="/chat">Chat</a>
        <a href="/profile">Profile</a>
        <a href="/marketplace">Marketplace</a>
        <a href="/program">Programming</a>
      </div>
    </main>
  );
}
