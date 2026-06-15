export default function CreatePostPage() {
  return (
    <main style={page}>
      <a href="/feed" style={back}>← Back to Feed</a>

      <section style={card}>
        <h1 style={title}>Create Post</h1>
        <p style={text}>Share a picture, video, or update with Amosclaud.</p>

        <textarea
          placeholder="Write your caption..."
          style={textarea}
        />

        <input
          type="text"
          placeholder="Paste image or video URL"
          style={input}
        />

        <select style={input}>
          <option>image</option>
          <option>video</option>
        </select>

        <button style={button}>Publish Post</button>
      </section>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "#000",
  color: "#fff",
  padding: "2rem",
};

const back = {
  color: "#ffd400",
  textDecoration: "none",
  fontSize: "18px",
};

const card = {
  marginTop: "2rem",
  padding: "24px",
  border: "3px solid #ffd400",
  borderRadius: "24px",
  background: "#111",
};

const title = {
  fontSize: "42px",
  marginBottom: "12px",
};

const text = {
  color: "#ddd",
  fontSize: "18px",
};

const textarea = {
  width: "100%",
  minHeight: "140px",
  marginTop: "20px",
  padding: "16px",
  borderRadius: "14px",
  fontSize: "18px",
};

const input = {
  width: "100%",
  marginTop: "16px",
  padding: "16px",
  borderRadius: "14px",
  fontSize: "18px",
};

const button = {
  width: "100%",
  marginTop: "20px",
  padding: "18px",
  borderRadius: "16px",
  border: "0",
  background: "#ffd400",
  color: "#000",
  fontSize: "20px",
  fontWeight: "900",
};
