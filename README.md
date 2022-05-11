# Anicropedia

## Link: [https://anicropedia-5699f.web.app/](https://anicropedia-5699f.web.app/)

## Setup
To run the app, first run “npm install” to install all npm packages. Then “npm start” can be called and that will create the styles.css file and run the server on localhost:3000. To access the website, users have to create an account ("/signup").

## Short description
Anicropedia is a companion app that you can use with the game Animal Crossing: New Horizons. The app will allow users to view all collectable animals and keep a hold of which animals they have caught already. It will display various information such as when the animals can be caught, how much they sell for and their rarity. Other features will be that music will play in the background depending on the weather and time of day of the user. The user will be able to create an account and select where they are located to get accurate information. Collectible paintings and music will be displayed as well, and the user can mark which one he owns to make it easier for them to keep a hold of what they own in the game.

## What we have done
The core structure and routing of Anicropedia is ready. Routes available now are “/”, “/encyclopedia”,  “/villagers”, “/music”, “/collectibles'' and “/info”. Anicropedia is connected to the ACNH API which feeds the webpage Animal Crossing data.

- Homepage (“/”) has an overview of each aspect of Anicropedia.
- Critterpedia (“/critterpedia) has an overview of every fish, insect and sea creature that Animal Crossing players can catch. Each thing has its own detailed view when being clicked.
- Villagers (“/villagers”) has an overview of every villager in Animal Crossing. Each villager has its own detailed view when being clicked.
- Music (“/music”) has an overview of songs in Animal Crossing. Each track can be played when clicked.
- Collectibles (“/collectibles”) has an overview of every fossil and art that Animal Crossing players can collect. Each collectable has its own detailed view when being clicked.
- Info (“/info”) has general information about Anicropedia, and the creator's contact information.
- My Island ("/island") provides user with an interface to collect and review their saved animals and fossils collection, as well as play their collected music.
- Signup ("signup") has the functionality to create user accounts.
- Login ("/login") has the functionality to login the user.
- Logout ("/logout") has the functionality to logout the user.
- Settings ("/settings") has the functionality to change user name, the location, the password and clear the My Island collection.


Additionally, custom icons and logos have been created for the website such as: homepage icons, back button, user icon, wooden frames, music vinyl and the Anicropedia logo.
 
Two models have been created, where one is persistent and one is not. The DetailsModel is not persistent and is used to keep a hold of which details the user is currently looking at. These details get displayed whenever an item is clicked. The persistent model is the UserModel, which contains every item that the user has added to his collection.
A connection to Firebase has been established to persist the data from the UserModel. The user model is connected to firebase and each user has access to his own persistent data.

Furthermore, features on the page:

A weather API is linked, that aligns the weather data (sunny, rainy, snowy) with fitting music published by the ACNH API and plays them in the background. In order to be accessible for countries around the world, users can type in their specific location that switches them between content specific areas in north and south. On the music page, user can listen and add their favorite music to their My Island page. To support the audio usability, a musicbar is displayed showing the currently playing song and a progessbar. Moreover, in the menubar is a hamburger menu located, which opens a sidebar with fast access to each page.

## What we used

Animal Crossing API: http://acnhapi.com/
OpenWeather API: https://openweathermap.org/api
Google Places API: https://developers.google.com/maps/documentation/places/web-service/overview
Animal Crossing Loader: https://dribbble.com/shots/13905159-Animal-Crossing-New-Horizons-loader
Background Wallpaper by Ashaife: https://ko-fi.com/post/Animal-Crossing-Leaf-Wallpapers-N4N51I7CL