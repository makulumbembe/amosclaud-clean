export default function LogoutPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        padding: "2rem",
      }}
    >
      <h1>Logout</h1>

      <p>You have been signed out of Amosclaud.</p>

      <a
        href="/login"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "12px 20px",
          background: "#ffd400",
          color: "#000",
          textDecoration: "none",
          borderRadius: "10px",
          fontWeight: "bold",
        }}
      >
        Login Again
      </a>
    </main>
  );
}
