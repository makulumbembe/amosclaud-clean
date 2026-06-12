export default function VisitorsPage() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Amosclaud Visitors Center</h1>

      <p>
        Welcome visitors. Explore the platform before creating
        an account.
      </p>

      <h2>Available Features</h2>

      <ul>
        <li>Browse Public Content</li>
        <li>Discover Creators</li>
        <li>Explore Marketplace</li>
        <li>View AI Projects</li>
        <li>Create Account</li>
      </ul>

      <h2>Visitor Actions</h2>

      <ul>
        <li>Sign Up</li>
        <li>Log In</li>
        <li>Learn More</li>
      </ul>

      <nav>
        <a href="/">Home</a> |{" "}
        <a href="/feed">Feed</a> |{" "}
        <a href="/explore">Explore</a> |{" "}
        <a href="/creator">Creator Hub</a>
      </nav>
    </main>
  );
}
