const mongoose = require("mongoose");

console.log("Attempting MongoDB connection...");

mongoose
  .connect(process.env.MY_SECRET, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Adjust the timeout as needed
  })
  .then(() => console.log("MongoDB Connected from environment secret"))
  .catch((err) => console.error("MongoDB connection error:", err));
