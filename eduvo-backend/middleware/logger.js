function logger(req, res, next) {
  console.log(`${req.method} ${req.url} — ${new Date().toISOString()}`)
  next() // without this line, the request would hang forever — it never reaches the controller
}

module.exports = logger
