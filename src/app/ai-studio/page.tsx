export default function AIStudioPage() {
  const tools = [
  {
    {
      title: "AI Assistant Builder",
      description:
        "Create custom AI assistants for support, business, and creator workflows.",
      items: ["Create Assistant", "My Assistants", "Deploy Assistant"],
      link: "/creator",
    },
    {
      title: "AI Image Studio",
      description:
        "Generate images, logos, thumbnails, and social media graphics.",
      items: ["Generate Images", "Edit Images", "Create Logos"],
      link: "/ai-studio/image",
    },
    {
      title: "AI Content Studio",
      description:
        "Write posts, blogs, ads, emails, captions, and product descriptions.",
      items: ["Post Generator", "Blog Writer", "Marketing Copy"],
      link: "/ai-studio/content",
    },
    {
      title: "AI Coding Studio",
      description:
        "Generate code, debug errors, build components, and create APIs.",
      items: ["Code Assistant", "Debug Code", "Build Components"],
      link: "/ai-studio/coding",
    },
    {
      title: "AI Automation Studio",
      description:
        "Build workflows, scheduled tasks, reminders, and smart automations.",
      items: ["Workflow Builder", "Scheduled Tasks", "Integrations"],
      link: "/admin",
    },
    {
      title: "AI Marketplace",
      description:
        "Publish AI tools, sell prompts, browse agents, and share workflows.",
      items: ["Publish Tool", "Sell Prompts", "Browse Agents"],
      link: "/marketplace",
    },
  ];

  return (
    <main
      style={{
        background: "#050510",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
      }}
    >
      <section
        style={{
          padding: "40px",
          borderRadius: "24px",
          background:
            "linear-gradient(135deg,#facc15,#ec4899,#7c3aed)",
          color: "black",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "15px" }}>
          Amosclaud AI Studio
        </h1>

        <p style={{ fontSize: "1.3rem" }}>
          Create AI content, assistants, automations, images,
          code, music, videos, and creator tools from one dashboard.
        </p>
      </section>

      <h2 style={{ marginTop: "40px" }}>
        AI Tools Dashboard
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: "24px",
          marginTop: "20px",
        }}
      >
        {tools.map((tool) => (
          <div
            key={tool.title}
            style={{
              background: "#111122",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid #222244",
            }}
          >
            <h3>{tool.title}</h3>

            <p>{tool.description}</p>

            <ul>
              {tool.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a href={tool.link}>
              <button
                style={{
                  marginTop: "15px",
                  background: "#facc15",
                  color: "black",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  cursor: "pointer",
                <a href={tool.link}>
  <button>
    Open Tool
  </button>
</a>
              
              
              
            
          
    
      </div>

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
            gridTemplateColumns:
              "repeat(auto-fit,minmax(180px,1fr))",
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
        <a href="/" style={{ color: "#facc15" }}>
          Home
        </a>{" "}
        |{" "}
        <a href="/feed" style={{ color: "#facc15" }}>
          Feed
        </a>{" "}
        |{" "}
        <a href="/creator" style={{ color: "#facc15" }}>
          Creator Hub
        </a>{" "}
        |{" "}
        <a href="/marketplace" style={{ color: "#facc15" }}>
          Marketplace
        </a>{" "}
        |{" "}
        <a href="/admin" style={{ color: "#facc15" }}>
          Admin
        </a>
      </nav>
    </main>
  );
}
