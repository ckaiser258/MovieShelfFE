### Flatiron School: Seattle 0420 Cohort
# MovieShelf: Module 4 Project

![Welcome](README_assets/home_page_mvs.gif)

### Description: 
This project was designed to enable a user to create their own movie library by accessing a massive database of movies, and deleting/modifying information as they please. Key features are as follows:

* Routing with React Router

![Pages](README_assets/pages_mvs.gif)

* Search movies from OMDB and add them to your shelf

![Search Movies](README_assets/add_mvs.gif)

* Handling of invalid search/can't find movie

![Search Error](README_assets/error_mvs.gif)

* View Movie Details

![Details](README_assets/details_mvs.gif)

* Filter movies on your shelf by genre

![Filter Genre](README_assets/filter_mvs.gif)

* Edit a movie's poster

![Edit Form](README_assets/edit_mvs.gif)

* Broken images get replaced with a default

![Default](README_assets/default_mvs.gif)

* Delete a movie

![Delete](README_assets/delete_mvs.gif)


The backend of the application leverages Ruby on Rails API functionality to receive and send AJAX requests in a JSON formate. The interactive frontend is build on ReactJS, HTML, and CSS.

### Team:
* Colton Kaiser
* Justin Langlinais
* Joshua Mclean
* Trevor Low

### Dependencies:
* Node Package Manager (NPM)
* Developed on Google Chrome (80.0.3987.149)
* ReactJS
* React Bootstrap
* React Router

### Server Dependencies
The app uses a Heroku server as it's backend and the frontend is hosted here: https://movieshelf.netlify.app, but if you'd like to run the server locally, refer to the backend repo at https://github.com/ckaiser258/MovieShelfBE for instructions to set up the server locally and PostgreSQL. (See note below the "Running" section in this README as well.)

### Installation:

Download this entire git repository to your computer and place in your desired install directory. 

If you don't have the above dependencies:

1. If you do not currently have Node Package Manager (NPM), follow their guide here: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm.
2. To install ReactJS, React Bootstrap, and React Router, in a terminal navigate to the directory in which you installed this repo, then execute `npm install react react-dom --save`. Then, run `npm install webpack webpack-dev-server webpack-cli --save`, `npm install react-bootstrap bootstrap`, and `npm install --save react-router-dom`
3. Finally, execute ```npm install``` to install all other required node packages.

### External API Setup - Frontend
The movie search functionality requires the setup of the Open Movie Database API with your own personal key. Visit ```http://www.omdbapi.com/``` to obtain a key.
Once you have your key, navigate to the root directory of the project (MOVIESHELF-FRONTEND) and create a ```.env``` file. Inside this file on the first line type: ```REACT_APP_API_KEY=yourapikey```. This file will automatically be added to the .gitignore.
In App.js on line 10, notice that the URL is being passed the api key via the environment variable, instead of it be hard-coded in. To maintain security, be sure to use the environment varible to refer to your key anywhere you use it.

### Running:
This project is hosted at https://movieshelf.netlify.app, but if you'd like to run it locally: Navigate to the directory in which this repo was installed. Then, via a terminal interface execute ```npm start```. If you started your rails server before this you will be prompted to enter Y/N to use an unoccupied port. Enter `y` and after a moment your browser should automatically load the application. At this point the application will load and all functionality should be available.

NOTE: If you're planning on using the local server from the backend repo located here: https://github.com/ckaiser258/MovieShelfBE, you'll need to navigate to the installed directory and open the project with a text editor. Then, in App.js, uncomment the commented out `localAPI` variable, and comment out the one below it. This will change the defined backend API from Heroku to your local server. Save the file.

### License
Copyright 2020 Colton Kaiser, Joshua Mclean, Justin Langlinais, Trevor Low

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
