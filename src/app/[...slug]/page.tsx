type Hub = {
  title: string;
  badge: string;
  description: string;
  prompt: string;
  actions: string[];
};

const hubs: Record<string, Hub> = {
  "ai-assistant": {
    title: "Amos AI Assistant",
    badge: "AI OPERATIONS",
    description: "Your main Amosclaud assistant for ideas, coding, business, content, and platform help.",
    prompt: "Ask Amos AI anything...",
    actions: ["Ask AI", "Fix problem", "Generate plan", "Build feature"],
  },
  "ai-chat-assistant": {
    title: "AI Chat Assistant",
    badge: "SMART CHAT",
    description: "Chat with Amos AI and get help operating your Amosclaud tools.",
    prompt: "Message Amos AI...",
    actions: ["Chat", "Summarize", "Answer", "Guide me"],
  },
  "ai-fix": {
    title: "AI Fix",
    badge: "DEBUG HUB",
    description: "Fix broken routes, errors, deployment issues, and missing files.",
    prompt: "Paste your error here...",
    actions: ["Fix code", "Fix route", "Fix deployment", "Explain error"],
  },
  "business-assistant": {
    title: "Business Assistant",
    badge: "BUSINESS AI",
    description: "Plan business, marketing, sales, customers, and support.",
    prompt: "What business task do you need?",
    actions: ["Business plan", "Marketing", "Sales copy", "Customer support"],
  },
  "creator-dashboard": {
    title: "Creator Dashboard",
    badge: "CREATOR HUB",
    description: "Manage posts, products, audience, tools, and earnings.",
    prompt: "What do you want to create?",
    actions: ["Posts", "Products", "Analytics", "Earnings"],
  },
  monetization: {
    title: "Monetization",
    badge: "MONEY HUB",
    description: "Earn from content, subscriptions, services, AI tools, and marketplace products.",
    prompt: "Describe what you want to monetize...",
    actions: ["Subscriptions", "Paid tools", "Tips", "Creator income"],
  },
  payments: {
    title: "Payments",
    badge: "PAYMENT CENTER",
    description: "Manage payouts, invoices, transactions, and payment methods.",
    prompt: "What payment issue do you need help with?",
    actions: ["Payouts", "Transactions", "Invoices", "Payment method"],
  },
  marketplace: {
    title: "Marketplace",
    badge: "SELLING HUB",
    description: "Buy, sell, promote, and manage Amosclaud marketplace products.",
    prompt: "What do you want to sell or find?",
    actions: ["List product", "Find product", "Manage orders", "Promote item"],
  },
  "message-requests": {
    title: "Message Requests",
    badge: "CHAT CONTROL",
    description: "Review and manage people who want to message you.",
    prompt: "Manage message requests...",
    actions: ["Accept", "Decline", "Block", "Review"],
  },
  "who-can-message-me": {
    title: "Who Can Message Me",
    badge: "PRIVACY",
    description: "Control who is allowed to send you messages.",
    prompt: "Choose message privacy...",
    actions: ["Everyone", "Followers", "Verified", "No one"],
  },
  "read-receipts": {
    title: "Read Receipts",
    badge: "MESSAGES",
    description: "Control whether people see when you read their messages.",
    prompt: "Choose read receipt setting...",
    actions: ["Turn on", "Turn off"],
  },
  "online-status": {
    title: "Online Status",
    badge: "PRIVACY",
    description: "Control whether people can see when you are active.",
    prompt: "Choose online status...",
    actions: ["Show online", "Hide online"],
  },
  "push-notifications": {
    title: "Push Notifications",
    badge: "ALERTS",
    description: "Manage alerts for likes, comments, messages, followers, and AI updates.",
    prompt: "Choose notification settings...",
    actions: ["Messages", "Likes", "Followers", "AI updates"],
  },
  username: {
    title: "Username",
    badge: "ACCOUNT",
    description: "Change or manage your Amosclaud username.",
    prompt: "Enter new username...",
    actions: ["Check username", "Save username"],
  },
  "email-phone": {
    title: "Email & Phone",
    badge: "ACCOUNT",
    description: "Manage your email address and phone number.",
    prompt: "Enter email or phone...",
    actions: ["Edit email", "Edit phone", "Verify"],
  },
  password: {
    title: "Password",
    badge: "SECURITY",
    description: "Change your password and protect your account.",
    prompt: "Security action...",
    actions: ["Change password", "Reset password", "Secure account"],
  },
  verification: {
    title: "Verification",
    badge: "TRUST",
    description: "Verify your Amosclaud account.",
    prompt: "Start verification...",
    actions: ["Verify account", "Upload document", "Check status"],
  },
  "edit-profile": {
    title: "Edit Profile",
    badge: "PROFILE",
    description: "Update your name, bio, avatar, links, and public profile.",
    prompt: "What do you want to update?",
    actions: ["Edit name", "Edit bio", "Change photo", "Save profile"],
  },
  "help-center": {
    title: "Help Center",
    badge: "SUPPORT",
    description: "Get help with Amosclaud account, AI tools, payments, and settings.",
    prompt: "What do you need help with?",
    actions: ["Account help", "AI help", "Payment help", "Platform help"],
  },
  "report-problem": {
    title: "Report a Problem",
    badge: "SUPPORT",
    description: "Report bugs, abuse, broken tools, or missing features.",
    prompt: "Describe the problem...",
    actions: ["Report bug", "Report abuse", "Send feedback"],
  },
  terms: {
    title: "Terms",
    badge: "LEGAL",
    description: "Amosclaud platform terms and user rules.",
    prompt: "Terms section...",
    actions: ["Read terms"],
  },
  "privacy-policy": {
    title: "Privacy Policy",
    badge: "LEGAL",
    description: "Amosclaud privacy policy and data protection information.",
    prompt: "Privacy section...",
    actions: ["Read privacy policy"],
  },
};

export default function MainHubPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  const slug = params.slug?.join("/") || "hub";
  const key = params.slug?.[params.slug.length - 1] || "hub";

  const hub =
    hubs[key] || {
      title: makeTitle(key),
      badge: "AMOSCLAUD HUB",
      description: `This Amosclaud route is connected and ready: /${slug}`,
      prompt: "Tell Amos AI what to do...",
      actions: ["Open", "Generate", "Manage", "Coming soon"],
    };

  return (
    <main style={page}>
      <header style={header}>
        <a href="/settings" style={back}>←</a>
        <div>
          <h1 style={brand}>AMOS<span style={pink}>CLAUD</span></h1>
          <p style={small}>AI • Creator • Business • Operations</p>
        </div>
        <a href="/profile" style={profile}>Profile</a>
      </header>

      <section style={hero}>
        <div style={badge}>{hub.badge}</div>
        <h2 style={title}>{hub.title}</h2>
        <p style={description}>{hub.description}</p>
        <p style={route}>Connected route: /{slug}</p>
      </section>

      <section style={card}>
        <h3 style={sectionTitle}>Quick Actions</h3>

        <div style={grid}>
          {hub.actions.map((action) => (
            <button key={action} style={button}>
              {action}
            </button>
          ))}
        </div>

        <textarea placeholder={hub.prompt} style={textarea} />

        <button style={runButton}>Run Amos AI</button>

        <div style={statusBox}>
          <strong>Status:</strong> Frontend connected. Backend AI operation can be added next.
        </div>
      </section>
    </main>
  );
}

function makeTitle(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const page = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #000 0%, #111 55%, #210014 100%)",
  color: "#fff",
  fontFamily: "Arial, sans-serif",
  paddingBottom: 40,
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
  fontSize: 36,
  fontWeight: 900,
};

const brand = {
  margin: 0,
  fontSize: 30,
  fontWeight: 900,
};

const pink = {
  color: "#ff008c",
};

const small = {
  margin: "4px 0 0",
  fontSize: 13,
  fontWeight: 800,
};

const profile = {
  color: "#000",
  textDecoration: "none",
  fontWeight: 900,
  background: "#fff",
  padding: "10px 14px",
  borderRadius: 20,
};

const hero = {
  margin: 24,
  padding: 26,
  borderRadius: 28,
  background: "linear-gradient(135deg, #1a1a1a, #2c0020)",
  border: "3px solid #ffd400",
  boxShadow: "0 0 30px rgba(255, 212, 0, 0.25)",
};

const badge = {
  display: "inline-block",
  background: "#ff008c",
  color: "#fff",
  padding: "8px 14px",
  borderRadius: 999,
  fontSize: 13,
  fontWeight: 900,
  letterSpacing: 1,
};

const title = {
  fontSize: 42,
  margin: "16px 0 10px",
  fontWeight: 900,
};

const description = {
  fontSize: 22,
  lineHeight: 1.5,
  color: "#eee",
};

const route = {
  color: "#ffd400",
  fontWeight: 900,
  fontSize: 16,
};

const card = {
  margin: 24,
  padding: 24,
  border: "3px solid #ffd400",
  borderRadius: 26,
  background: "#111",
};

const sectionTitle = {
  marginTop: 0,
  fontSize: 28,
};

const grid = {
  display: "grid",
  gap: 14,
};

const button = {
  padding: 18,
  borderRadius: 18,
  border: "2px solid #ffd400",
  background: "#000",
  color: "#fff",
  fontSize: 20,
  fontWeight: 900,
};

const textarea = {
  width: "100%",
  height: 170,
  marginTop: 24,
  padding: 16,
  fontSize: 18,
  borderRadius: 16,
  border: "3px solid #ff008c",
};

const runButton = {
  marginTop: 18,
  width: "100%",
  padding: 20,
  borderRadius: 20,
  border: "none",
  background: "#ffd400",
  color: "#000",
  fontSize: 24,
  fontWeight: 900,
};

const statusBox = {
  marginTop: 18,
  padding: 16,
  borderRadius: 18,
  background: "#222",
  color: "#ddd",
  border: "1px solid #444",
};