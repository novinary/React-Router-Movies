** Part 1 **
Step 1 
In the root of this directory: Run yarn install to download dependencies. - Done

Step 2
un the server using yarn start or node server.js. (Don't worry too much about this process, you'll get used to doing this and it will be explained more in the future). - Done

Step 3
In a separate terminal cd into the client folder and run yarn install to download dependencies. - Done

Step 4
Still inside the client folder run yarn start to run the client application. - Done
 
 Step 5 Wrap your app with the router. 
- Import BrowserRouter inside index.js - Done
- Wrap <App /> component to ReactDOM.render() with new Router component. - Done

Step 6 Inside your App file add two routes.
- First, Import { Route } from 'react-router-dom' inside of App.js
- one route for / that loads the MovieList component. - Done
- one route that will take an id parameter after/movies/ (ex: /movies/2, /movies/3 where the id is dynamic). This route should load the Movie component - Done


** Part 2 ** 
Step 7 
Make it so that the card in MovieList is a link,this should direct the user to the /movies/{id of movie here} URL, where :id is the id of the individual movie.
- First, import { Link } from 'react-router-dom'; inside of MovieList.js - Done
Make card in  MovieList a link 
- Done

Step 8
When a user clicks on a movie card they should be taken to /movies/{id of movie here} to see the details for the selected movie.
You will need to modify line 13 of Movie.js in order to accept the correct id for the movie selected.
- Get the id passed on the URL - Done

Step 9
Add functionality so the Home button on the SavedList component navigates back to home.
- First, import { Link } from 'react-router-dom'; inside of Movie.js - Done
- Make home-button in SavedList.js a Link - Done

** Stretch Goals **
Refactor so that our code is DRY.
You may notice that we are using essentially the same exact JSX code in the Movie component and the MovieDetails component in MovieList.js 
- create a new component in MovieCard.js that returns this JSX code.  - Done
- Then remove the old code from Movie and MovieDetails and instead return the new MovieCard component. Import the new component before adding any code- Done 

Add Save Movie funcitonality.
You will notice there is a 'Saved Movies' component that we are not currently using. In this step you will add the functionality to save a movie. 
- You will need to pass the addToSavedList function to the Movie component. Use the render prop instead of the component prop in App.js. - Done
- Uncomment componentWillReceiveProps function in Movie.js - Done
 Uncomment saveMovie function in Movie.js - Done
- Once you have done that you will need to add a click handler to the save button. - 