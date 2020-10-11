require("dotenv").config({ path: "../../.env" })
module.exports = {
  serverPort: process.env.SERVER_PORT,
  mongoDbURI: process.env.MONGODB_URI,
  nasaApiKey: process.env.NASA_API_KEY,
  nasaApiUrl_apod: process.env.NASA_API_URL_APOD,
  nasaApiUrl_library: process.env.NASA_API_URL_LIBRARY,
}
