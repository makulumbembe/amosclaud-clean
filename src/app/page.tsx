export default function HomePage() {
  const hubs = [
    { name: "AI Assistant", href: "/ai-assistant", emoji: "🤖" },
    { name: "AI Code Generator", href: "/ai-code-studio", emoji: "💻" },
    { name: "AI Fix", href: "/ai-fix", emoji: "🛠️" },
    { name: "Creator Dashboard", href: "/creator-dashboard", emoji: "🎬" },
    { name: "Marketplace", href: "/marketplace", emoji: "🛒" },
    { name: "Payments", href: "/payments", emoji: "💳" },
    { name: "Profile", href: "/profile", emoji: "👤" },
    { name: "Settings", href: "/settings", emoji: "⚙️" },
  ];

  return (
    <main style={page}>
      <section style={hero}>
        <div style={badge}>AMOSCLAUD IS ONLINE</div>
        <h1 style={title}>Wake Up Amosclaud</h1>
        <p style={subtitle}>
          AI tools, creator business, marketplace, payments, profile and operations
          connected in one platform.
        </p>

        <div style={actions}>
          <a href="/ai-assistant" style={primary}>Start Amos AI</a>
          <a href="/settings" style={secondary}>Open Control Hub</a>
        </div>
      </section>

      <section style={grid}>
        {hubs.map((hub) => (
          <a key={hub.href} href={hub.href} style={card}>
            <div style={emoji}>{hub.emoji}</div>
            <h2 style={cardTitle}>{hub.name}</h2>
            <p style={cardText}>Open hub →</p>
          </a>
        ))}
      </section>

      <section style={status}>
        <h2 style={statusTitle}>Platform Status</h2>
        <p>✅ Landing page active</p>
        <p>✅ Profile and settings connected</p>
        <p>✅ AI hubs connected</p>
        <p>✅ Catch-all routes active</p>
        <p>⚡ Backend AI operations ready to connect next</p>
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top, #2a0035, #000 55%)",
  color: "#fff",
  fontFamily: "Arial, sans-serif",
  padding: 24,
};

const hero = {
  padding: "45px 22px",
  borderRadius: 34,
  background: "linear-gradient(135deg, #111, #2b0035)",
  border: "4px solid #ffd400",
  boxShadow: "0 0 40px rgba(255, 212, 0, 0.3)",
  textAlign: "center" as const,
};

const badge = {
  display: "inline-block",
  background: "#ffd400",
  color: "#000",
  padding: "10px 18px",
  borderRadius: 999,
  fontWeight: 900,
  letterSpacing: 1,
};

const title = {
  fontSize: 54,
  margin: "22px 0 10px",
  fontWeight: 900,
};

const subtitle = {
  maxWidth: 700,
  margin: "0 auto",
  color: "#ddd",
  fontSize: 22,
  lineHeight: 1.5,
};

const actions = {
  marginTop: 28,
  display: "flex",
  gap: 14,
  justifyContent: "center",
  flexWrap: "wrap" as const,
};

const primary = {
  background: "#ffd400",
  color: "#000",
  textDecoration: "none",
  padding: "16px 24px",
  borderRadius: 22,
  fontWeight: 900,
  fontSize: 20,
};

const secondary = {
  background: "#ff008c",
  color: "#fff",
  textDecoration: "none",
  padding: "16px 24px",
  borderRadius: 22,
  fontWeight: 900,
  fontSize: 20,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 18,
  marginTop: 24,
};

const card = {
  background: "#111",
  color: "#fff",
  textDecoration: "none",
  padding: 24,
  borderRadius: 28,
  border: "2px solid #333",
  boxShadow: "0 14px 30px rgba(0,0,0,0.35)",
};

const emoji = {
  fontSize: 42,
};

const cardTitle = {
  fontSize: 24,
  margin: "14px 0 8px",
};

const cardText = {
  color: "#ffd400",
  fontWeight: 900,
};

const status = {
  marginTop: 24,
  background: "#111",
  borderRadius: 28,
  padding: 24,
  border: "2px solid #ffd400",
};

const statusTitle = {
  marginTop: 0,
};