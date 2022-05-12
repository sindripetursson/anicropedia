# Anicropedia
## Link: [https://www.anicropedia.com](https://www.anicropedia.com)

# Group members
Adam Cerven, cerven@kth.se\
Benjamin Esdor, esdor@kth.se\
Kári Steinn Aðalsteinsson, ksad@kth.se\
Sindri Petursson, sindrip@kth.se

## Setup
To run the app locally, first run “npm install” to install all npm packages. Then “npm start” can be called and that will create the styles.css file and run the server on localhost:3000. To access the website, users have to create an account ("/signup").

## Short description
Anicropedia is a companion app that can be used with the game Animal Crossing: New Horizons. The app allows users to view all collectable animals and keep a hold of which critters they have caught already. Anicropedia displays various information such as when the critters can be caught, how much they sell for and their rarity. Another feature is that music plays in the background depending on the weather and time of day. Users are able to create an account and select where they are located to get accurate information. Collectibles, villagers and music are displayed as well, and the user can mark which one he owns to make it easier to keep a hold of what they own in the game.

## What we have done
The routes on the website are:
- Homepage (“/”) has an overview of each of the main tabs of Anicropedia.
- Critterpedia (“/critterpedia) has an overview of every fish, insect and sea creature that Animal Crossing players can catch. Each thing has its own detailed view when being clicked.
- Villagers (“/villagers”) has an overview of every villager in Animal Crossing. Each villager has its own detailed view when being clicked.
- Music (“/music”) has an overview of music tracks that can be bought in Animal Crossing. Each track can be played when clicked.
- Collectibles (“/collectibles”) has an overview of every fossil and art that Animal Crossing players can collect. Each collectable has its own detailed view when being clicked.
- Info (“/info”) has general information about Anicropedia, and the creator's contact information.
- My Island ("/island") provides users with an interface to review their saved critters, collectibles, music and villager information.
- Signup ("/signup") has the functionality to create user accounts.
- Login ("/login") has the functionality to login the user.
- Logout ("/logout") has the functionality to logout the user.
- Settings ("/settings") has the functionality to change user name, the location, the password and clear the My Island collection.

Custom icons and logos have been created for the website such as: homepage icons, back button, wooden frames, music vinyl and the Anicropedia logo.
 
The website uses firebase to manage user data and database. 

A weather API is linked, that aligns the weather data (sunny, rainy, snowy) and time of the users location with fitting music published by the ACNH API and plays it in the background. In Animal Crossing: New Horizons there is hourly music that plays depending on the weather in the game, so we decided to take this feature from the game and implement it on our website using the users real weather and time. As some critters are only available at certain times and those times are depentant on if the user is in the southern or northern hemisphere, we make sure to display the correct information, based on the latitude of the location that the player provided. In the menu bar there is a hamburger menu, which opens a sidebar with fast access to each page, settings and logout.

## What we used

- Animal Crossing API: http://acnhapi.com/
- OpenWeather API: https://openweathermap.org/api
- Google Places API: https://developers.google.com/maps/documentation/places/web-service/overview
- Animal Crossing Loader: https://dribbble.com/shots/13905159-Animal-Crossing-New-Horizons-loader
- Background Wallpaper by Ashaife: https://ko-fi.com/post/Animal-Crossing-Leaf-Wallpapers-N4N51I7CL

## Disclaimer
Anicropedia is a student-made project website and claims no ownership of any intellectual property associated with Nintendo or Animal Crossing. The content found on the site and the git repository are the sole property of Nintendo and are only used for non-commercial and educational purposes.
