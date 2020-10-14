const axios = require("axios")

class ApiManager {
  api = require("../../../../config")
  async getAPOD() {
    const media = await axios.get(
      `${this.api.nasaApiUrl_apod}?api_key=${this.api.nasaApiKey}`
    )
    const { title, url, explanation } = media.data
    return { title, url, description: explanation }
  }
  async searchNasaLibrary(searchQuery) {
    searchQuery.replace("", "%20")
    try {
      const results = await axios.get(
        `${this.api.nasaApiUrl_library}${searchQuery}&media_type=image&page=20`
      )
      let medias = results.data.collection.items
      medias = medias.map((media) => {
        return {
          url: media.links[0].href,
          description: media.data[0].description,
          title: media.data[0].title,
        }
      })
      return medias
    } catch (err) {
      if (err instanceof Error) {
        console.log({ error: err, message: err.message })
        return []
      }
    }
  }
}

const apiManager = new ApiManager()
module.exports = apiManager
