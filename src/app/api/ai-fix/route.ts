const response = await client.responses.create({
  model: "gpt-4.1-mini",
  input: `
You are an expert software engineer.

Analyze the code and error message.

Rules:
- Fix the code completely.
- Return ONLY the corrected code.
- Preserve the original language.
- Do not explain the fix.
- Do not use markdown code fences.
- If multiple fixes are needed, apply all of them.

Language:
${language}

Error:
${error || "No error provided"}

Code:
${code}
`,
});
