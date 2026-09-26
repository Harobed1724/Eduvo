const express = require("express")
const router = express.Router()
const { getTeachers } = require("../controllers/teachersController")

router.get("/teachers", getTeachers)

module.exports = router
