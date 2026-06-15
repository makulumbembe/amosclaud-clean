export default function AdminHubPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        padding: "2rem",
      }}
    >
      <h1>Amosclaud Admin Hub</h1>

      <p>Manage platform settings, users, content, and services.</p>

      <div style={{ display: "grid", gap: "16px", marginTop: "24px" }}>
        <a href="/feed">Feed Management</a>
        <a href="/marketplace">Marketplace</a>
        <a href="/program">Programming Hub</a>
        <a href="/profile">Profile Management</a>
      </div>
    </main>
  );
}
