export default function ExplorePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        padding: "2rem",
      }}
    >
      <h1>Explore</h1>

      <p>Discover creators, AI tools, communities, and trending content.</p>

      <div style={{ marginTop: "2rem", display: "grid", gap: "1rem" }}>
        <a href="/feed" style={{ color: "#ffd400" }}>
          Trending Feed
        </a>

        <a href="/marketplace" style={{ color: "#ffd400" }}>
          Marketplace
        </a>

        <a href="/profile" style={{ color: "#ffd400" }}>
          Creator Profiles
        </a>

        <a href="/ai-studio" style={{ color: "#ffd400" }}>
          AI Studio
        </a>
      </div>
    </main>
  );
}
