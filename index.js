const mongoose = require("mongoose");

console.log("Attempting MongoDB connection...");
mongoose
  .connect(process.env.MY_SECRET, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
    process.exit(0); // Exit successfully
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit with error
  });
