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