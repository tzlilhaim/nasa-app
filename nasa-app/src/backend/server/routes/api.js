const express = require("express")
const router = express.Router()
const imagesManager = require("./ImagesManager")

router.get("/health", function (req, res) {
  res.send("healthy")
})

router.get("/images/?id", async function (req, res) {
  const id = req.params || null
  const images = await imagesManager.get(id)
  res.send(images)
})

router.post("/image ", async function (req, res) {
  const { title, imgUrl, description } = req.body
  const images = await imagesManager.post({ title, imgUrl, description })
  res.send(images)
})

router.delete("/image/:id", async function (req, res) {
  const id = req.params.id
  const images = await imagesManager.delete(id)
  res.send(images)
})

module.exports = router
