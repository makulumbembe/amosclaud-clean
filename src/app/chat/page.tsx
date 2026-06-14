"use client";

import { useState } from "react";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { from: "Amosclaud Assistant", text: "Welcome to Amosclaud Chat 👋" },
    { from: "Creator Support", text: "How can we help today?" },
  ]);

  function sendMessage() {
    if (!message.trim()) return;

    setMessages([...messages, { from: "You", text: message }]);
    setMessage("");
  }

  return (
    <main style={page}>
      <header style={header}>
        <a href="/profile" style={back}>←</a>
        <h1 style={title}>Chat</h1>
        <a href="/call" style={call}>☎</a>
      </header>

      <section style={chatBox}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={msg.from === "You" ? myBubble : otherBubble}
          >
            <strong>{msg.from}</strong>
            <p>{msg.text}</p>
          </div>
        ))}
      </section>

      <section style={inputBar}>
        <input
          style={input}
          value={message}
          placeholder="Type a message..."
          onChange={(e) => setMessage(e.target.value)}
        />

        <button style={sendButton} onClick={sendMessage}>
          Send
        </button>
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "#000",
  color: "#fff",
  fontFamily: "Arial, sans-serif",
  paddingBottom: "90px",
};

const header = {
  height: "64px",
  background: "#ffd400",
  color: "#000",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 18px",
  borderBottom: "5px solid #ff0080",
};

const back = { color: "#000", textDecoration: "none", fontSize: "30px", fontWeight: 900 };
const title = { margin: 0, fontSize: "24px", fontWeight: 900 };
const call = { color: "#000", textDecoration: "none", fontSize: "28px", fontWeight: 900 };

const chatBox = {
  padding: "18px",
};

const otherBubble = {
  background: "#111",
  border: "1px solid #222",
  padding: "14px",
  borderRadius: "18px",
  marginBottom: "12px",
  maxWidth: "85%",
};

const myBubble = {
  background: "#ffd400",
  color: "#000",
  padding: "14px",
  borderRadius: "18px",
  marginBottom: "12px",
  marginLeft: "auto",
  maxWidth: "85%",
};

const inputBar = {
  position: "fixed" as const,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  gap: "8px",
  background: "#111",
  padding: "12px",
  borderTop: "1px solid #222",
};

const input = {
  flex: 1,
  padding: "14px",
  borderRadius: "14px",
  border: "none",
};

const sendButton = {
  padding: "14px 18px",
  borderRadius: "14px",
  border: "none",
  background: "#ffd400",
  color: "#000",
  fontWeight: 900,
};
