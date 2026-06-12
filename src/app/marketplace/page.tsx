export default function MarketplacePage() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Amosclaud Marketplace</h1>

      <p>
        Buy, sell, and discover digital products, services,
        AI tools, and creator offerings.
      </p>

      <h2>Marketplace Categories</h2>

      <ul>
        <li>AI Services</li>
        <li>Web Development</li>
        <li>Mobile Apps</li>
        <li>Graphic Design</li>
        <li>Video Editing</li>
        <li>Music Production</li>
        <li>Marketing Services</li>
      </ul>

      <h2>Seller Tools</h2>

      <ul>
        <li>Create Listings</li>
        <li>Manage Orders</li>
        <li>Customer Messages</li>
        <li>Revenue Dashboard</li>
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
