import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { code, filename } = await req.json();

    if (!code) {
      return NextResponse.json(
        {
          success: false,
          error: "Code is required",
        },
        { status: 400 }
      );
    }

    return new NextResponse(code, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
        "Content-Disposition": `attachment; filename="${filename || "amosclaud-generated-code.tsx"}"`,
      },
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
