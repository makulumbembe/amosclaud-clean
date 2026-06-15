export default function FeedPage() {
  return (
    <main style={page}>
      <header style={header}>
        <a href="/" style={nav}>← Home</a>
        <h1 style={logo}>AMOS<span style={pink}>FEED</span></h1>
      </header>

      <section style={card}>
        <h2>Amosclaud Feed</h2>
        <p>See posts, updates, creators, and community activity.</p>
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "#000",
  color: "#fff",
  padding: "2rem",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const nav = {
  color: "#ffd400",
  textDecoration: "none",
};

const logo = {
  fontSize: "28px",
};

const pink = {
  color: "#ff1493",
};

const card = {
  marginTop: "2rem",
  padding: "20px",
  border: "1px solid #333",
  borderRadius: "16px",
};
