import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: "Missing OPENAI_API_KEY" },
        { status: 500 }
      );
    }

    const { code, error, language } = await req.json();

    if (!code) {
      return NextResponse.json(
        { success: false, error: "Code is required" },
        { status: 400 }
      );
    }

    const client = new OpenAI({ apiKey });

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: `Fix this ${language || "code"}.

Return only the corrected code. No markdown. No explanation.

Error:
${error || "No error provided"}

Code:
${code}`,
    });

    return NextResponse.json({
      success: true,
      fixedCode: response.output_text || "",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "AI fix failed" },
      { status: 500 }
    );
  }
}
