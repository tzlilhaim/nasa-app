const express = require("express")
const router = express.Router()
const imagesManager = require("./ImagesManager")
const apiManager = require("./ApiManager")

router.get("/health", function (req, res) {
  res.send("healthy")
})

router.get("/apod", async function (req, res) {
  const image = await apiManager.getAPOD()
  res.send(image)
})

router.get("/search/:query?", async function (req, res) {
  const { query } = req.params
  const medias = await apiManager.searchNasaLibrary(query)
  res.send(medias)
})

router.get("/images/:id?", async function (req, res) {
  const { id } = req.params
  const images = await imagesManager.get(id)
  res.send(images)
})

router.post("/image", async function (req, res) {
  const { title, url, description } = req.body
  const images = await imagesManager.post({ title, url, description })
  res.send(images)
})

router.delete("/image/:id", async function (req, res) {
  const id = req.params.id
  const images = await imagesManager.delete(id)
  res.send(images)
})

module.exports = router
