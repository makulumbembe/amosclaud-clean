import OpenAI from "openai";
import { NextResponse } from "next/server";

const jobs: Record<string, string> = {
  business:
    "Create a business plan with offer, target customers, pricing, marketing steps, and 7-day action plan.",
  ads:
    "Create 5 high-converting ads with hooks, captions, hashtags, and call-to-action.",
  proposal:
    "Write a professional client proposal with problem, solution, timeline, price, and closing message.",
  content:
    "Create 10 social media post ideas with captions for TikTok, Instagram, and Facebook.",
  code:
    "Generate clean production-ready code. Return only code unless explanation is requested.",
  money:
    "Create a money-making plan with services to sell, prices, target customers, and daily tasks.",
};

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: "Missing OPENAI_API_KEY" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const job = body.job || "business";
    const input = body.input || "";

    const client = new OpenAI({ apiKey });

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      max_output_tokens: 900,
      input: `
You are Amosclaud AI.

Your job:
${jobs[job] || jobs.business}

User request:
${input}

Rules:
- Be practical.
- Be clear.
- Give steps the user can do today.
- Focus on business, money, growth, coding, and automation.
`,
    });

    return NextResponse.json({
      success: true,
      result: response.output_text,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "AI job failed" },
      { status: 500 }
    );
  }
}
