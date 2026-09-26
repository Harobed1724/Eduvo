const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const db = require("../data/database")

const JWT_SECRET = "replace-this-with-a-long-random-string" // same secret as middleware/requireAuth.js

function login(req, res) {
  const { wardName, pin } = req.body

  const ward = db.prepare("SELECT * FROM wards WHERE LOWER(name) = LOWER(?)").get(wardName.trim())

  if (!ward) {
    return res.status(401).json({ success: false, message: "That name and PIN don't match our records." })
  }

  const pinMatches = bcrypt.compareSync(pin, ward.pin)
  if (!pinMatches) {
    return res.status(401).json({ success: false, message: "That name and PIN don't match our records." })
  }

  const token = jwt.sign({ wardName: ward.name }, JWT_SECRET, { expiresIn: "2h" })

  res.json({ success: true, token, ward: { name: ward.name, class: ward.class } })
}

module.exports = { login }
