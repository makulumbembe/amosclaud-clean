"use client";

import { useState } from "react";

export default function ProgramPage() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("System ready. Protected mode is ON.");

  function runSecurityCheck() {
    const blockedWords = [
      "script",
      "<",
      ">",
      "DROP",
      "DELETE",
      "INSERT",
      "UPDATE",
      "SELECT",
      "--",
      "http://",
      "unknown",
      "malware",
      "hack",
      "token",
      "password",
    ];

    const found = blockedWords.find((word) =>
      input.toLowerCase().includes(word.toLowerCase())
    );

    if (!input.trim()) {
      setStatus("Blocked: empty command is not allowed.");
      return;
    }

    if (found) {
      setStatus(`Blocked: unsafe data detected → ${found}`);
      return;
    }

    setStatus("Approved: command looks safe for Amosclaud frontend hub.");
  }

  const tools = [
    "Route Builder",
    "AI Code Generator",
    "Security Scanner",
    "Database Gatekeeper",
    "Deployment Fix",
    "API Shield",
    "Admin Control",
    "Unknown Data Blocker",
  ];

  return (
    <main style={page}>
      <header style={header}>
        <a href="/" style={back}>← Home</a>
        <h1 style={logo}>AMOS<span style={pink}>CLAUD</span></h1>
        <a href="/settings" style={back}>Settings</a>
      </header>

      <section style={hero}>
        <div style={badge}>PROGRAM SECURITY HUB</div>
        <h2 style={title}>Amosclaud Programming Center</h2>
        <p style={text}>
          Build, check, protect, and control Amosclaud routes, AI tools,
          commands, and database entry rules from one secure hub.
        </p>
      </section>

      <section style={panel}>
        <h3 style={sectionTitle}>Command Security Check</h3>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a command or data request here..."
          style={box}
        />

        <button onClick={runSecurityCheck} style={button}>
          Scan Command
        </button>

        <div style={statusBox}>{status}</div>
      </section>

      <section style={grid}>
        {tools.map((tool) => (
          <div key={tool} style={card}>
            <h3>{tool}</h3>
            <p style={smallText}>Protected and ready to connect.</p>
          </div>
        ))}
      </section>

      <section style={warning}>
        <h3>Security Note</h3>
        <p>
          This page protects the frontend. Real database security must also be
          added in backend API routes before saving anything to the database.
        </p>
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #000, #14001d, #000)",
  color: "#fff",
  fontFamily: "Arial, sans-serif",
  paddingBottom: 40,
};

const header = {
  background: "#ffd400",
  color: "#000",
  padding: 20,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "8px solid #ff008c",
};

const logo = {
  margin: 0,
  fontSize: 30,
  fontWeight: 900,
};

const pink = {
  color: "#ff008c",
};

const back = {
  color: "#000",
  textDecoration: "none",
  fontWeight: 900,
};

const hero = {
  margin: 24,
  padding: 28,
  border: "4px solid #ffd400",
  borderRadius: 30,
  background: "radial-gradient(circle at top left, #32104a, #111)",
  boxShadow: "0 0 35px rgba(255,212,0,0.25)",
};

const badge = {
  display: "inline-block",
  background: "#ff008c",
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
  border: "3px solid #ffd400",
  borderRadius: 28,
};

const sectionTitle = {
  marginTop: 0,
  fontSize: 28,
};

const box = {
  width: "100%",
  height: 170,
  padding: 16,
  borderRadius: 16,
  fontSize: 18,
  border: "3px solid #ff008c",
  boxSizing: "border-box" as const,
};

const button = {
  marginTop: 18,
  width: "100%",
  padding: 18,
  borderRadius: 18,
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
  color: "#ffd400",
  fontWeight: 900,
};

const grid = {
  margin: 24,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 16,
};

const card = {
  background: "#111",
  border: "2px solid #333",
  borderRadius: 24,
  padding: 22,
};

const smallText = {
  color: "#aaa",
};

const warning = {
  margin: 24,
  padding: 22,
  borderRadius: 24,
  background: "#260014",
  border: "2px solid #ff008c",
};
