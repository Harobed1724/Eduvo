const express = require("express")
const router = express.Router()
const requireAuth = require("../middleware/requireAuth")
const { getMessages, postMessage } = require("../controllers/chatController")

router.get("/chat", requireAuth, getMessages)
router.post("/chat", requireAuth, postMessage)

module.exports = router
