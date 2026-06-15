export default function FeedPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        padding: "32px",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "900",
          marginBottom: "12px",
        }}
      >
        Amosclaud Feed
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#ddd",
          marginBottom: "24px",
        }}
      >
        See posts, updates, creators, and community activity.
      </p>

      <a
        href="/create-post"
        style={{
          display: "inline-block",
          padding: "14px 22px",
          background: "#ffd400",
          color: "#000",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: "900",
          marginBottom: "30px",
        }}
      >
        + Create Post
      </a>

      <div
        style={{
          border: "2px solid #333",
          borderRadius: "20px",
          padding: "24px",
          marginTop: "20px",
        }}
      >
        <h2>Welcome to the Feed</h2>

        <p>No posts loaded yet.</p>

        <p>
          Create your first post using the button above.
        </p>
      </div>
    </main>
  );
}
