const db = require("../data/database")

function getDashboard(req, res) {
  const ward = db.prepare("SELECT * FROM wards WHERE name = ?").get(req.wardName) // from the verified token, not the URL

  if (!ward) {
    return res.status(404).json({ success: false, message: "Ward not found." })
  }

  res.json({
    success: true,
    ward: { name: ward.name, class: ward.class },
    data: {
      assignments: JSON.parse(ward.assignments),
      grades: JSON.parse(ward.grades),
      fees: JSON.parse(ward.fees),
      comments: JSON.parse(ward.comments),
    },
  })
}

module.exports = { getDashboard }
