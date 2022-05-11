# Anicropedia

## Link: [https://anicropedia-5699f.web.app/](https://anicropedia-5699f.web.app/)

## Setup
To run the app, first run “npm install” to install all npm packages. Then “npm start” can be called and that will create the styles.css file and run the server on localhost:3000.

## Short description
Anicropedia is a companion app that you can use with the game Animal Crossing: New Horizons. The app will allow users to view all collectable animals and keep a hold of which animals they have caught already. It will display various information such as when the animals can be caught, how much they sell for and their rarity. Other features will be that music will play in the background depending on the weather and time of day of the user. The user will be able to create an account and select where they are located to get accurate information. Collectible paintings and music will be displayed as well, and the user can mark which one he owns to make it easier for them to keep a hold of what they own in the game.

## What we have done
7. April 2022 - The core structure and routing of Anicropedia is ready. Routes available now are “/”, “/encyclopedia”,  “/villagers”, “/music”, “/collectibles'' and “/info”. Anicropedia is connected to the ACNH API which feeds the webpage Animal Crossing data.

- Homepage (“/”) has an overview of each aspect of Anicropedia.
- Encyclopedia (“/encyclopedia”) has an overview of every fish, insect and sea creature that Animal Crossing players can catch. Each thing has its own detailed view when being clicked.
- Villagers (“/villagers”) has an overview of every villager in Animal Crossing. Each villager has its own detailed view when being clicked.
- Music (“/music”) has an overview of songs in Animal Crossing. Each track can be played when clicked.
- Collectibles (“/collectibles”) has an overview of every fossil and art that Animal Crossing players can collect. Each collectable has its own detailed view when being clicked.
- Info (“/info”) has general information about Anicropedia, and the creator's contact information.

Additionally, custom icons and logos have been created for the website such as: homepage icons, back button, user icon, wooden frames and the Anicropedia logo.
 
Two models have been created, where one is persistent and one is not. The DetailsModel is not persistent and is used to keep a hold of which details the user is currently looking at. These details get displayed whenever an item is clicked. The persistent model is the UserModel, which contains every item that the user has added to his collection.
A connection to Firebase has been established to persist the data from the UserModel. Currently there is one user model object connected to it (no authentication) and only fish can be added and removed.

## What we still plan to do
For the upcoming timeframe of this project, we plan to carry out our already discussed work packages. In order to keep on track with our great vision for our webpage, we strive to overall improve the efficiency, the greatness of our user interaction, the functionality, reliability, and maintainability.

To align our mindset with those goals, we brought down the following encompassing work packages in smaller tasks to divide the contents according to our expertise and skill set.

The following tasks are associated with this:

- Linking of a second API, i.e., a weather API that will align the weather data (sunny, rainy, snowy) with fitting music published by the ACNH API and play them in the background.
- Improvement of our big promise, as the fetch is called independently of our big promise, we need to figure out an efficient way to preload images (keyword: caching).
- To increase the user interaction and improve the user spirit while being on our page, we want to implement the functionality to alter between alternative background patterns.
- In order to be accessible for countries around the world, we give users the functionality to switch between content specific areas in north and south.
- Implement a search filter, to improve the efficiency of the encyclopedia.
- Login page workflow
- One major part that is still missing is the “My Island”-page. Here, the user will have the ability to collect and review their saved animals and fossils collection. Moreover, he can collect music that he can play as he wishes to. And finally, he can view his villagers to gain more information about them.

## The project file structure
The main parts of our website are in the /public and /src folders. The package.json file contains the scripts that can be run for the website.

The public folder contains the images and logos that are used on the website. Along with the index.html file that is the base html file. The styles.css and styles.css.map files get generated into this file whenever the “sass” script gets run.

The following are all folders/files in the /src folder:

### Components
Each file within this folder holds a React component which can be used (and reused) in other parts of our web application. We used components also in the creation of our detailsView, to make the code more manageable and easier to understand.

**art.js**
- This component holds the elements that will get rendered in the detailsView when the user requests details for an item in the art category.

**bugs.js**
- This component holds the elements that will get rendered in the detailsView when the user requests details for an item in the insects category.

**close_button.js**
- This holds an svg component that renders a close button.

**fish.js**
- This component holds the elements that will get rendered in the detailsView when the user requests details for an item in the fish category.

**fossils.js**
- This component holds the elements that will get rendered in the detailsView when the user requests details for an item in the fossils category.

**loading.js**
- This holds the component that renders the loading animation.

**months.js**
- This holds a “calendar” for rendering a component that informs the user about the availability of each bug/fish/sea creature in terms of the months.

**sea.js**
- This component holds the elements that will get rendered in the detailsView when the user requests details for an item in the sea creatures category.

**villagers.js**
- This component holds the elements that will get rendered in the detailsView when the user requests details for an item in the villagers category.

### Css
This folder and all of its content will be removed in the future, as we have moved all styling over to SASS.

### Fonts
Contains the font that is used in the app.
 
### Presenters
This folder contains all of the presenters used in the app:

**collectiblePresenter.js**
- This presenter manages the CollectibleView. It keeps a hold of which of the two collectible tabs are active and makes a promise that displays either the fossils or the art. To get the relevant collectables it makes a fetch call and passes it down to the view.

**detailsPresenter.js**
- This presenter manages the DetailsView. It fetches the details of whatever element was clicked. It also has a connection to the UserModel and if the user presses the “Add/remove from collection” button, it will update the model.

**encyclopediaPresenter.js**
- This presenter manages the EncyclopediaView. It keeps a hold of which of the three encyclopedia tabs are active and makes a promise that fetches either the fish, insects or sea creatures and passes it down to the view.

**musicPresenter.js**
- This presenter manages the MusicView. It has different functions to play/pause/stop the music from playing. It also makes a fetch call to the API to get all of the music tracks in the game and passes it down to the view.

**searchPresenter.js**
- This presenter is currently not used, since we haven’t implemented the search functionality.

**show.js**
- This is old code that is no longer used and will be removed. We have changed from using hashes to using react routes.

**villagersPresenter.js**
- This presenter manages the VillagersView. It makes a fetch call to the API to get all villagers and sends them to the view.
 
### Source
The source files are contained within this folder, holding all the fetch calls we need, and the api configuration.

**apiConfig.js**
- Holds the base URL for fetch calls.

**collectibleSource.js**
- Holds the fetch call for requesting the collectibles from the API.

**detailsSource.js**
- Holds the fetch call for requesting specific details for any selected item within a selected category.

**encyclopediaSource.js**
- Holds the fetch call for requesting the encyclopedia from the API.

**fishSource.js**
- Will be removed in the future, as we are using a different approach for fetching now.

**musicSource.js**
- Holds the fetch call for requesting the music from the API.

**villagersSource.js**
- Holds the fetch call for requesting the villagers from the API.
 
### Styles
This folder contains all of the different SASS files that are combined into one in the styles.scss file.

**collectible.scss**
- Old code that will be removed in the future. Instead of using this style we are now using list.scss and listItem.scss.

**config.scss**
- Contains general rules and functions that can be used in other scss files.

**details.scss**
- Styles for the details view.

**home.scss**
- Styles for the home view.

**info.scss**
- Styles for the info view

**list.scss**
- Styles used for the lists that are displayed in the encyclopedia, collectible, music and villager views.

**listItem.scss**
- Styles used for each item in the lists that are displayed in the encyclopedia, collectible, music and villager views.

**loading.scss**
- Styles for the loading animation when waiting for data.

**menuBar.scss**
- Styles for the menu bar at the top of the page.

**months.scss**
- Styles used for the month display in the details view for fish, insects and sea creatures. Used to show which months you can catch each creature.

**musicBar.scss**
- Used for the music player at the top of the music bar view.

**styles.scss**
- Used to collect all of the other .scss files together into one file. This file is changed to a .css file by running the sass script in package.json. Whenever npm start is called, the sass script gets called.
 
### Views
All our views within the Model-View-Presenter pattern are stored within this folder, including the encyclopedia, info, collectible, music and villagers view, which all correspond to the sections of the page you can access through the home page, the homeView, which corresponds to the home page itself, as well as several other views, such as the music bar, navigation and menu bar views.

**collectibleView.js**
- Renders the view of the collectibles page.

**detailsView.js**
- Renders the detailsView, utilizing the components from components folder depending on which category the details item is in.

**encyclopediaView.js**
- Renders the view of the encyclopedia page.

**homeView.js**
- Renders the view of the home page.

**infoView.js**
- Renders the view of the info page.

**menuBarView.js**
- Renders the view of the top bar, used on each page.

**musicBarView.js**
- Renders the play/stop buttons at the top of the music page.

**musicView.js**
- Renders the view of the music page.

**navigation.js**
- Will be discarded in the future.

**promiseNoData.js**
- Renders a loading screen before the data from the fetch call is loaded into the view.

**searchFormView.js**
- Not used. Will be removed in the future

**villagersView.js**
- Renders the view of the villagers page.


### App.js
The App.js file binds together all the different parts of our application, as it holds the presenters and their routes, and displays whatever the user is supposed to look at at the moment.
 
### DetailsModel.js
The details model is one of the two models within our app. This one does not use persistence and is only local, and holds information about the currently selected item from any part of our app. It is used when we need to fetch specific details about one item, to be displayed in the details view.
 
### UserModel.js
Contains the user model that uses persistence through a firebase database. This model has arrays for the different categories that can be added to the user’s collection. Only the addItem, removeItem, getCategoryArray and observer methods are being used, the other add/remove methods will be removed in the future, as the addItem and removeItem methods can handle every category.
 
### firebaseConfig.js
The config that is used to connect the app to firebase. This file will be in .gitignore for the final release, since it contains the API key for firebase.
 
### firebaseModel.js
Contains the user model. This model has arrays for the different categories that can be added to the user’s collection. Only the addItem, removeItem, getCategoryArray and observer methods are being used, the other add/remove methods will be removed in the future, as the addItem and removeItem methods can handle every category.
 
### index.js
This file is the top level of our architecture - it loads our app into the html root element, and creates models for the user and details, which are passed down as props.
 
### resolvePromise.js
This file is used for resolving fetch calls and promises of the fetch calls, storing the promise states, data and errors.
 
### utils.js
This js file holds utility functions that could be needed in different parts of the app, it might grow in the future, but for now it only holds a function that capitalizes the first letters of any phrase - we use it for capitalizing first letters of animals, items and collectibles.
 
 
