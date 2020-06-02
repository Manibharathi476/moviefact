/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import App from 'files/App.js';
// pages
import Index from "views/Index.js";
import MovieInfo from "components/Movie/MovieInfo.js";
import PopularList from "components/Movie/PopularList.js";




import Login from "components/Login/Login.js";
import Search from "components/Search/Search";
import Allmovies from "components/Allmovies/Allmovies.js";
import Popular from "components/Allmovies/Popular.js";
import Topmovies from "components/Allmovies/Topmovies";
// others

ReactDOM.render(
  <BrowserRouter>
  <Switch>
  <Route path="/login" render={props => <Login {...props}/>}/>
  <Route path="/home" render={props => <App {...props}/>} />
  <Route path="/movies" render={props => <Allmovies {...props}/>}/>
  <Route path="/search" render={props => <Search {...props}/>}/>
  <Route path="/popular" render={props => <Popular {...props}/>}/>
  <Route path="/top" render={props => <Topmovies {...props}/>}/>
  <Route path="/movieInfo" render={props => <MovieInfo {...props}/>} />
  <Redirect to="/home"></Redirect>
  </Switch>
  
</BrowserRouter>
  ,
  document.getElementById("root")
);
