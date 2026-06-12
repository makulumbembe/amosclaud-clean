export default function GeneralUsersPage() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Amosclaud User Dashboard</h1>

      <p>
        Manage your account, content, purchases, projects,
        and platform activity.
      </p>

      <h2>Account Center</h2>

      <ul>
        <li>Profile Settings</li>
        <li>Notifications</li>
        <li>Privacy Controls</li>
        <li>Security Settings</li>
      </ul>

      <h2>User Activity</h2>

      <ul>
        <li>Saved Posts</li>
        <li>Following Creators</li>
        <li>Marketplace Purchases</li>
        <li>AI Projects</li>
      </ul>

      <nav>
        <a href="/">Home</a> |{" "}
        <a href="/feed">Feed</a> |{" "}
        <a href="/creator">Creator Hub</a> |{" "}
        <a href="/marketplace">Marketplace</a>
      </nav>
    </main>
  );
}
