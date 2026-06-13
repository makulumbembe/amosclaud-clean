export default function AdminHubPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Amosclaud Admin Hub
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "40px",
        }}
      >
        Control center for platform management, AI tools, users, analytics,
        revenue, and business operations.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <div style={card}>
          <h2>👥 Users</h2>
          <p>Manage platform members and permissions.</p>
        </div>

        <div style={card}>
          <h2>🤖 AI Studio</h2>
          <p>Monitor AI usage, prompts, and integrations.</p>
        </div>

        <div style={card}>
          <h2>💰 Revenue</h2>
          <p>Track subscriptions, payments, and growth.</p>
        </div>

        <div style={card}>
          <h2>🛒 Marketplace</h2>
          <p>Review products, creators, and transactions.</p>
        </div>

        <div style={card}>
          <h2>📊 Analytics</h2>
          <p>Platform statistics and performance insights.</p>
        </div>

        <div style={card}>
          <h2>🛡 Security</h2>
          <p>Admin access, logs, monitoring, and alerts.</p>
        </div>

        <div style={card}>
          <h2>📨 Support</h2>
          <p>Customer support tickets and communications.</p>
        </div>

        <div style={card}>
          <h2>⚙ System</h2>
          <p>Application settings and integrations.</p>
        </div>
      </div>

      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          background: "#111827",
          borderRadius: "16px",
        }}
      >
        <h2>Quick Actions</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "15px",
          }}
        >
          <button style={button}>Add User</button>
          <button style={button}>Review Marketplace</button>
          <button style={button}>View Analytics</button>
          <button style={button}>AI Dashboard</button>
          <button style={button}>System Settings</button>
        </div>
      </div>
    </main>
  );
}

const card = {
  background: "#111827",
  padding: "20px",
  borderRadius: "16px",
  border: "1px solid #1e293b",
};

const button = {
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "10px",
  padding: "12px 18px",
  cursor: "pointer",
};
