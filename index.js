const mongoose = require("mongoose");

mongoose
  .connect(process.env.MY_SECRET, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected from environment secret"))
  .catch((err) => console.error("MongoDB connection error:", err));
