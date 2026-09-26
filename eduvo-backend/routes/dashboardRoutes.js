const express = require("express")
const router = express.Router()
const requireAuth = require("../middleware/requireAuth")
const { getDashboard } = require("../controllers/dashboardController")

router.get("/dashboard", requireAuth, getDashboard)

module.exports = router
