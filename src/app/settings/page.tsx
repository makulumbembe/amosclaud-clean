export default function SettingsPage() {
  const sections = [
    {
      title: "Account",
      items: ["Profile", "Username", "Email & phone", "Password", "Verification"],
    },
    {
      title: "Chat Settings",
      items: [
        "Message requests",
        "Who can message me",
        "Read receipts",
        "Online status",
        "Push notifications",
        "Blocked chats",
        "Archived chats",
        "AI chat assistant",
      ],
    },
    {
      title: "Notifications",
      items: ["Likes", "Comments", "Followers", "Messages", "AI updates"],
    },
    {
      title: "Privacy",
      items: ["Private account", "Blocked users", "Activity status", "Story privacy"],
    },
    {
      title: "Business & Money",
      items: ["Creator dashboard", "Monetization", "Subscriptions", "Payments", "Marketplace"],
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
        <a href="/" style={home}>Home</a>
      </header>

      <section style={profileCard}>
        <div style={avatar}>A</div>
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: 0 }}>Amosclaud</h2>
          <p style={{ margin: "4px 0 0", color: "#777" }}>@amosclaud</p>
        </div>
        <button style={editButton}>Edit</button>
      </section>

      {sections.map((section) => (
        <section key={section.title} style={sectionBox}>
          <h3 style={sectionTitle}>{section.title}</h3>
          {section.items.map((item) => (
            <div key={item} style={row}>
              <span>{item}</span>
              <span style={{ color: "#999", fontSize: 26 }}>›</span>
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
  fontSize: "34px",
  textDecoration: "none",
  fontWeight: 900,
};

const home = {
  color: "#2563eb",
  textDecoration: "none",
  fontWeight: 900,
};

const title = {
  fontSize: "22px",
  fontWeight: 900,
};

const profileCard = {
  margin: "16px",
  padding: "16px",
  background: "white",
  borderRadius: "24px",
  display: "flex",
  alignItems: "center",
  gap: "14px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
};

const avatar = {
  width: "62px",
  height: "62px",
  borderRadius: "50%",
  background: "linear-gradient(135deg,#ffcc00,#ff0080,#7c3aed)",
  color: "white",
  display: "grid",
  placeItems: "center",
  fontSize: "30px",
  fontWeight: 900,
};

const editButton = {
  border: "none",
  background: "#111",
  color: "white",
  borderRadius: "999px",
  padding: "10px 16px",
  fontWeight: 900,
};

const sectionBox = {
  margin: "16px",
  background: "white",
  borderRadius: "24px",
  overflow: "hidden",
  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
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
  fontWeight: 800,
};

const logout = {
  margin: "16px",
  width: "calc(100% - 32px)",
  padding: "16px",
  border: "none",
  borderRadius: "20px",
  background: "#ff3b30",
  color: "white",
  fontSize: "17px",
  fontWeight: 900,
};
