const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: 'http://localhost:3000', // Change this to your frontend URL if different
}));

app.use(express.json());

// Initialize GoogleGenerativeAI with the API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY);

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, "build")));

// Define the /gemini endpoint
// Define the /gemini endpoint
app.post('/gemini', async (req, res) => {
  try {
    // Log the incoming request body to check the received data
    console.log("Received request body:", req.body);
    
    const { history, message } = req.body;
    
    // Log history and message separately to inspect them
    console.log("History:", history);
    console.log("Message:", message);
    


// Then use this variable when initializing the model
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
  systemInstruction: "Make an audioguide script based on the prompt given."
  
});
    const temperature = 1.5;



     const chat = model.startChat({
      history,
      temperature,
    });
    const result = await chat.sendMessage(message);
    
    // Log the result before extracting text to confirm the response structure
    console.log("Result:", result);
    
    const text = await result.response.text();

    // Log the final response text
    console.log("Generated response text:", text);
    
    res.json({ success: true, message: text });
  } catch (error) {
    console.error("Error generating response:", error);
    res.status(500).json({ success: false, message: "Error generating response" });
  }
});

// Catch-all route to serve the React app's index.html for any unmatched paths
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
