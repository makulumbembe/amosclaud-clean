export default function AdminPage() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Amosclaud Admin Hub</h1>
      <p>Manage users, creators, content, marketplace, and platform tools.</p>

      <section>
        <h2>Management</h2>
        <ul>
          <li>User Management</li>
          <li>Creator Review</li>
          <li>Content Moderation</li>
          <li>Marketplace Control</li>
          <li>Platform Analytics</li>
        </ul>
      </section>

      <nav>
        <a href="/">Home</a> | <a href="/feed">Feed</a> |{" "}
        <a href="/visitors">Visitors</a>
      </nav>
    </main>
  );
}
