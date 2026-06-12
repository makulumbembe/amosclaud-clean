export default function AdminPage() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Amosclaud Admin</h1>
      <p>Administrator hub for managing the Amosclaud platform.</p>

      <section>
        <h2>Admin Tools</h2>
        <ul>
          <li>User management</li>
          <li>Creator review</li>
          <li>Content moderation</li>
          <li>Marketplace control</li>
          <li>Platform analytics</li>
        </ul>
      </section>

      <nav>
        <a href="/">Home</a>
        <br />
        <a href="/feed">Feed</a>
        <br />
        <a href="/visitors">Visitors</a>
      </nav>
    </main>
  );
}
