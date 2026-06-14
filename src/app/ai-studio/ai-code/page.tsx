export default function AiCodePage() {
  return (
    <main style={{ padding: "24px" }}>
      <h1>AI Code Studio</h1>

      <p>Generate code with Amosclaud AI.</p>

      <textarea
        placeholder="Describe what you want to build..."
        style={{
          width: "100%",
          minHeight: "200px",
          marginTop: "20px",
          padding: "12px",
        }}
      />

      <br />
      <br />

      <button
        style={{
          padding: "12px 24px",
          cursor: "pointer",
        }}
      >
        Generate Code
      </button>
    </main>
  );
}
