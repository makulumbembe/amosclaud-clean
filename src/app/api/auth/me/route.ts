import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: "Logged out",
  });

  response.cookies.set("amosclaud_user", "", {
    path: "/",
    maxAge: 0,
  });

  return response;
}
