const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const api = require("./src/backend/server/routes/api")
const config = require("./config")
const path = require("path")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, "build")))
app.use("/api", api)

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})

const port = config.port
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
