require("dotenv").config();

async function main() {
  const key = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  console.log("có key:", !!key, "| độ dài:", key?.length);

  const res = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/interactions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": key,
      },
      body: JSON.stringify({
        model: "gemini-3.1-flash-image",
        input: "Create a picture of a nano banana dish in a fancy restaurant",
      }),
    },
  );

  console.log("Status:", res.status);
  console.log((await res.text()).slice(0, 1500));
}

main().catch((e) => console.error("Lỗi mạng:", e));
