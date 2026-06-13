export async function POST(req: Request) {
  const body = await req.json();

  return Response.json({
    success: true,
    message: "AI Code API Working",
    data: body,
  });
}
