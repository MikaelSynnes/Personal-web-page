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
        <li><NavLink to="/projects/aronvessel">AR on the vessel bridge</NavLink></li>
            <li>TBD</li>
            <li>TBD</li>
            <li>TBD</li>
          </ul>
     </aside>
     
     
       
       
      </div>
    );
  }
}
 
export default Projects;