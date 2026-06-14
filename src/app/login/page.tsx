"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  async function login() {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (data.success) {
      window.location.href = "/feed";
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        padding: "24px",
      }}
    >
      <h1>Amosclaud Login</h1>

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "12px",
          color: "#000",
        }}
      />

      <br />
      <br />

      <button
        onClick={login}
        style={{
          padding: "12px 24px",
          background: "#ffd400",
          color: "#000",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        LOGIN
      </button>
    </main>
  );
}
