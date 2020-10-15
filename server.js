const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const api = require("./src/backend/server/routes/api")
const config = require("./config")
const path = require("path")
const cors = require("cors")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  )

  next()
})

app.use("/api", api)
app.use(cors())
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = config.serverPort || 5000
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
