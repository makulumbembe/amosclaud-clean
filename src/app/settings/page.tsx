export default function SettingsPage() {
  const sections = [
    {
      title: "Account",
      items: ["Profile", "Username", "Email & phone", "Password", "Verification"],
    },
    {
      title: "Business",
      items: ["Creator dashboard", "Monetization", "Subscriptions", "Payments", "Marketplace"],
    },
    {
      title: "Privacy",
      items: ["Private account", "Blocked users", "Messages", "Activity status"],
    },
    {
      title: "AI Tools",
      items: ["AI Studio", "AI Fix", "Code Generator", "Business Assistant"],
    },
    {
      title: "Support",
      items: ["Help center", "Report a problem", "Terms", "Privacy policy"],
    },
  ];

  return (
    <main style={page}>
      <header style={header}>
        <a href="/profile" style={back}>←</a>
        <h1 style={title}>Settings</h1>
        <span />
      </header>

      <section style={profileCard}>
        <div style={avatar}>A</div>
        <div>
          <h2 style={{ margin: 0 }}>Amosclaud</h2>
          <p style={{ margin: "4px 0 0", color: "#777" }}>Business & creator platform</p>
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.title} style={sectionBox}>
          <h3 style={sectionTitle}>{section.title}</h3>

          {section.items.map((item) => (
            <div key={item} style={row}>
              <span>{item}</span>
              <span style={{ color: "#999" }}>›</span>
            </div>
          ))}
        </section>
      ))}

      <button style={logout}>Log out</button>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "#f4f5f7",
  color: "#111",
  fontFamily: "Arial, sans-serif",
  paddingBottom: "90px",
};

const header = {
  position: "sticky" as const,
  top: 0,
  zIndex: 10,
  height: "64px",
  background: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 18px",
  borderBottom: "1px solid #e5e7eb",
};

const back = {
  color: "#111",
  fontSize: "32px",
  textDecoration: "none",
};

const title = {
  fontSize: "22px",
  fontWeight: 900,
};

const profileCard = {
  margin: "16px",
  padding: "16px",
  background: "white",
  borderRadius: "22px",
  display: "flex",
  alignItems: "center",
  gap: "14px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
};

const avatar = {
  width: "58px",
  height: "58px",
  borderRadius: "50%",
  background: "linear-gradient(135deg,#ffcc00,#ff0080)",
  color: "white",
  display: "grid",
  placeItems: "center",
  fontSize: "28px",
  fontWeight: 900,
};

const sectionBox = {
  margin: "16px",
  background: "white",
  borderRadius: "22px",
  overflow: "hidden",
  boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
};

const sectionTitle = {
  margin: 0,
  padding: "16px",
  color: "#777",
  fontSize: "13px",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
};

const row = {
  padding: "18px 16px",
  borderTop: "1px solid #f1f1f1",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "16px",
  fontWeight: 700,
};

const logout = {
  margin: "16px",
  width: "calc(100% - 32px)",
  padding: "16px",
  border: "none",
  borderRadius: "18px",
  background: "#ff3b30",
  color: "white",
  fontSize: "17px",
  fontWeight: 900,
};
