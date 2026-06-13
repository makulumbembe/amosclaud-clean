"use client";

import { useState } from "react";

export default function AIStudioPage() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!data.success) {
        setAnswer(data.error || "AI failed.");
      } else {
        setAnswer(data.answer);
      }
    } catch {
      setAnswer("Connection failed.");
    }

    setLoading(false);
  }

  return (
    <main style={{ minHeight: "100vh", background: "#050816", color: "white", padding: 24 }}>
      <h1 style={{ fontSize: 42, fontWeight: 900 }}>Amosclaud AI Studio</h1>
      <p style={{ color: "#94a3b8" }}>
        Ask AI to create business ideas, posts, code, plans, ads, and proposals.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Example: Create a business plan for Amosclaud..."
        style={{
          width: "100%",
          minHeight: 160,
          marginTop: 24,
          padding: 16,
          borderRadius: 16,
          border: "1px solid #334155",
          background: "#111827",
          color: "white",
          fontSize: 16,
        }}
      />

      <button
        onClick={askAI}
        disabled={loading || !prompt.trim()}
        style={{
          marginTop: 16,
          width: "100%",
          padding: 16,
          borderRadius: 14,
          border: "none",
          background: "#facc15",
          color: "black",
          fontWeight: 900,
          fontSize: 18,
        }}
      >
        {loading ? "Thinking..." : "Generate with Real AI"}
      </button>

      {answer && (
        <section
          style={{
            marginTop: 24,
            padding: 20,
            borderRadius: 18,
            background: "#111827",
            border: "1px solid #334155",
            whiteSpace: "pre-wrap",
            lineHeight: 1.7,
          }}
        >
          {answer}
        </section>
      )}
    </main>
  );
}
