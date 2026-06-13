export default function AIStudioPage() {
  const tools = [
    {
      title: "AI Assistant Builder",
      description: "Create custom AI assistants for support, business, and creator workflows.",
      items: ["Create Assistant", "My Assistants", "Deploy Assistant"],
    },
    {
      title: "AI Image Studio",
      description: "Generate images, logos, thumbnails, and social media graphics.",
      items: ["Generate Images", "Edit Images", "Create Logos"],
    },
    {
      title: "AI Content Studio",
      description: "Write posts, blogs, ads, emails, captions, and product descriptions.",
      items: ["Post Generator", "Blog Writer", "Marketing Copy"],
    },
    {
      title: "AI Coding Studio",
      description: "Generate code, debug errors, build components, and create APIs.",
      items: ["Code Assistant", "Debug Code", "Build Components"],
    },
    {
      title: "AI Automation Studio",
      description: "Build workflows, scheduled tasks, reminders, and smart automations.",
      items: ["Workflow Builder", "Scheduled Tasks", "Integrations"],
    },
    {
      title: "AI Marketplace",
      description: "Publish AI tools, sell prompts, browse agents, and share workflows.",
      items: ["Publish Tool", "Sell Prompts", "Browse Agents"],
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        background: "#0f0f14",
        color: "white",
      }}
    >
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            padding: "30px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #facc15, #ec4899, #7c3aed)",
            color: "black",
            marginBottom: "30px",
          }}
        >
          <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
            Amosclaud AI Studio
          </h1>
          <p style={{ fontSize: "18px", maxWidth: "700px" }}>
            Create AI content, assistants, automations, images, code, music,
            videos, and creator tools from one dashboard.
          </p>
        </div>

        <h2>AI Tools Dashboard</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {tools.map((tool) => (
            <div
              key={tool.title}
              style={{
                padding: "22px",
                borderRadius: "16px",
                background: "#181824",
                border: "1px solid #2a2a3a",
              }}
            >
              <h3 style={{ marginTop: 0 }}>{tool.title}</h3>
              <p style={{ color: "#cfcfe3" }}>{tool.description}</p>

              <ul>
                {tool.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <button
                style={{
                  marginTop: "10px",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  border: "none",
                  background: "#facc15",
                  color: "black",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                <a href="/ai-studio/coding">
  <button>
    Open Tool
  </button>
</a>
              
            
          
    

        <section
          style={{
            marginTop: "35px",
            padding: "24px",
            borderRadius: "16px",
            background: "#181824",
            border: "1px solid #2a2a3a",
          }}
        >
          <h2>Project Status</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "15px",
            }}
          >
            <div>
              <h3>0</h3>
              <p>Active Projects</p>
            </div>
            <div>
              <h3>0</h3>
              <p>Drafts</p>
            </div>
            <div>
              <h3>0</h3>
              <p>Published Tools</p>
            </div>
            <div>
              <h3>0</h3>
              <p>Automations</p>
            </div>
          </div>
        </section>

        <nav style={{ marginTop: "30px" }}>
          <a href="/" style={{ color: "#facc15" }}>Home</a>{" | "}
          <a href="/feed" style={{ color: "#facc15" }}>Feed</a>{" | "}
          <a href="/creator" style={{ color: "#facc15" }}>Creator Hub</a>{" | "}
          <a href="/marketplace" style={{ color: "#facc15" }}>Marketplace</a>{" | "}
          <a href="/admin" style={{ color: "#facc15" }}>Admin</a>
        </nav>
      </section>
    </main>
  );
}
