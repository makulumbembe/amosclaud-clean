const response = await client.responses.create({
  model: "gpt-4.1-mini",
  input: `...`,
  max_output_tokens: 900,
});
