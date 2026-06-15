type Hub = {
  title: string;
  description: string;
  actions: string[];
};

const hubs: Record<string, Hub> = {
  "ai-chat-assistant": {
    title: "AI Chat Assistant",
    description: "Chat with Amos AI and operate Amosclaud tools.",
    actions: ["Ask Amos AI", "Fix an issue", "Plan a project", "Generate ideas"],
  },
  "ai-assistant": {
    title: "AI Assistant",
    description: "Your Amosclaud AI assistant hub.",
    actions: ["Chat", "Generate", "Fix", "Operate"],
  },
  "ai-fix": {
    title: "AI Fix",
    description: "Fix errors, broken pages, routes, and deployments.",
    actions: ["Fix code", "Fix deployment", "Fix route", "Clean files"],
  },
  "business-assistant": {
    title: "Business Assistant",
    description: "Plan business, sales, marketing, and support.",
    actions: ["Business plan", "Sales help", "Marketing copy", "Customer support"],
  },
  "creator-dashboard": {
    title: "Creator Dashboard",
    description: "Manage content, tools, products, and growth.",
    actions: ["Posts", "Products", "Analytics", "Earnings"],
  },
  "monetization": {
    title: "Monetization",
    description: "Earn from content, subscriptions, tools, and marketplace products.",
    actions: ["Creator income", "Subscriptions", "Paid tools", "Tips"],
  },
  "payments": {
    title: "Payments",
    description: "Manage payouts, transactions, invoices, and payment methods.",
    actions: ["Add payment", "View payouts", "Invoices", "Transactions"],
  },
  "subscriptions": {
    title: "Subscriptions",
    description: "Manage memberships and recurring access.",
    actions: ["Plans", "Members", "Billing", "Access"],
  },
  "message-requests": {
    title: "Message Requests",
    description: "Review people who want to message you.",
    actions: ["Accept", "Decline", "Block", "View request"],
  },
  "who-can-message-me": {
    title: "Who Can Message Me",
    description: "Control who can send you messages.",
    actions: ["Everyone", "Followers", "Verified", "No one"],
  },
  "read-receipts": {
    title: "Read Receipts",
    description: "Control whether people can see when you read messages.",
    actions: ["Turn on", "Turn off"],
  },
  "online-status": {
    title: "Online Status",
    description: "Control whether people can see when you are online.",
    actions: ["Show online", "Hide online"],
  },
  "push-notifications": {
    title: "Push Notifications",
    description: "Manage alerts for messages, likes, followers, and AI updates.",
    actions: ["Messages", "Likes", "Followers", "AI updates"],
  },
  "blocked-chats": {
    title: "Blocked Chats",
    description: "View blocked chat conversations.",
    actions: ["View blocked", "Unblock"],
  },
  "archived-chats": {
    title: "Archived Chats",
    description: "View hidden or old conversations.",
    actions: ["Open archive", "Restore chat"],
  },
  "username": {
    title: "Username",
    description: "Change your Amosclaud username.",
    actions: ["Edit username", "Save username"],
  },
  "email-phone": {
    title: "Email & Phone",
    description: "Manage your email address and phone number.",
    actions: ["Edit email", "Edit phone", "Verify"],
  },
  "password": {
    title: "Password",
    description: "Change or secure your password.",
    actions: ["Change password", "Reset password"],
  },
  "verification": {
    title: "Verification",
    description: "Verify your Amosclaud account.",
    actions: ["Start verification", "Upload document", "Check status"],
  },
  "edit-profile": {
    title: "Edit Profile",
    description: "Update your profile name, bio, avatar, and links.",
    actions: ["Edit name", "Edit bio", "Change avatar", "Save profile"],
  },
  "help-center": {
    title: "Help Center",
    description: "Get help using Amosclaud.",
    actions: ["Account help", "AI help", "Payments help", "Report issue"],
  },
  "report-problem": {
    title: "Report a Problem",
    description: "Send an issue to Amosclaud support.",
    actions: ["Report bug", "Report abuse", "Send feedback"],
  },
  "terms": {
    title: "Terms",
    description: "Read Amosclaud platform terms.",
    actions: ["View terms"],
  },
  "privacy-policy": {
    title: "Privacy Policy",
    description: "Read Amosclaud privacy rules.",
    actions: ["View privacy policy"],
  },
};

export default async function MainHubPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolved = await params;
  const slug = resolved.slug?.join("/") || "hub";
  const key = resolved.slug?.[resolved.slug.length - 1] || "hub";

  const hub =
    hubs[key] || {
      title: makeTitle(key),
      description: `This Amosclaud route is connected: /${slug}`,
      actions: ["Open", "Generate", "Manage", "Coming soon"],
    };

  return (
    <main style={page}>
      <header style={header}>
        <a href="/settings" style={back}>←</a>
        <h1 style={brand}>AMOS<span style={pink}>CLAUD</span></h1>
        <a href="/profile" style={profile}>Profile</a>
      </header>

      <section style={card}>
        <p style={route}>/{slug}</p>
        <h2 style={title}>{hub.title}</h2>
        <p style={description}>{hub.description}</p>

        <div style={grid}>
          {hub.actions.map((action) => (
            <button key={action} style={button}>
              {action}
            </button>
          ))}
        </div>

        <textarea
          placeholder={`Write what you want to do in ${hub.title}...`}
          style={textarea}
        />

        <button style={runButton}>Run Amos AI</button>
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

const brand = {
  margin: 0,
  fontSize: 30,
  fontWeight: 900,
};

const pink = {
  color: "#ff008c",
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

const route = {
  color: "#ffd400",
  fontWeight: 800,
};

const title = {
  fontSize: 40,
  margin: "10px 0",
};

const description = {
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

const runButton = {
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
