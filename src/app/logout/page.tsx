"use client";

export default function LogoutPage() {
  async function logout() {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    window.location.href = "/";
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
      <h1>Logout</h1>

      <button
        onClick={logout}
        style={{
          padding: "12px 24px",
          background: "#ff006e",
          color: "#fff",
          border: "none",
          fontWeight: "bold",
        }}
      >
        LOGOUT
      </button>
    </main>
  );
}
