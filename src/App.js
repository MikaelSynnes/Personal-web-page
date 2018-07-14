
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
import Hinder from "./Hinder";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div id="main">
        <header>   <img id="me" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/12813939_10154705894094741_4571816759096121461_n.jpg?_nc_cat=0&oh=08edb2503f80fc384bc74078abc773df&oe=5BE44135"/>
   
       
        <h1>I'm Mikael</h1>
          <h4>Graduate Computer engineer</h4>
          <p>Email: MikaelSynnes@live.no <br/>
            PhoneNumber:+4793894003 <br/>

          </p>

        </header>
        <section>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/resume">Resume</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/about">About me</NavLink></li>
          </ul>
     </section>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
           
            <Route path="/projects/aronvessel" component={Aronvessel} />
            <Route path="/projects/hinder" component={Hinder} />
          
      
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
