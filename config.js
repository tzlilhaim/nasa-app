const dotenv = require("dotenv")
dotenv.config()
module.exports = {
  port: process.env.PORT,
  mongoDbURI: process.env.MONGODB_URI,
  nasaApiKey: process.env.NASA_API_KEY,
  nasaApiUrl_apod: process.env.NASA_API_URL_APOD,
  nasaApiUrl_library: process.env.NASA_API_URL_LIBRARY,
}
