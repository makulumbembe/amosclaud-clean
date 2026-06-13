export default function MarketplacePage() {
  return (
    <main style={{ padding: "30px" }}>
      <h1>Marketplace</h1>
      <p>Browse tools, services, prompts, and creator products.</p>

      <ul>
        <li>
          <a href="/marketplace/apps">Apps</a>
        </li>
        <li>
          <a href="/marketplace/prompts">Prompts</a>
        </li>
        <li>
          <a href="/marketplace/agents">AI Agents</a>
        </li>
        <li>
          <a href="/marketplace/creator-tools">Creator Tools</a>
        </li>
      </ul>
    </main>
  );
}
