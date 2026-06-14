export default function AIAssistantPage() {
  const plans = [
    {
      name: "Free AI",
      price: "$0",
      desc: "Try AI assistance with limited daily messages.",
      features: [
        "20 messages per day",
        "Basic AI chat",
        "Upgrade anytime",
      ],
    },
    {
      name: "Pro AI",
      price: "$9.99",
      desc: "Unlimited AI help for creators and daily users.",
      features: [
        "Unlimited AI chat",
        "Content creation help",
        "Priority responses",
      ],
    },
    {
      name: "Business AI",
      price: "$19.99",
      desc: "AI tools for businesses, admins, and creators.",
      features: [
        "Admin Hub AI",
        "Analytics insights",
        "Growth recommendations",
      ],
    },
  ];

  return (
    <main style={{ padding: "40px" }}>
      <h1>Amosclaud AI Assistant</h1>

      {plans.map((plan) => (
        <div
          key={plan.name}
          style={{
            border: "2px solid black",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h2>{plan.name}</h2>
          <h3>{plan.price}</h3>
          <p>{plan.desc}</p>

          <ul>
            {plan.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <button>Choose Plan</button>
        </div>
      ))}
    </main>
  );
}
