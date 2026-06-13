const response = await client.responses.create({
  model: "gpt-4.1-mini",
  input: `
You are an expert software engineer.

Rules:
- Generate code in the language requested.
- If language is TypeScript, return TypeScript.
- If language is JavaScript, return JavaScript.
- If language is React or Next.js, return valid React/Next.js code.
- Return ONLY code.
- Do not explain.
- Do not use markdown code fences.
- Make the code production ready.

Language:
${language}

Request:
${prompt}
`,
});
