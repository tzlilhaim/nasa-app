# Nasaapp
This app uses the nasa API to display media files (images and videos) of space, and descriptions about them from the nasa archives.
The user can search for images using a keyword, save images to their favourites page.

# The app
https://nasaaapp.herokuapp.com/home

# Technologies
- React
- Express server
- mongoDB database (atlas)
- mongoose

# Home
The home page shows a randome daily image from the nasa archives with description of what is seen.
![alt home](https://github.com/tzlilhaim/nasa-app/blob/master/demo-images/nasaapp-home.png?raw=true|width=100)

# Search
The user can search for images by keywords and LIKE them if they wish to, adding the images to the favourites page.
![alt search](https://github.com/tzlilhaim/nasa-app/blob/master/demo-images/nasaapp-search.png?raw=true|width=100)

# Favourites
The user can see all the images that were saved from the Search page - remove by DISLIKE (and add them right back, as the image moves to the bottom of the screen in real-time but isn't removed until the page is refreshed).
![alt favourites](https://github.com/tzlilhaim/nasa-app/blob/master/demo-images/nasaapp-favourites.png?raw=true|width=100)