export default function CallsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        padding: "24px",
      }}
    >
      <h1>📞 Calls</h1>

      <p>Audio and video calls for Amosclaud users.</p>

      <section
        style={{
          background: "#111",
          padding: "20px",
          borderRadius: "16px",
          marginTop: "20px",
        }}
      >
        <h2>📞 Start Call</h2>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <a href="/call/audio">
            <button
              style={{
                padding: "16px",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              Start Audio Call
            </button>
          </a>

          <a href="/call/video">
            <button
              style={{
                padding: "16px",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              Start Video Call
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}



