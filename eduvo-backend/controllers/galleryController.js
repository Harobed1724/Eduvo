const db = require("../data/database");

function getGallery(req, res) {
  const rows = db.prepare("SELECT emoji, caption FROM gallery").all();
  res.json({ success: true, data: rows });
}

module.exports = { getGallery };
