import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import ARONVESSEL from "./ARONVESSEL";
class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Projects</h2>
       <aside>
        <ul className="sidebar">
        <li><NavLink to="/projects/aronvessel">AR on the vessel bridge(C#)</NavLink></li>
            <li><NavLink to="/projects/hinder">Hinder Chat application for Android(java)</NavLink></li>
            <li><NavLink to="/projects/webshop">Airwolf (php)</NavLink></li>
            <li><NavLink to="/projects/Colorcode">Colorconverter(reactjs)</NavLink></li>
            <li><NavLink to="/projects/Perfectworkplace">IssueReporting (Java(Spring))</NavLink></li>
           
          </ul>
     </aside>
     
     
       
       
      </div>
    );
  }
}
 
export default Projects;