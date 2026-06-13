export default function WalletPage() {
  const transactions = [
    { title: "Daily reward", amount: "+25", type: "Earned" },
    { title: "AI Studio usage", amount: "-10", type: "Spent" },
    { title: "Referral bonus", amount: "+100", type: "Earned" },
    { title: "Marketplace credit", amount: "+50", type: "Earned" },
  ];

  return (
    <main style={page}>
      <header style={header}>
        <a href="/profile" style={back}>←</a>
        <h1 style={title}>Wallet</h1>
        <a href="/settings" style={settings}>⚙</a>
      </header>

      <section style={balanceCard}>
        <p style={label}>Amosclaud Coins</p>
        <h2 style={balance}>1,075</h2>
        <p style={subtext}>Use coins for AI tools, boosts, creator rewards, and marketplace features.</p>

        <div style={actions}>
          <button style={primaryButton}>Add Coins</button>
          <button style={secondaryButton}>Send</button>
        </div>
      </section>

      <section style={card}>
        <h2 style={sectionTitle}>Quick Actions</h2>

        <div style={grid}>
          <a href="/ai-studio" style={actionCard}>🤖 AI Tools</a>
          <a href="/marketplace" style={actionCard}>💼 Marketplace</a>
          <a href="/profile" style={actionCard}>👤 Profile</a>
          <a href="/settings" style={actionCard}>⚙ Settings</a>
        </div>
      </section>

      <section style={card}>
        <h2 style={sectionTitle}>Transactions</h2>

        {transactions.map((item) => (
          <div key={item.title} style={row}>
            <div>
              <strong>{item.title}</strong>
              <p style={rowText}>{item.type}</p>
            </div>

            <strong style={item.amount.startsWith("+") ? green : red}>
              {item.amount}
            </strong>
          </div>
        ))}
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "#000",
  color: "#fff",
  fontFamily: "Arial, sans-serif",
  paddingBottom: "90px",
};

const header = {
  height: "64px",
  background: "#ffd400",
  color: "#000",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 18px",
  borderBottom: "5px solid #ff0080",
};

const back = {
  color: "#000",
  textDecoration: "none",
  fontSize: "30px",
  fontWeight: 900,
};

const title = {
  margin: 0,
  fontSize: "24px",
  fontWeight: 900,
};

const settings = {
  color: "#000",
  textDecoration: "none",
  fontSize: "22px",
};

const balanceCard = {
  margin: "18px",
  padding: "24px",
  borderRadius: "26px",
  background: "linear-gradient(135deg,#ffd400,#ff0080)",
  color: "#000",
};

const label = {
  margin: 0,
  fontWeight: 900,
};

const balance = {
  margin: "8px 0",
  fontSize: "52px",
  fontWeight: 900,
};

const subtext = {
  fontWeight: 800,
  lineHeight: 1.5,
};

const actions = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px",
  marginTop: "18px",
};

const primaryButton = {
  border: "none",
  background: "#000",
  color: "#fff",
  padding: "14px",
  borderRadius: "16px",
  fontWeight: 900,
};

const secondaryButton = {
  border: "2px solid #000",
  background: "transparent",
  color: "#000",
  padding: "14px",
  borderRadius: "16px",
  fontWeight: 900,
};

const card = {
  margin: "18px",
  padding: "18px",
  background: "#111",
  borderRadius: "24px",
};

const sectionTitle = {
  margin: "0 0 14px",
  fontSize: "22px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px",
};

const actionCard = {
  background: "#fff",
  color: "#000",
  textDecoration: "none",
  padding: "16px",
  borderRadius: "16px",
  fontWeight: 900,
  textAlign: "center" as const,
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 0",
  borderTop: "1px solid #222",
};

const rowText = {
  margin: "4px 0 0",
  color: "#aaa",
  fontSize: "14px",
};

const green = {
  color: "#22c55e",
  fontSize: "20px",
};

const red = {
  color: "#ef4444",
  fontSize: "20px",
};
