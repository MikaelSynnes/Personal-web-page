import React, { Component } from "react";
 
class Resume extends Component {
  render() {
    return (
      <div id="resume">
      <h2>CV</h2>
        <div id="info">E-mail: Mikaelsynnes@live.no</div>
        <div id="info">Telephone: +4793894003</div>
        <div id="info">Birth: 07.01.1994</div>
        <div id="info">Adress: Vervgata 1 6003 Ålesund Norway</div>

      <h3>Education</h3>
        <div id="info"><b>2015-2018</b>   Bachelor Computer Engineering NTNU Ålesund</div>
        <div id="info"><b>2010-2013</b>   Specialization in General Studies focused on sciences Ålesund High School, </div>

      <h3>Work Experience</h3>
       <div id="info"><b>2013-</b>   Security Guard, Security Norway</div>
       <div id="info"><b>2012-2013</b>   Retail worker Showtime Ålesund(Video rental)</div>
       <div id="info"><b>2012-2012</b>  Retial Worker Narvesen</div>
       

      <h3>Technology</h3>

      <div id="info"> <b>Programming: </b> Java, js, Reactjs, C3, Android(java), php, sql, web</div>
      <div id="info"><b>Version control: </b>  Git</div>
      <div id="info"><b>Tools: </b> Jira and Confluence</div>




     
         
      </div>
    );
  }
}
 
export default Resume;