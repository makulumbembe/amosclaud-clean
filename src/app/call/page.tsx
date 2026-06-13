export default function CallsPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#000", color: "#fff", padding: 24 }}>
      <h1>Calls</h1>
      <p>Audio and video calls for Amosclaud users.</p>

      <section style={{ background: "#111", padding: 20, borderRadius: 20, marginTop: 20 }}>
        <h2>📞 Start Call</h2>
        <button style={{ padding: 16, borderRadius: 14, fontWeight: 900 }}>
          Start Audio Call
        </button>
        <button style={{ padding: 16, borderRadius: 14, fontWeight: 900, marginLeft: 10 }}>
          Start Video Call
        </button>
      </section>
    </main>
  );
}
