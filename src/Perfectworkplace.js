import React, { Component } from "react";

 
class Hinder extends Component {
  render() {
    return (
      <div>
      
        <article> 
        <h2>Perfect Workplace</h2>
        
        <p>
          This project is created using Spring, its uses are anonymous reporting by employees to HR to improve workplace conditions.
          It uses Authentication and autorisation with Spring web security.
          </p>

          <p>

      
        
        </p>
        <a href="https://github.com/MikaelSynnes/IssueReporting" >Github </a> <br />
      
     
         
           <p />
           <img  src={require('./img/springproject.png')}></img>
           
        
        </article>
      </div>
    );
  }
}
 
export default Hinder;