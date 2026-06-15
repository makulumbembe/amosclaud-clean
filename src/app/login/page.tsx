export default function LoginPage() {
  return (
    <main style={page}>
      <section style={card}>
        <div style={badge}>AMOSCLAUD ACCESS</div>

        <h1 style={title}>Welcome Back</h1>
        <p style={subtitle}>
          Login to your Amosclaud account and enter your AI platform.
        </p>

        <input style={input} placeholder="Email or username" />
        <input style={input} placeholder="Password" type="password" />

        <a href="/profile" style={button}>Login</a>

        <div style={links}>
          <a href="/forgot-password" style={link}>Forgot password?</a>
          <a href="/signup" style={link}>Create account</a>
        </div>

        <a href="/" style={home}>← Back to Home</a>
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top, #2b0035, #000 60%)",
  color: "#fff",
  fontFamily: "Arial, sans-serif",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 24,
};

const card = {
  width: "100%",
  maxWidth: 430,
  background: "#111",
  border: "4px solid #ffd400",
  borderRadius: 32,
  padding: 28,
  boxShadow: "0 0 40px rgba(255,212,0,0.25)",
};

const badge = {
  display: "inline-block",
  background: "#ffd400",
  color: "#000",
  padding: "9px 14px",
  borderRadius: 999,
  fontWeight: 900,
  fontSize: 13,
};

const title = {
  fontSize: 42,
  margin: "22px 0 8px",
  fontWeight: 900,
};

const subtitle = {
  color: "#ddd",
  fontSize: 18,
  lineHeight: 1.4,
};

const input = {
  width: "100%",
  marginTop: 16,
  padding: 16,
  borderRadius: 16,
  border: "2px solid #333",
  fontSize: 18,
  boxSizing: "border-box" as const,
};

const button = {
  marginTop: 22,
  width: "100%",
  height: 58,
  borderRadius: 18,
  background: "#ffd400",
  color: "#000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 21,
  fontWeight: 900,
  textDecoration: "none",
};

const links = {
  marginTop: 18,
  display: "flex",
  justifyContent: "space-between",
  gap: 12,
};

const link = {
  color: "#ff66bd",
  textDecoration: "none",
  fontWeight: 800,
};

const home = {
  marginTop: 28,
  color: "#ffd400",
  textDecoration: "none",
  display: "block",
  fontWeight: 900,
};
