import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "5mb" }));

app.post("/summarize", async (req, res) => {
  try {
    const text = req.body.text;
    if (!text) {
      return res.status(400).json({ error: "No text received" });
    }

    const response = await fetch(
      "https://router.huggingface.co/hf-inference/models/facebook/bart-large-cnn",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          inputs: text.substring(0,1500)
        })
      }
    );

    const data = await response.json();
    console.log("HF RESPONSE:", data);
    if (data.error) {
      return res.json({ summary: "Model is loading. Please wait 30 seconds and try again." });
    }
    res.json({ summary: data[0].summary_text });

  } catch (error) {
    console.error(error);
    res.json({ summary: "Server error occurred." });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});