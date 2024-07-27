const express = require("express");
const Policy = require("../models/policy");
const Benificiary = require("../models/benificiary");

const router = express.Router();

// Create a new policy
router.put("/", async (req, res) => {
  try {
    const newPolicy = new Policy(req.body);
    const savedPolicy = await newPolicy.save();
    res.status(201).json(savedPolicy);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to create policy" });
  }
});

// Search a policy by id
router.get("/", async (req, res) => {
  try {
    const { policyId } = req.body;
    const policy = await Policy.findById(policyId);
    res.json(policy);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to get policy" });
  }
});

// Get all policy
router.get("/all", async (req, res) => {
  try {
    const policies= await Policy.find({});
    console.log(policies);
    res.status(201).json(policies);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to get policy" });
  }
});

// Get list of benificiary eligible for a policy
router.get("/eligible", async (req, res) => {
  try {
    const { policyId } = req.body;
    const policy = await Policy.findById(policyId);

    if (!policy.enabled) {
      const eligibleBenificiaries = [];
      return res.json(eligibleBenificiaries);
    }

    let query = {
      income: { $lte: policy.income },
    };

    if (policy.marital_status) query.marital_status = true;
    if (policy.disability) query.disability = true;
    if (policy.aadhar_status) query.aadhar_status = true;
    if (policy.pan_status) query.pan_status = true;
    if (policy.voterid_status) query.voterid_status = true;
    if (policy.rentagreement_status) query.rentagreement_status = true;

    const eligibleBenificiaries = await Benificiary.find(query);
    res.json(eligibleBenificiaries);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to get eligible benificiary" });
  }
});

// Update details of existing policy
router.post("/update", async (req, res) => {
  try {
    const { policyId, ...update } = req.body;
    const policy = await Policy.findByIdAndUpdate(policyId, update, {
      new: true,
    });
    res.json(policy);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to update policy" });
  }
});

// Filter policies based on query
router.get('/filter', async (req, res) => {
  try {
    const query = req.body;
    query.enabled = true;
    const policies = await Policy.find(query);
    res.json(policies);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to filter policies" });
  }
});

module.exports = router;
