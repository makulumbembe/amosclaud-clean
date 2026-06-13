export default function ChatPage() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Messages</h1>

      <div>🤖 Amos AI</div>
      <div>👤 Friends</div>
      <div>👥 Groups</div>

      <input
        placeholder="Type a message..."
        style={{
          width: "100%",
          padding: 12,
          marginTop: 20,
        }}
      />
    </main>
  );
}
