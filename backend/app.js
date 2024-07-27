const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Routes
const userRoutes = require("./routes/user");
app.use("/api/users", userRoutes);

const benificiaryRoutes = require("./routes/benificiary");
app.use("/api/benificiary", benificiaryRoutes);

const policyRoutes = require("./routes/policy");
app.use("/api/policy", policyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
