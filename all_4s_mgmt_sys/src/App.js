/* import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Jumbotron />
      <Card />
    </div>
  );
}

export default App; */
import React, { Component } from "react";   
import Footer from "./Footer/Footer"; 
import { Route, NavLink, BrowserRouter } from "react-router-dom";

import Home from './Home/Home.js';
import About from './Pages/About/About.js';
import Complaint from './Pages/Complaint/Complaint.js';
import ContactUs from './Pages/ContactUs/ContactUs.js';
import Events from './Pages/About/About.js';
import GameSheets from './Pages/About/About.js';
import PhotoGallery from './Pages/About/About.js';
import Registration from './Pages/About/About.js';
import Rules from './Pages/About/About.js';
import Tutorial from './Pages/About/About.js';
import VideoGallery from './Pages/About/About.js';

import './App.css';

class App extends Component {
   
  render() {

    return (
        <div>   
          <BrowserRouter>
            <div> 
               <header id="header">
                <NavLink to="/"><div id="logo"></div></NavLink>
                <div id="navBar">
                  <li className="navBarA"><NavLink exact to="/">Home</NavLink></li>
                  <li className="navBarA"><NavLink to="/about">About</NavLink></li>
                  <li className="navBarA"><NavLink to="/complaints">Complaints</NavLink></li> 
                  <li className="navBarA"><NavLink to="/contact-us">Contact Us</NavLink></li>
                  <li className="navBarA"><NavLink to="/events-news">News/Events</NavLink></li>
                  <li className="navBarA"><NavLink exact to="/gamesheets">Game Sheets</NavLink></li>
                  <li className="navBarA"><NavLink to="/photos">Photo Gallery</NavLink></li>
                  <li className="navBarA"><NavLink to="/videos">Video Gallery</NavLink></li> 
                  <li className="navBarA"><NavLink to="/registration">Registration</NavLink></li>
                  <li className="navBarA"><NavLink to="/rules">Rules/Regulations</NavLink></li>  
                  <li className="navBarA"><NavLink to="/tutorial">How To Play</NavLink></li>  

                </div> 
              </header> 
  
              <div className="mainContent">
                <Route exact path="/" component={Home} /> 
                <Route path="/about" component={About} />
                <Route path="/complaints" component={Complaint} />
                <Route path="/contact-us" component={ContactUs} /> 
                <Route path="/events-news" component={Events} /> 
                <Route path="/gamesheets" component={GameSheets} /> 
                <Route path="/photos" component={PhotoGallery} />
                <Route path="/videos" component={VideoGallery} />
                <Route path="/registration" component={Registration} /> 
                <Route path="/rules" component={Rules} /> 
                <Route path="/tutorial" component={Tutorial} /> 

              </div>
            </div> 
          </BrowserRouter> 

          <Footer />
        </div>   
    );
  }
}

export default App;