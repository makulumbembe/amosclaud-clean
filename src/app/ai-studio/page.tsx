export default function AIStudioPage() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Amosclaud AI Studio</h1>

      <p>
        Build, test, deploy, and manage AI tools, assistants,
        automations, and workflows.
      </p>

      <h2>AI Tools</h2>

      <ul>
        <li>AI Assistant Builder</li>
        <li>Workflow Automation</li>
        <li>Prompt Library</li>
        <li>AI Marketplace</li>
        <li>API Integration</li>
        <li>Knowledge Base</li>
      </ul>

      <h2>Projects</h2>

      <ul>
        <li>Active Projects</li>
        <li>Draft Projects</li>
        <li>Published Projects</li>
      </ul>

      <nav>
        <a href="/">Home</a> |{" "}
        <a href="/feed">Feed</a> |{" "}
        <a href="/creator">Creator Hub</a> |{" "}
        <a href="/marketplace">Marketplace</a>
      </nav>
    </main>
  );
}
