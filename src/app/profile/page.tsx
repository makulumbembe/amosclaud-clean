export default function ProfilePage() {
  return (
    <main style={page}>
      <header style={topbar}>
        <a href="/feed" style={back}>←</a>
        <strong style={logo}>AMOS<span style={{ color: "#ff0080" }}>CLAUD</span></strong>
        <a href="/settings" style={settings}>⚙</a>
      </header>

      <section style={profileCard}>
        <div style={avatar}>A</div>
        <h1 style={name}>Amosclaud</h1>
        <p style={handle}>@amosclaud</p>
        <p style={bio}>
          AI social platform for creators, business, apps, websites, content, and digital growth.
        </p>

        <div style={stats}>
          <div><b>12.4K</b><span>Followers</span></div>
          <div><b>318</b><span>Following</span></div>
          <div><b>1,075</b><span>Coins</span></div>
        </div>

        <div style={actions}>
          <a href="/chat" style={button}>💬 Chat</a>
          <a href="/settings" style={button}>⚙ Settings</a>
        </div>
      </section>

      <section style={card}>
        <h2 style={sectionTitle}>Affiliate Program</h2>
        <p style={text}>
          Invite friends and earn Amos Coins when they join, create, or upgrade.
        </p>

        <div style={linkBox}>https://amosclaud.com/login?ref=amosclaud</div>

        <div style={actions}>
          <button style={darkButton}>Copy Link</button>
          <button style={yellowButton}>Share</button>
        </div>
      </section>

      <section style={card}>
        <h2 style={sectionTitle}>Creator Tools</h2>
        <div style={toolGrid}>
          <a href="/ai-studio" style={tool}>🤖 Amos AI</a>
          <a href="/programming" style={tool}>💻 Code</a>
          <a href="/marketplace" style={tool}>🛒 Marketplace</a>
          <a href="/settings" style={tool}>⚙ Settings</a>
        </div>
      </section>

      <nav style={bottomNav}>
        <a href="/feed">🏠<span>Feed</span></a>
        <a href="/search">🔍<span>Search</span></a>
        <a href="/ai-studio">✨<span>Studio</span></a>
        <a href="/admin-hub">▦<span>Hub</span></a>
        <a href="/profile" style={active}>👤<span>Profile</span></a>
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

const topbar = {
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

const back = {
  color: "#000",
  fontSize: "26px",
  textDecoration: "none",
  fontWeight: 900,
};

const logo = {
  color: "#000",
  fontSize: "22px",
  fontWeight: 900,
};

const settings = {
  color: "#000",
  textDecoration: "none",
  fontSize: "22px",
};

const profileCard = {
  margin: "18px",
  padding: "22px",
  background: "#111",
  borderRadius: "24px",
  border: "3px solid #ffd400",
  textAlign: "center" as const,
};

const avatar = {
  width: "86px",
  height: "86px",
  margin: "0 auto 12px",
  borderRadius: "50%",
  background: "linear-gradient(135deg,#ffd400,#ff0080)",
  display: "grid",
  placeItems: "center",
  color: "#fff",
  fontSize: "38px",
  fontWeight: 900,
};

const name = {
  margin: 0,
  fontSize: "28px",
  fontWeight: 900,
};

const handle = {
  margin: "4px 0",
  color: "#aaa",
  fontSize: "15px",
};

const bio = {
  color: "#ddd",
  lineHeight: 1.5,
  fontSize: "15px",
};

const stats = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px",
  marginTop: "18px",
};

const actions = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px",
  marginTop: "16px",
};

const button = {
  background: "#fff",
  color: "#000",
  textDecoration: "none",
  padding: "13px",
  borderRadius: "16px",
  fontWeight: 900,
};

const card = {
  margin: "18px",
  padding: "20px",
  background: "#111",
  borderRadius: "24px",
  border: "2px solid #222",
};

const sectionTitle = {
  margin: 0,
  fontSize: "21px",
};

const text = {
  color: "#ccc",
  fontSize: "15px",
  lineHeight: 1.5,
};

const linkBox = {
  background: "#000",
  color: "#ffd400",
  padding: "14px",
  borderRadius: "14px",
  overflow: "hidden",
  whiteSpace: "nowrap" as const,
  textOverflow: "ellipsis",
};

const darkButton = {
  background: "#000",
  color: "#ffd400",
  border: "2px solid #ffd400",
  padding: "13px",
  borderRadius: "16px",
  fontWeight: 900,
};

const yellowButton = {
  background: "#ffd400",
  color: "#000",
  border: "none",
  padding: "13px",
  borderRadius: "16px",
  fontWeight: 900,
};

const toolGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px",
  marginTop: "14px",
};

const tool = {
  background: "#fff",
  color: "#000",
  textDecoration: "none",
  padding: "16px",
  borderRadius: "16px",
  fontWeight: 900,
};

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
