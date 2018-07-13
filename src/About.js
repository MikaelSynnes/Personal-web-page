import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';
 
class About extends Component {
  render() {
    return (
      <div>
      <img src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/12813939_10154705894094741_4571816759096121461_n.jpg?_nc_cat=0&oh=08edb2503f80fc384bc74078abc773df&oe=5BE44135"/>
        <article> 
        <h2>About me</h2>
        
        <p>Hello my name is Mikael, I'm a 24 year old recent graduate student within computer engineer. 
            I live in Ålesund Norway, and have lived there my entire life. I'm a social person and enjoy being around other people in social settings.
        </p>
            
         <p>
            
            I am currently looking to start my career within software development. The most important thing for me is being able to futher develop my abilities
            within development. I'm not set on either front-end or backend development and would prefer ending up as a strong fullstack developer.


        </p>
    <p></p>
                <p> <br></br>Facebook:   <SocialIcon id="icon" url="https://www.facebook.com/Mikaelsynnes" /> </p>
                <p>  Linkedin:   <SocialIcon id="icon" url="https://no.linkedin.com/in/mikael-synnes-0205b2152" /> </p>
                <p>  GitHub:   <SocialIcon id="icon" url="https://github.com/MikaelSynnes" /> </p>
 
        <p></p>
        </article>
      </div>
    );
  }
}
 
export default About;