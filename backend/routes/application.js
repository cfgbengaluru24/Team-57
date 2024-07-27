const express = require("express");
const router = express.Router();
const Policy = require("../models/policy");
const Benificiary = require("../models/benificiary");
const Application = require("../models/application");

// Create a new application
router.put("/", async (req, res) => {
  try {
    const { benificiaryId, policyId } = req.body;

    // Check if beneficiary and policy exist
    const benificiary = await Benificiary.findById(benificiaryId);
    const policy = await Policy.findById(policyId);

    if (!benificiary || !policy) {
      return res.status(404).json({ error: "Beneficiary or Policy not found" });
    }

    // Create and save the new application
    const newApplication = new Application({
      benificiary: benificiaryId,
      policy: policyId,
    });

    const savedApplication = await newApplication.save();
    res.status(201).json(savedApplication);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create application" });
  }
});

// Update the status of an application
router.post("/update-status/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Validate the status
    const validStatuses = ["Pending", "Approved", "Rejected"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    // Find the application and update its status
    const updatedApplication = await Application.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedApplication) {
      return res.status(404).json({ error: "Application not found" });
    }

    res.json(updatedApplication);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update application status" });
  }
});

module.exports = router;
