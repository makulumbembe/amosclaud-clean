export default function SettingsPage() {
  const sections = [
    {
      title: "ACCOUNT",
      items: [
        { name: "Profile", href: "/profile" },
        { name: "Username", href: "/username" },
        { name: "Email & phone", href: "/email-phone" },
        { name: "Password", href: "/password" },
        { name: "Verification", href: "/verification" },
      ],
    },
    {
      title: "CHAT SETTINGS",
      items: [
        { name: "Message requests", href: "/message-requests" },
        { name: "Who can message me", href: "/who-can-message-me" },
        { name: "Read receipts", href: "/read-receipts" },
        { name: "Online status", href: "/online-status" },
        { name: "Push notifications", href: "/push-notifications" },
        { name: "Blocked chats", href: "/blocked-chats" },
        { name: "Archived chats", href: "/archived-chats" },
        { name: "AI chat assistant", href: "/ai-chat-assistant" },
      ],
    },
    {
      title: "NOTIFICATIONS",
      items: [
        { name: "Likes", href: "/likes" },
        { name: "Comments", href: "/comments" },
        { name: "Followers", href: "/followers" },
        { name: "Messages", href: "/messages" },
        { name: "AI updates", href: "/ai-updates" },
      ],
    },
    {
      title: "PRIVACY",
      items: [
        { name: "Private account", href: "/private-account" },
        { name: "Blocked users", href: "/blocked-users" },
        { name: "Activity status", href: "/activity-status" },
        { name: "Story privacy", href: "/story-privacy" },
      ],
    },
    {
      title: "BUSINESS & MONEY",
      items: [
        { name: "Creator dashboard", href: "/creator-dashboard" },
        { name: "Monetization", href: "/monetization" },
        { name: "Subscriptions", href: "/subscriptions" },
        { name: "Payments", href: "/payments" },
        { name: "Marketplace", href: "/marketplace" },
      ],
    },
    {
      title: "AI TOOLS",
      items: [
        { name: "AI Studio", href: "/ai-studio" },
        { name: "AI Fix", href: "/ai-fix" },
        { name: "Code Generator", href: "/ai-code-studio" },
        { name: "Business Assistant", href: "/business-assistant" },
      ],
    },
    {
      title: "SUPPORT",
      items: [
        { name: "Help center", href: "/help-center" },
        { name: "Report a problem", href: "/report-problem" },
        { name: "Terms", href: "/terms" },
        { name: "Privacy policy", href: "/privacy-policy" },
      ],
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
        <div>
          <h2 style={profileName}>Amosclaud</h2>
          <p style={handle}>@amosclaud</p>
        </div>
        <a href="/edit-profile" style={edit}>Edit</a>
      </section>

      {sections.map((section) => (
        <section key={section.title} style={card}>
          <h3 style={sectionTitle}>{section.title}</h3>

          {section.items.map((item) => (
            <a key={item.name} href={item.href} style={row}>
              <span>{item.name}</span>
              <span style={arrow}>›</span>
            </a>
          ))}
        </section>
      ))}

      <a href="/login" style={logout}>Log out</a>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "#f4f5f7",
  color: "#111",
  fontFamily: "Arial, sans-serif",
  paddingBottom: 40,
};

const header = {
  height: 75,
  background: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 28px",
  borderBottom: "1px solid #ddd",
  position: "sticky" as const,
  top: 0,
  zIndex: 10,
};

const back = {
  fontSize: 34,
  textDecoration: "none",
  color: "#111",
  fontWeight: "bold",
};

const title = {
  margin: 0,
  fontSize: 34,
  fontWeight: 900,
};

const home = {
  color: "#0b66d8",
  fontSize: 24,
  fontWeight: 800,
  textDecoration: "none",
};

const profileCard = {
  margin: "28px",
  padding: 28,
  background: "#fff",
  borderRadius: 30,
  display: "flex",
  alignItems: "center",
  gap: 20,
  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
};

const avatar = {
  width: 88,
  height: 88,
  borderRadius: "50%",
  background: "linear-gradient(135deg, #ffd400, #ff006e, #7b2cff)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 48,
  fontWeight: 900,
};

const profileName = {
  margin: 0,
  fontSize: 34,
  fontWeight: 900,
};

const handle = {
  margin: "6px 0 0",
  color: "#777",
  fontSize: 24,
};

const edit = {
  marginLeft: "auto",
  background: "#111",
  color: "#fff",
  textDecoration: "none",
  padding: "16px 24px",
  borderRadius: 28,
  fontSize: 22,
  fontWeight: 800,
};

const card = {
  margin: "28px",
  background: "#fff",
  borderRadius: 30,
  overflow: "hidden",
  boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
};

const sectionTitle = {
  margin: 0,
  padding: "24px 28px",
  color: "#777",
  fontSize: 22,
  letterSpacing: 3,
  fontWeight: 900,
  borderBottom: "1px solid #eee",
};

const row = {
  minHeight: 82,
  padding: "0 28px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid #eee",
  color: "#111",
  textDecoration: "none",
  fontSize: 25,
  fontWeight: 850,
};

const arrow = {
  color: "#999",
  fontSize: 42,
};

const logout = {
  margin: "28px",
  height: 70,
  borderRadius: 30,
  background: "#ff3b30",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  fontSize: 28,
  fontWeight: 900,
};
