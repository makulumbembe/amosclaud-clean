export default function FeedPage() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Amosclaud Feed</h1>
      <p>View posts, videos, creator updates, comments, likes, and shared content.</p>

      <section>
        <h2>Feed Tools</h2>
        <ul>
          <li>Create Post</li>
          <li>Upload Photo or Video</li>
          <li>Like and Comment</li>
          <li>Share Content</li>
          <li>Follow Creators</li>
        </ul>
      </section>

      <nav>
        <a href="/">Home</a> | <a href="/explore">Explore</a> |{" "}
        <a href="/creator">Creator Hub</a> | <a href="/admin">Admin</a>
      </nav>
    </main>
  );
}
