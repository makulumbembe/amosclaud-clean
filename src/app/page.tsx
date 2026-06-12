export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial", background: "#050816", color: "white", minHeight: "100vh" }}>
      <h1>Amosclaud</h1>
      <p>Social entertainment, creator tools, services, and admin platform.</p>

      <div style={{ marginTop: "30px" }}>
        <a href="/feed" style={{ color: "white", marginRight: "20px" }}>Feed</a>
        <a href="/services" style={{ color: "white", marginRight: "20px" }}>Services</a>
        <a href="/packages" style={{ color: "white", marginRight: "20px" }}>Packages</a>
        <a href="/admin" style={{ color: "white" }}>Admin Hub</a>
      </div>

      <section style={{ marginTop: "50px" }}>
        <h2>Public Hub</h2>
        <p>For users to post, connect, chat, create, and enjoy entertainment.</p>

        <h2>Admin Hub</h2>
        <p>For private platform control, moderation, users, reports, and settings.</p>
      </section>
    </main>
  );
}
