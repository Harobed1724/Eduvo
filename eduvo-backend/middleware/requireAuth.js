const jwt = require("jsonwebtoken")
const JWT_SECRET = "replace-this-with-a-long-random-string" // move to an env variable before this ever goes live

function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization // expected format: "Bearer <token>"

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "No token provided." })
  }

  const token = authHeader.split(" ")[1]

  try {
    const payload = jwt.verify(token, JWT_SECRET)
    req.wardName = payload.wardName // attach it here so the controller can use it
    next()
  } catch (err) {
    res.status(401).json({ success: false, message: "Invalid or expired token." })
  }
}

module.exports = requireAuth
