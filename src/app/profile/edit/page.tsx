"use client";

import { useState } from "react";

export default function EditProfilePage() {
  const [name, setName] = useState("Amosclaud");
  const [username, setUsername] = useState("@amosclaud");
  const [bio, setBio] = useState("Creator • AI • Business • Community");
  const [saved, setSaved] = useState(false);

  function saveProfile() {
    localStorage.setItem(
      "amosclaud-profile",
      JSON.stringify({ name, username, bio })
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  }

  return (
    <main style={page}>
      <header style={header}>
        <a href="/profile" style={back}>←</a>
        <h1 style={title}>Edit Profile</h1>
        <a href="/settings" style={settings}>⚙</a>
      </header>

      <section style={card}>
        <div style={avatar}>A</div>

        <label style={label}>Display Name</label>
        <input style={input} value={name} onChange={(e) => setName(e.target.value)} />

        <label style={label}>Username</label>
        <input style={input} value={username} onChange={(e) => setUsername(e.target.value)} />

        <label style={label}>Bio</label>
        <textarea style={textarea} value={bio} onChange={(e) => setBio(e.target.value)} />

        <button style={saveButton} onClick={saveProfile}>
          Save Profile
        </button>

        {saved && <p style={savedText}>Profile saved successfully ✅</p>}
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "#000",
  color: "#fff",
  fontFamily: "Arial, sans-serif",
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

const back = {
  color: "#000",
  textDecoration: "none",
  fontSize: "30px",
  fontWeight: 900,
};

const title = {
  margin: 0,
  fontSize: "22px",
  fontWeight: 900,
};

const settings = {
  color: "#000",
  textDecoration: "none",
  fontSize: "22px",
};

const card = {
  margin: "18px",
  padding: "22px",
  background: "#111",
  borderRadius: "24px",
};

const avatar = {
  width: "92px",
  height: "92px",
  margin: "0 auto 24px",
  borderRadius: "50%",
  background: "linear-gradient(135deg,#ffd400,#ff0080)",
  display: "grid",
  placeItems: "center",
  color: "#fff",
  fontSize: "42px",
  fontWeight: 900,
};

const label = {
  display: "block",
  marginTop: "16px",
  marginBottom: "8px",
  color: "#ccc",
  fontWeight: 900,
};

const input = {
  width: "100%",
  padding: "14px",
  borderRadius: "14px",
  border: "1px solid #333",
  background: "#000",
  color: "#fff",
  fontSize: "16px",
};

const textarea = {
  width: "100%",
  minHeight: "120px",
  padding: "14px",
  borderRadius: "14px",
  border: "1px solid #333",
  background: "#000",
  color: "#fff",
  fontSize: "16px",
};

const saveButton = {
  width: "100%",
  marginTop: "22px",
  padding: "16px",
  border: "none",
  borderRadius: "18px",
  background: "#ffd400",
  color: "#000",
  fontSize: "17px",
  fontWeight: 900,
};

const savedText = {
  marginTop: "16px",
  color: "#22c55e",
  fontWeight: 900,
  textAlign: "center" as const,
};
