export default function HubPage() {
  const sections = [
    {
      title: "Main",
      items: [
        ["🤖", "AI Studio", "Code, images, posts", "/ai-studio"],
        ["👥", "Friends", "Find people", "/general-users"],
        ["💬", "Chat", "Messages", "/chat"],
      ],
    },
    {
      title: "Business",
      items: [
        ["🛒", "Marketplace", "Buy and sell", "/marketplace"],
        ["📦", "Packages", "Plans and pricing", "/packages"],
        ["💰", "Coins", "Rewards and wallet", "/profile"],
      ],
    },
    {
      title: "Support",
      items: [
        ["⚙️", "Settings", "Account controls", "/settings"],
        ["📘", "Docs", "Guides and API", "/docs"],
        ["🛡️", "Admin", "Control center", "/admin-hub"],
      ],
    },
  ];

  return (
    <main style={page}>
      <header style={header}>
        <a href="/feed" style={back}>←</a>
        <h1 style={logo}>AMOS<span style={{ color: "#ff0080" }}>CLAUD</span></h1>
        <a href="/search" style={search}>⌕</a>
      </header>

      <section style={hero}>
        <h2 style={heroTitle}>Platform Hub</h2>
        <p style={heroText}>Everything organized in one simple tree.</p>
      </section>

      {sections.map((section) => (
        <section key={section.title} style={sectionBox}>
          <h3 style={sectionTitle}>{section.title}</h3>

          {section.items.map(([icon, title, text, href]) => (
            <a key={title} href={href} style={row}>
              <span style={iconBox}>{icon}</span>
              <span style={{ flex: 1 }}>
                <strong style={rowTitle}>{title}</strong>
                <small style={rowText}>{text}</small>
              </span>
              <span style={arrow}>›</span>
            </a>
          ))}
        </section>
      ))}

      <nav style={bottomNav}>
        <a href="/feed">🏠<span>Feed</span></a>
        <a href="/search">🔍<span>Search</span></a>
        <a href="/ai-studio">✨<span>Studio</span></a>
        <a href="/admin-hub" style={active}>▦<span>Hub</span></a>
        <a href="/profile">👤<span>Profile</span></a>
      </nav>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "#000",
  color: "#fff",
  fontFamily: "Arial, sans-serif",
  paddingBottom: "90px",
};

const header = {
  position: "sticky" as const,
  top: 0,
  zIndex: 10,
  height: "62px",
  background: "#ffd400",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 18px",
  borderBottom: "5px solid #ff0080",
};

const back = { color: "#000", fontSize: "28px", textDecoration: "none", fontWeight: 900 };
const logo = { margin: 0, color: "#000", fontSize: "22px", fontWeight: 900 };
const search = { color: "#000", fontSize: "30px", textDecoration: "none", fontWeight: 900 };

const hero = {
  margin: "18px",
  padding: "20px",
  background: "#111",
  border: "3px solid #ffd400",
  borderRadius: "24px",
};

const heroTitle = { margin: 0, fontSize: "30px", fontWeight: 900 };
const heroText = { margin: "6px 0 0", color: "#bbb", fontSize: "15px" };

const sectionBox = {
  margin: "18px",
  background: "#111",
  borderRadius: "22px",
  overflow: "hidden",
  border: "1px solid #222",
};

const sectionTitle = {
  margin: 0,
  padding: "14px 16px",
  color: "#ffd400",
  fontSize: "13px",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
};

const row = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  padding: "16px",
  color: "#fff",
  textDecoration: "none",
  borderTop: "1px solid #222",
};

const iconBox = {
  width: "46px",
  height: "46px",
  borderRadius: "14px",
  background: "#ffd400",
  color: "#000",
  display: "grid",
  placeItems: "center",
  fontSize: "22px",
};

const rowTitle = { display: "block", fontSize: "17px" };
const rowText = { display: "block", color: "#aaa", marginTop: "4px" };
const arrow = { fontSize: "28px", color: "#ffd400" };

const bottomNav = {
  position: "fixed" as const,
  bottom: 0,
  left: 0,
  right: 0,
  height: "74px",
  background: "#fff",
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  alignItems: "center",
  borderTop: "2px solid #ddd",
};

const active = {
  background: "#ffd400",
  borderRadius: "16px",
};
