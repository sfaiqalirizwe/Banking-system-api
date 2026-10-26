const express = require("express");
const router = express.Router();

const { createuserAccount } = require("../controllers/accountcontroller.js");
const accountMiddleware = require("../Middleware/accountmiddleware.js");

// Create account route
router.post("/", accountMiddleware.createAccount, createuserAccount);

module.exports = router;