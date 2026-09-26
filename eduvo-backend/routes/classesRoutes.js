const express = require("express")
const router = express.Router()
const { getClasses } = require("../controllers/classesController")

router.get("/classes", getClasses)

module.exports = router
