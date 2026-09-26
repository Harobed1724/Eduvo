const db = require("../data/database")

function getMessages(req, res) {
  const rows = db
    .prepare("SELECT sender, sender_name AS name, text FROM chat_messages WHERE ward_name = ? ORDER BY id ASC")
    .all(req.wardName)
  res.json({ success: true, messages: rows })
}

function postMessage(req, res) {
  const { sender, senderName, text } = req.body

  db.prepare("INSERT INTO chat_messages (ward_name, sender, sender_name, text) VALUES (?, ?, ?, ?)")
    .run(req.wardName, sender, senderName, text)

  const rows = db
    .prepare("SELECT sender, sender_name AS name, text FROM chat_messages WHERE ward_name = ? ORDER BY id ASC")
    .all(req.wardName)
  res.json({ success: true, messages: rows })
}

module.exports = { getMessages, postMessage }
