const pages: Record<string, { title: string; description: string; tools: string[] }> = {
  "ai-chat-assistant": {
    title: "AI Chat Assistant",
    description: "Chat with Amos AI and get help operating Amosclaud.",
    tools: ["Ask Amos AI", "Fix problems", "Plan content", "Build pages"],
  },
  "message-requests": {
    title: "Message Requests",
    description: "Manage people who want to message you.",
    tools: ["Accept request", "Decline request", "Block user"],
  },
  "who-can-message-me": {
    title: "Who Can Message Me",
    description: "Control who is allowed to send you messages.",
    tools: ["Everyone", "Followers", "Verified users", "No one"],
  },
  "read-receipts": {
    title: "Read Receipts",
    description: "Turn message read receipts on or off.",
    tools: ["Read receipts on", "Read receipts off"],
  },
  "online-status": {
    title: "Online Status",
    description: "Control whether people can see when you are active.",
    tools: ["Show online", "Hide online"],
  },
  "push-notifications": {
    title: "Push Notifications",
    description: "Manage alerts for messages, likes, followers, and AI updates.",
    tools: ["Messages", "Likes", "Followers", "AI updates"],
  },
  "blocked-chats": {
    title: "Blocked Chats",
    description: "View and manage blocked chat conversations.",
    tools: ["Blocked chats", "Unblock chat"],
  },
  "archived-chats": {
    title: "Archived Chats",
    description: "View old or hidden conversations.",
    tools: ["Open archive", "Restore chat"],
  },
  "creator-dashboard": {
    title: "Creator Dashboard",
    description: "Manage your posts, tools, marketplace items, and earnings.",
    tools: ["Posts", "Products", "Analytics", "Earnings"],
  },
  "monetization": {
    title: "Monetization",
    description: "Earn money from content, AI tools, subscriptions, and products.",
    tools: ["Creator income", "Subscriptions", "Paid tools", "Tips"],
  },
  "payments": {
    title: "Payments",
    description: "Manage payment methods, payouts, and transactions.",
    tools: ["Add payment", "Payouts", "Invoices", "Transactions"],
  },
  "subscriptions": {
    title: "Subscriptions",
    description: "Manage membership plans and recurring access.",
    tools: ["Plans", "Members", "Billing", "Access"],
  },
  "ai-fix": {
    title: "AI Fix",
    description: "Fix errors, deployment problems, and broken code.",
    tools: ["Fix build", "Clean files", "Debug route", "Deployment help"],
  },
  "business-assistant": {
    title: "Business Assistant",
    description: "Use Amos AI for business planning, sales, and support.",
    tools: ["Business plan", "Marketing", "Customer support", "Sales"],
  },
};

export default function HubPage({ params }: { params: { slug: string } }) {
  const pageData = pages[params.slug] || {
    title: formatTitle(params.slug),
    description: "This Amosclaud hub is ready to be connected.",
    tools: ["Open tool", "Manage settings", "Coming soon"],
  };

  return (
    <main style={page}>
      <header style={header}>
        <a href="/settings" style={back}>←</a>
        <h1 style={logo}>AMOS<span>CLAUD</span></h1>
        <a href="/profile" style={profile}>Profile</a>
      </header>

      <section style={card}>
        <h2 style={title}>{pageData.title}</h2>
        <p style={desc}>{pageData.description}</p>

        <div style={grid}>
          {pageData.tools.map((tool) => (
            <button key={tool} style={button}>
              {tool}
            </button>
          ))}
        </div>

        <textarea
          placeholder={`Write something for ${pageData.title}...`}
          style={textarea}
        />

        <button style={mainButton}>Run Amos AI</button>
      </section>
    </main>
  );
}

function formatTitle(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const page = {
  minHeight: "100vh",
  background: "#000",
  color: "#fff",
  fontFamily: "Arial, sans-serif",
};

const header = {
  background: "#ffd400",
  color: "#000",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "8px solid #ff008c",
};

const back = {
  color: "#000",
  textDecoration: "none",
  fontSize: 34,
  fontWeight: 900,
};

const logo = {
  margin: 0,
  fontSize: 30,
  fontWeight: 900,
};

const profile = {
  color: "#000",
  textDecoration: "none",
  fontWeight: 900,
};

const card = {
  margin: 24,
  padding: 24,
  border: "4px solid #ffd400",
  borderRadius: 26,
  background: "#111",
};

const title = {
  fontSize: 38,
  marginTop: 0,
};

const desc = {
  fontSize: 22,
  lineHeight: 1.5,
  color: "#ddd",
};

const grid = {
  display: "grid",
  gap: 14,
  marginTop: 24,
};

const button = {
  padding: 18,
  borderRadius: 16,
  border: "2px solid #ffd400",
  background: "#000",
  color: "#fff",
  fontSize: 20,
  fontWeight: 800,
};

const textarea = {
  width: "100%",
  height: 160,
  marginTop: 24,
  padding: 16,
  fontSize: 18,
  borderRadius: 14,
};

const mainButton = {
  marginTop: 18,
  width: "100%",
  padding: 18,
  borderRadius: 18,
  border: "none",
  background: "#ffd400",
  color: "#000",
  fontSize: 22,
  fontWeight: 900,
};
