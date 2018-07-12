
import logo from './logo.svg';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import Projects from "./Projects";
import About from "./About";
import Aronvessel from "./ARONVESSEL";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div id="main">
         
          <h1>Hello, I'm Mikael and I'm looking for work</h1>
        
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/resume">Resume</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/about">About me</NavLink></li>
          </ul>
     
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
           
            <Route path="/projects/aronvessel" component={Aronvessel} />
          
      
          </div>

          <footer>
            <SocialIcon id="icon" url="https://www.facebook.com/Mikaelsynnes" />
            <SocialIcon id="icon" url="https://no.linkedin.com/in/mikael-synnes-0205b2152" />
            <SocialIcon id="icon" url="https://github.com/MikaelSynnes" />

          </footer>
        </div>
      </HashRouter>
    );
  }
}


export default App;
