export default function AIChatAssistantPage() {
  return (
    <main style={page}>
      <h1>AI Chat Assistant</h1>
      <p>Chat with Amosclaud AI assistant.</p>

      <textarea
        placeholder="Ask Amosclaud AI anything..."
        style={box}
      />

      <button style={button}>Send Message</button>

      <p style={{ marginTop: 30, color: "#777" }}>
        AI chat backend coming soon.
      </p>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "#000",
  color: "#fff",
  padding: 30,
  fontFamily: "Arial",
};

const box = {
  width: "100%",
  height: 180,
  fontSize: 18,
  padding: 15,
  marginTop: 20,
};

const button = {
  marginTop: 20,
  padding: "15px 25px",
  fontSize: 18,
  fontWeight: "bold",
  background: "#ffd400",
  border: "none",
  borderRadius: 10,
};
