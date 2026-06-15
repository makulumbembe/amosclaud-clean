"use client";

import { useState } from "react";

export default function CallPage() {
  const [mode, setMode] = useState("Voice Call");
  const [status, setStatus] = useState("Ready to connect");
  const [number, setNumber] = useState("");

  function startCall() {
    if (!number.trim()) {
      setStatus("Blocked: enter a username, phone, or Amos ID first.");
      return;
    }

    const unsafe = ["<", ">", "script", "http://", "DROP", "DELETE"];
    const found = unsafe.find((x) => number.toLowerCase().includes(x.toLowerCase()));

    if (found) {
      setStatus(`Blocked: unsafe call target detected → ${found}`);
      return;
    }

    setStatus(`${mode} request started for ${number}.`);
  }

  return (
    <main style={page}>
      <header style={header}>
        <a href="/" style={nav}>← Home</a>
        <h1 style={logo}>AMOS<span style={pink}>CALL</span></h1>
        <a href="/profile" style={nav}>Profile</a>
      </header>

      <section style={hero}>
        <div style={badge}>SECURE CALL SERVICE</div>
        <h2 style={title}>Amosclaud Call Hub</h2>
        <p style={text}>
          Start voice calls, video calls, business calls, creator support calls,
          and AI-assisted calls from one protected service.
        </p>
      </section>

      <section style={panel}>
        <h3 style={sectionTitle}>Start a Secure Call</h3>

        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter username, phone, or Amos ID"
          style={input}
        />

        <div style={modeGrid}>
          {["Voice Call", "Video Call", "AI Support Call", "Business Call"].map((item) => (
            <button
              key={item}
              onClick={() => setMode(item)}
              style={mode === item ? activeMode : modeButton}
            >
              {item}
            </button>
          ))}
        </div>

        <button onClick={startCall} style={callButton}>
          Start {mode}
        </button>

        <div style={statusBox}>{status}</div>
      </section>

      <section style={features}>
        {[
          "Encrypted call screen",
          "Spam protection",
          "Unknown caller blocker",
          "AI call assistant",
          "Business call notes",
          "Creator fan calls",
        ].map((feature) => (
          <div key={feature} style={featureCard}>
            <h3>{feature}</h3>
            <p style={small}>Ready to connect backend service.</p>
          </div>
        ))}
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #000, #001b18, #000)",
  color: "#fff",
  fontFamily: "Arial, sans-serif",
  paddingBottom: 40,
};

const header = {
  background: "#00ffd5",
  color: "#000",
  padding: 20,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "8px solid #ffd400",
};

const nav = {
  color: "#000",
  textDecoration: "none",
  fontWeight: 900,
};

const logo = {
  margin: 0,
  fontSize: 30,
  fontWeight: 900,
};

const pink = {
  color: "#ff008c",
};

const hero = {
  margin: 24,
  padding: 28,
  border: "4px solid #00ffd5",
  borderRadius: 30,
  background: "radial-gradient(circle at top left, #003d36, #111)",
  boxShadow: "0 0 35px rgba(0,255,213,0.25)",
};

const badge = {
  display: "inline-block",
  background: "#ffd400",
  color: "#000",
  padding: "9px 15px",
  borderRadius: 999,
  fontWeight: 900,
};

const title = {
  fontSize: 42,
  margin: "18px 0 10px",
};

const text = {
  fontSize: 21,
  color: "#ddd",
  lineHeight: 1.5,
};

const panel = {
  margin: 24,
  padding: 24,
  background: "#111",
  border: "3px solid #00ffd5",
  borderRadius: 28,
};

const sectionTitle = {
  marginTop: 0,
  fontSize: 28,
};

const input = {
  width: "100%",
  padding: 17,
  borderRadius: 17,
  fontSize: 18,
  border: "3px solid #00ffd5",
  boxSizing: "border-box" as const,
};

const modeGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: 12,
  marginTop: 18,
};

const modeButton = {
  padding: 16,
  borderRadius: 16,
  border: "2px solid #333",
  background: "#000",
  color: "#fff",
  fontWeight: 900,
};

const activeMode = {
  padding: 16,
  borderRadius: 16,
  border: "2px solid #ffd400",
  background: "#00ffd5",
  color: "#000",
  fontWeight: 900,
};

const callButton = {
  marginTop: 18,
  width: "100%",
  padding: 20,
  borderRadius: 20,
  border: "none",
  background: "#ffd400",
  color: "#000",
  fontSize: 22,
  fontWeight: 900,
};

const statusBox = {
  marginTop: 18,
  padding: 18,
  borderRadius: 18,
  background: "#000",
  border: "2px solid #333",
  color: "#00ffd5",
  fontWeight: 900,
};

const features = {
  margin: 24,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 16,
};

const featureCard = {
  background: "#111",
  border: "2px solid #333",
  borderRadius: 24,
  padding: 22,
};

const small = {
  color: "#aaa",
};
