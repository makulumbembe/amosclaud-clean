export default function ExplorePage() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Amosclaud Explore</h1>

      <p>
        Discover creators, trending content, services, communities,
        and featured projects.
      </p>

      <h2>Explore Categories</h2>

      <ul>
        <li>🔥 Trending Posts</li>
        <li>🎬 Videos</li>
        <li>📷 Photos</li>
        <li>🎮 Gaming</li>
        <li>🎵 Music</li>
        <li>💻 Technology</li>
        <li>🤖 Artificial Intelligence</li>
        <li>🛒 Marketplace Services</li>
      </ul>

      <h2>Featured Creators</h2>

      <ul>
        <li>Top Creators</li>
        <li>New Creators</li>
        <li>Verified Creators</li>
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
