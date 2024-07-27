const express = require("express");
const Benificiary = require("../models/benificiary");

const router = express.Router();

// Create a new benificary
router.put("/", async (req, res) => {
  try {
    const newBenificiary = new Benificiary(req.body);
    const savedBenificiary = await newBenificiary.save();
    res.status(201).json(savedBenificiary);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to intiaize benificiary" });
  }
});

module.exports = router;
