const db = require("../data/database");

function getTeachers(req, res) {
  const rows = db
    .prepare("SELECT initials, name, role, bio FROM teachers")
    .all();
  res.json({ success: true, data: rows });
}

module.exports = { getTeachers };
