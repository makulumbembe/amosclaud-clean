import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt, language } = await req.json();

    return NextResponse.json({
      success: true,
      language,
      code: `// Generated ${language} code
console.log("Hello from Amosclaud AI");
`,
      prompt,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to generate code" },
      { status: 500 }
    );
  }
}
