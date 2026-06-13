import Link from "next/link";

export default function SearchPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Search</h1>
      <Link href="/search/programming">
        <div>
          <h3>PROGRAMMING</h3>
          <p>14,400 posts</p>
        </div>
      </Link>
    </main>
  );
}
