export default function AIAssistantPage() {
  const plans = [
    {
      name: "Starter AI",
      price: "$9.99",
      desc: "Basic AI help for simple questions and guidance.",
      features: ["AI chat assistance", "Basic answers", "Limited daily use"],
    },
    {
      name: "Pro AI",
      price: "$19.99",
      desc: "More powerful AI help for creators, businesses, and admins.",
      features: ["Unlimited AI chat", "Content help", "Business support", "Priority access"],
    },
    {
      name: "Enterprise AI",
      price: "$49.99",
      desc: "Advanced AI assistant for teams and platform tools.",
      features: ["Team AI tools", "Admin support", "Automation help", "Premium priority"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#faf9f4] text-black p-6">
      <section className="max-w-5xl mx-auto">
        <div className="border-4 border-black rounded-2xl bg-white p-8 shadow-[10px_10px_0px_#000]">
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            Amosclaud AI Assistant
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            Get smart AI help inside Amosclaud. Choose a plan to unlock AI assistance.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="border-4 border-black rounded-xl p-6 bg-white shadow-[6px_6px_0px_#000]"
              >
                <h2 className="text-2xl font-black mb-2">{plan.name}</h2>

                <p className="text-4xl font-black mb-2">{plan.price}</p>
                <p className="text-sm text-gray-600 mb-5">per month</p>

                <p className="mb-5 text-gray-700">{plan.desc}</p>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="font-bold">
                      ✅ {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full border-4 border-black rounded-xl bg-pink-300 py-3 font-black shadow-[5px_5px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none">
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
