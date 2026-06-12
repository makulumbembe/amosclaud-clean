export default function CreatorPage() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Amosclaud Creator Hub</h1>

      <p>
        Build your audience, upload content, manage projects,
        and earn from your creations.
      </p>

      <h2>Creator Tools</h2>

      <ul>
        <li>Create Posts</li>
        <li>Upload Videos</li>
        <li>Upload Photos</li>
        <li>Manage Followers</li>
        <li>Creator Analytics</li>
        <li>Creator Earnings</li>
        <li>Project Dashboard</li>
      </ul>

      <h2>Content Center</h2>

      <ul>
        <li>Drafts</li>
        <li>Published Content</li>
        <li>Scheduled Posts</li>
      </ul>

      <nav>
        <a href="/">Home</a> |{" "}
        <a href="/feed">Feed</a> |{" "}
        <a href="/explore">Explore</a> |{" "}
        <a href="/marketplace">Marketplace</a>
      </nav>
    </main>
  );
}
