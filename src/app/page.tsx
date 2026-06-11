export default function Home() {
  const routines = [
    "Create",
    "Chat",
    "Post",
    "Share",
    "Like",
    "Comment",
    "Earn Rewards",
    "Build Community",
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="px-6 py-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Amosclaud</h1>
        <p className="text-lg text-gray-300">
          Social entertainment platform for creators, developers, and communities.
        </p>
      </section>

      <section className="relative h-[420px] flex items-center justify-center">
        <div className="moon">
          <span>🌙</span>
        </div>

        <div className="dance-floor">
          {routines.map((item, index) => (
            <div
              key={item}
              className="code-jar"
              style={{ animationDelay: `${index * 0.25}s` }}
            >
              <div className="jar-top"></div>
              <code>{item}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-6 pb-16 max-w-6xl mx-auto">
        <div className="card">
          <h2>Create</h2>
          <p>Users can upload photos, videos, posts, and creative content.</p>
        </div>

        <div className="card">
          <h2>Connect</h2>
          <p>Chat, follow, comment, like, and build social communities.</p>
        </div>

        <div className="card">
          <h2>Grow</h2>
          <p>Reward engagement and support creators through platform features.</p>
        </div>
      </section>
    </main>
  );
}
