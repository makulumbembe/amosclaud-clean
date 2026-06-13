
import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt, language } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content:
            "You are Amosclaud AI Code Generator. Return only clean working code. No markdown.",
        },
        {
          role: "user",
          content: `Create ${language || "TypeScript"} code for: ${prompt}`,
        },
      ],
      temperature: 0.2,
    });

    return NextResponse.json({
      success: true,
      code: response.choices[0]?.message?.content || "",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "AI code generation failed" },
      { status: 500 }
    );
  }
}