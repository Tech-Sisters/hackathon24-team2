import express from "express";

import connectDB from "./server/config/connection.js"; //

import cors from "cors";
import bodyParser from "body-parser";
import emotionRoutes from "./server/routes/emotionRoute.js";

import dotenv from "dotenv";
dotenv.config();

// Load environment variables

//initialize express app
const app = express();
const PORT = 3001;

//connect to mongodb
connectDB();

//Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON request bodies
app.use("/api/emotions", emotionRoutes);

//start server

const init = async () => {
  try {
    /*Connect to MongoDB
    const MONGO_URI = "mongodb://127.0.0.1:27017/chatbotDB"; // Replace with your MongoDB URI
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");*/

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to start server | ${error.message}`);
  }
};

// Define Routes

/* POST route to receive emotion data
app.post("/send-emotion", async (req, res) => {
  const { emotion, reason } = req.body;

  try {
    // Create a new Emotion document and save it to the database
    const newEmotion = new Emotion({ emotion, reason });
    await newEmotion.save();

    res.status(200).json({ message: "Emotion data saved successfully" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Failed to save emotion data", error: err.message });
  }
});

// GET route to fetch all emotions
app.get("/emotions", async (req, res) => {
  try {
    const emotions = await Emotion.find(); // Fetch all emotions from the database
    res.status(200).json(emotions);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Failed to fetch emotions", error: err.message });
  }
});*/

//Initialize the app
init();
