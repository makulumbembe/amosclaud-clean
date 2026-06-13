export default function FeedPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        padding: "20px",
      }}
    >
      <h1>AMOSCLAUD FEED</h1>

      <div
        style={{
          background: "#111",
          border: "3px solid #ffd400",
          borderRadius: "20px",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <h2>🤖 Amos AI</h2>

        <p>Your creative AI assistant</p>

        <ul>
          <li>Generate code</li>
          <li>Generate apps</li>
          <li>Generate images</li>
          <li>Generate websites</li>
        </ul>
      </div>
    </main>
  );
}
