const response = await client.responses.create({
  model: "gpt-4.1-mini",
  max_output_tokens: 900,
  input: `Create ${language || "JavaScript"} code for: ${prompt}. Return only code.`,
});
