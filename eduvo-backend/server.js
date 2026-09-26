const express = require("express")
const cors = require("cors")
const logger = require("./middleware/logger")
const notFound = require("./middleware/notFound")
const errorHandler = require("./middleware/errorHandler")

const authRoutes = require("./routes/authRoutes")
const dashboardRoutes = require("./routes/dashboardRoutes")
const chatRoutes = require("./routes/chatRoutes")
const classesRoutes = require("./routes/classesRoutes")
const teachersRoutes = require("./routes/teachersRoutes")
const galleryRoutes = require("./routes/galleryRoutes")
const aboutRoutes = require("./routes/aboutRoutes")

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)

app.use("/api", authRoutes)
app.use("/api", dashboardRoutes)
app.use("/api", chatRoutes)
app.use("/api", classesRoutes)
app.use("/api", teachersRoutes)
app.use("/api", galleryRoutes)
app.use("/api", aboutRoutes)

app.use(notFound)      // must come AFTER all real routes
app.use(errorHandler)  // must come LAST of all — Express relies on this order

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000")
})
