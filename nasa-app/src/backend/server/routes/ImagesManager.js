const mongoose = require("../db/mongoose")
class ImagesManager {
  constructor() {
    this.Image = require("../db/models/Image")
  }
  async get(imageId = null) {
    let images
    if (imageId) {
      images = await this.Image.findById(imageId)
    } else {
      images = await this.Image.find({})
    }
    return images
  }
  async post(details) {
    const image = new this.Image(details)
    await image.save()
    return await this.get()
  }
  async delete(imageId) {
    await this.Image.deleteOne({ _id: imageId }).exec(function (err) {
      err !== null ? console.log(err) : null
    })
    return await this.get()
  }
}

const imagesManager = new ImagesManager()
module.exports = imagesManager
