const db = require("../data/database")

function getAbout(req, res) {
  const pillars = db.prepare("SELECT icon, title, text FROM pillars").all()
  const testimonials = db.prepare("SELECT name, quote FROM testimonials").all()
  res.json({ success: true, data: { pillars, testimonials } })
}

module.exports = { getAbout }
