import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = body.prompt || "Hello";

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are Amosclaud AI, an advanced business, marketing, coding, and entrepreneurship assistant.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 1000,
    });

    return Response.json({
      success: true,
      answer: response.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: "AI request failed",
      },
      { status: 500 }
    );
  }
}
