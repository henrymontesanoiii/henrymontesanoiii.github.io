import React from 'react';



const About = () => (
  <div>
    <div className = "container">
    <div className = "row">
    <div className = "col-12 my-5 text-center  ">
    <h1>About Me</h1>
    </div>
    </div>

    <div className = "row my-2">
    <div className=" col-12 ">
     <h3>After graduating from Montclair State University with a BFA in filmmaking and working in the industry as a video editor for over 4 years, I decided that I was not feeling passionate about my work and needed a new challenge. Technology & software were always interests of mine, so now after attending the Rutgers Coding Bootcamp for Full Stack Development, I am ready to contribute my skills and passion to new projects & excited to continue expanding my knowledge in this ever-evolving field!</h3> 
     </div>
     
     </div>

     <div className = "row">
    <div className = "col-12 my-5 text-center  ">
    <h1>Technologies I Use</h1>
    </div>
    </div>

    <div className = "row my-2">
    <div className=" col-12 text-center">
    <img src={require("../../images/react.jpg")} alt = "React"></img>
    <img src={require("../../images/express.jpg")} alt = "Express"></img>
    <img src={require("../../images/bootstrap.png")} alt = "Bootstrap"></img>
    <img src={require("../../images/mongo.jpg")} alt = "Mongo"></img>
    <img src={require("../../images/jquery.png")} alt = "Jquery"></img>
    <img src={require("../../images/mysql.png")} alt = "MySQL"></img>
    <img src={require("../../images/js.png")} alt = "Javascript"></img>
    <img src={require("../../images/api.png")} alt = "Api"></img>

    <img src={require("../../images/git.jpeg")} alt = "Github"></img>
   
     </div>
     
     </div>

     
     
  </div>
  </div>
   
)

export default About;