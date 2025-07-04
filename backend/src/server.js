import express from "express";
import cors from "cors";
import dotenv from "dotenv";


import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "../config/db.js";
import rateLimiter from "../middleware/rateLimiter.js";


dotenv.config();


const app = express();
const PORT = process.env.PORT || 5001;



app.use(express.json()); // Middleware to parse JSON request bodies

app.use(cors({
  origin: "http://localhost:5173", // Allow requests from the frontend
  })
); 

app.use(rateLimiter); // Apply rate limiting middleware

// NOTE: the order of middleware is important.


app.use((req, res, next) => { // Middleware to log request details
  console.log('----------------------------------');
  console.log('Request Method:', req.method + ' | Request URL:', req.url);
  next();
});


app.use("/api/notes", notesRoutes); // linking the notes routes to the /api/notes endpoint
// For update: change routes and create a new route.js to handle different routing.
// Ex: app.use("/api/product", productsRoutes);

connectDB().then(() => { // Once the database is connected, start the server
  app.listen(PORT, () => {
    console.log("Server Started on PORT: ", PORT);
  });
});



// Starting frontend: 1:46:00
