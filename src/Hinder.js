import React, { Component } from "react";

 
class Hinder extends Component {
  render() {
    return (
      <div>
      
        <article> 
        <h2>Hinder</h2>
        
        <p>Hinder is an chat application made for use by android smartphones. The project is a group project related to a school assignment for mobile
          and distributed applications. The backend is created using RESTApi and Java, the frontend is created in Android studios with Java.
          The application uses gps coordinates from the phone to locate users closeby and listing them for the user to chose who he wants to talk with.
          When a chat has been made, it can be found in a new list so ti will never get lost, even if the person gets out of range.
          </p>

          <p>
          Images below are taken during screenshots from the application. (to many decimals, but didn't have newer screenshots)
          

        
        </p>
        <a href="https://github.com/MikaelSynnes/Hinder" >Github backend</a> <br />
      
        <a href="https://github.com/howardie/HinderAndroid1">Github frontend</a>
           <div id="hinder">  
           <p />
            <img src="https://i.imgur.com/JTPDxnI.png" alt="chat" />
            <img src="https://i.imgur.com/ETJDVrt.png" alt="Dummy data for app"/>
           </div>
        </article>
      </div>
    );
  }
}
 
export default Hinder;