export default function CallsPage() {
  return (
    <main style={page}>
      <header style={header}>
        <a href="/profile" style={back}>←</a>
        <h1 style={title}>Calls</h1>
        <a href="/chat" style={chat}>💬</a>
      </header>

      <section style={card}>
        <h2>Start a Call</h2>
        <p style={text}>Audio and video calls for Amosclaud users.</p>

        <a href="/chat" style={button}>
          ☎ Start Audio Call
        </a>

        <a href="/chat" style={buttonDark}>
          🎥 Start Video Call
        </a>
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "#000",
  color: "#fff",
  fontFamily: "Arial, sans-serif",
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

const back = { color: "#000", textDecoration: "none", fontSize: "30px", fontWeight: 900 };
const title = { margin: 0, fontSize: "24px", fontWeight: 900 };
const chat = { color: "#000", textDecoration: "none", fontSize: "24px" };

const card = {
  margin: "18px",
  padding: "22px",
  background: "#111",
  borderRadius: "24px",
};

const text = {
  color: "#aaa",
};

const button = {
  display: "block",
  background: "#ffd400",
  color: "#000",
  padding: "16px",
  borderRadius: "16px",
  textDecoration: "none",
  fontWeight: 900,
  textAlign: "center" as const,
  marginTop: "18px",
};

const buttonDark = {
  display: "block",
  background: "#000",
  color: "#ffd400",
  border: "2px solid #ffd400",
  padding: "16px",
  borderRadius: "16px",
  textDecoration: "none",
  fontWeight: 900,
  textAlign: "center" as const,
  marginTop: "12px",
};
