export default function AIStudioPage() {
  const features = [
    {
      title: "Generate Code",
      text: "Create React, Next.js, API routes, and app components.",
      icon: "💻",
      href: "/ai-studio/ai-code",
    },
    {
      title: "Generate Apps",
      text: "Build app ideas, screens, tools, and full project plans.",
      icon: "📱",
      href: "/ai-studio/coding",
    },
    {
      title: "Generate Images",
      text: "Create image prompts, designs, logos, and visual ideas.",
      icon: "🎨",
      href: "/ai-studio/image",
    },
    {
      title: "Generate Websites",
      text: "Create landing pages, business sites, and social pages.",
      icon: "🌐",
      href: "/ai-studio/content",
    },
    {
      title: "Auto Deploy",
      text: "Fix build errors and prepare apps for deployment.",
      icon: "🚀",
      href: "/ai-studio/auto-deploy",
    },
    {
      title: "AI Marketplace",
      text: "Create products, prompts, services, and sales offers.",
      icon: "🛒",
      href: "/ai-studio/marketplace",
    },
  ];

  return (
    <main style={page}>
      <section style={hero}>
        <div style={robot}>🤖</div>
        <div>
          <h1 style={title}>Amos AI</h1>
          <p style={subtitle}>Generate code, apps, images, and websites.</p>
        </div>
      </section>

      <section style={quickCard}>
        <h2 style={quickTitle}>What do you want to create?</h2>
        <p style={quickText}>
          Choose an AI tool below and let Amosclaud help you build faster.
        </p>
      </section>

      <section style={grid}>
        {features.map((item) => (
          <a key={item.title} href={item.href} style={card}>
            <div style={icon}>{item.icon}</div>
            <h3 style={cardTitle}>{item.title}</h3>
            <p style={cardText}>{item.text}</p>
            <span style={open}>Open →</span>
          </a>
        ))}
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "#000",
  color: "white",
  padding: "24px",
  paddingBottom: "100px",
  fontFamily: "Arial, sans-serif",
};

const hero = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  background: "#ffd400",
  color: "#000",
  borderRadius: "28px",
  padding: "22px",
  boxShadow: "10px 10px 0 #ff0080",
};

const robot = {
  width: "64px",
  height: "64px",
  borderRadius: "20px",
  background: "#000",
  display: "grid",
  placeItems: "center",
  fontSize: "34px",
};

const title = {
  margin: 0,
  fontSize: "38px",
  fontWeight: 900,
};

const subtitle = {
  margin: "6px 0 0",
  fontWeight: 800,
};

const quickCard = {
  marginTop: "24px",
  background: "#111",
  border: "3px solid #ffd400",
  borderRadius: "24px",
  padding: "20px",
};

const quickTitle = {
  margin: 0,
  fontSize: "24px",
  fontWeight: 900,
};

const quickText = {
  color: "#ccc",
  fontWeight: 700,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "16px",
  marginTop: "22px",
};

const card = {
  background: "#fff",
  color: "#000",
  textDecoration: "none",
  borderRadius: "24px",
  padding: "20px",
  border: "4px solid #000",
  boxShadow: "8px 8px 0 #ffd400",
};

const icon = {
  fontSize: "36px",
};

const cardTitle = {
  margin: "10px 0 4px",
  fontSize: "24px",
  fontWeight: 900,
};

const cardText = {
  margin: 0,
  color: "#444",
  fontWeight: 700,
  lineHeight: 1.5,
};

const open = {
  display: "inline-block",
  marginTop: "14px",
  fontWeight: 900,
};
