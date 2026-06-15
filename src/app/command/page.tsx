export default function CommandCenterPage() {
  const commands = [
    "Generate Code",
    "Fix Deployment",
    "Create Route",
    "Build Feature",
    "AI Assistant",
    "Marketplace",
    "Payments",
    "Creator Dashboard",
  ];

  return (
    <main style={page}>
      <header style={header}>
        <h1>⚡ Amosclaud Command Center</h1>
        <p>Control the entire platform from one place.</p>
      </header>

      <section style={panel}>
        <h2>AI Command Console</h2>

        <textarea
          style={consoleBox}
          placeholder="Example: Create a new AI tool page with profile integration..."
        />

        <button style={runButton}>
          Execute Command
        </button>

        <div style={grid}>
          {commands.map((cmd) => (
            <button key={cmd} style={card}>
              {cmd}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "#000",
  color: "#fff",
  padding: 24,
  fontFamily: "Arial, sans-serif",
};

const header = {
  textAlign: "center" as const,
  marginBottom: 30,
};

const panel = {
  maxWidth: 1000,
  margin: "0 auto",
  background: "#111",
  border: "3px solid #ffd400",
  borderRadius: 24,
  padding: 24,
};

const consoleBox = {
  width: "100%",
  height: 180,
  padding: 16,
  borderRadius: 16,
  fontSize: 18,
};

const runButton = {
  marginTop: 16,
  width: "100%",
  padding: 18,
  borderRadius: 18,
  background: "#ffd400",
  border: "none",
  fontSize: 22,
  fontWeight: 900,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
  gap: 12,
  marginTop: 24,
};

const card = {
  padding: 18,
  borderRadius: 16,
  border: "2px solid #ff008c",
  background: "#1a1a1a",
  color: "#fff",
  fontWeight: 800,
};
