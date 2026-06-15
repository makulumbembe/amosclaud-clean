export default function MarketplacePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        padding: "2rem",
      }}
    >
      <h1>Amosclaud Marketplace</h1>

      <p>
        Discover AI tools, services, templates, games, and creator resources.
      </p>

      <div
        style={{
          display: "grid",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        <a href="/marketplace/games">Games</a>
        <a href="/ai-studio">AI Studio</a>
        <a href="/program">Programming</a>
        <a href="/feed">Community Feed</a>
      </div>
    </main>
  );
}
