export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b1020",
        color: "white",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem" }}>Amosclaud</h1>

      <p style={{ fontSize: "1.2rem", maxWidth: "700px" }}>
        Social Entertainment • AI Studio • Creator Platform • Marketplace • Services
      </p>

      <div style={{ marginTop: "40px" }}>
        <h2>Public Platform</h2>
        <p>
          Connect with communities, creators, entertainment, AI tools,
          services, and opportunities.
        </p>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>Explore</h2>
        <p>Discover trending content and new communities.</p>

        <h2>Feed</h2>
        <p>Follow creators, friends, and updates.</p>

        <h2>Creators</h2>
        <p>Build an audience and share content.</p>

        <h2>AI Studio</h2>
        <p>Create, automate, and build with AI.</p>

        <h2>Marketplace</h2>
        <p>Buy, sell, and promote services and products.</p>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h2>Coming Soon</h2>
        <p>
          Messaging • Video Calls • Communities • Creator Monetization • Admin Hub
        </p>
      </div>
    </main>
  );
}
