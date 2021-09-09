// import React from "react";
//import CardsPelis from "./components/CardsPelis";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Peliculas from "./views/Peliculas";
import Personas from "./views/Personas";
import ProgramasTV from "./views/ProgramasTV";
import Home from "./views/Home"
import MovieDetails from "./components/MovieDetails";
//import NotFound from "./components/NotFound"

function App() {

  return (
    <Router>
      <div>
      <Navbar/>
      <Switch>
      <Route exact path="/">
        <Home/>
        </Route>
        <Route exact path="/peliculas">
        <Peliculas/>
        </Route>
        <Route exact path="/peliculas/:id">
        <MovieDetails/>
        </Route>
        <Route exact path="/personas">
        <Personas/>
        </Route>
        <Route exact path="/programastv">
        <ProgramasTV/>
        </Route>
        {/* <Route path="*">
        <NotFound/>
        </Route> */}
      </Switch>
      </div>
    </Router>
 
  );
}

export default App;
