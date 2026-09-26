const db = require("../data/database");

function getClasses(req, res) {
  const rows = db.prepare("SELECT age, title, text FROM classes").all();
  res.json({ success: true, data: rows });
}

module.exports = { getClasses };
