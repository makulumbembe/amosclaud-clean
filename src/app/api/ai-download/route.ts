import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { code, filename } = await req.json();

    return NextResponse.json({
      success: true,
      filename: filename || "generated-code.txt",
      content: code || "",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Download failed",
      },
      { status: 500 }
    );
  }
}
