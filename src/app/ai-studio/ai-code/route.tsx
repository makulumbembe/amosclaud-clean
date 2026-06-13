import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt, language } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { success: false, error: "Missing OPENAI_API_KEY" },
        { status: 500 }
      );
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    if (!prompt) {
      return NextResponse.json(
        { success: false, error: "Prompt is required" },
        { status: 400 }
      );
    }

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content:
            "You are Amosclaud AI Code Generator. Return only clean working code. No markdown. No explanations.",
        },
        {
          role: "user",
          content: `Create ${language || "JavaScript"} code for: ${prompt}`,
        },
      ],
    });

    return NextResponse.json({
      success: true,
      code: response.output_text || "",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, error: "AI generation failed" },
      { status: 500 }
    );
  }
}
