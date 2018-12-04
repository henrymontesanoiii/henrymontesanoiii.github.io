import React from "react";
import '../../../css/Portfolio.css';

const Portfolio = () => (
  <div>
    <div className = "container">
    <div className = "row">
    <div className = "col-12 my-5 text-center  ">
    <h1>Full Stack Web Development Projects</h1>
    </div>
    </div>

    <div className = "row my-2">
    <div className=" col-12 col-md-6 contain">
     <img src={require("../../../images/Widget.png")} alt = "Widget World"></img>
     <div className="middle btn btn-primary">
     <a className = "button" href="https://damp-reef-74030.herokuapp.com/" rel="noreferrer noopener" target="_blank">Click Here</a>
     </div>
     </div>
     <div className= "col-12 col-md-6">
     <h2>Widget World (React.js)</h2>
     <h3>Interactive widgets with integrated User login authentication, linked to Mongodb for unique Avatar creation as well as voice recognition through Web Speech API</h3>
     </div>
     </div>
     
     <div className = "row my-2">
     <div className="col-12 col-md-6 contain">
     <img src={require("../../../images/NEXT.png")} alt = "NEXT"></img>
     <div className="middle btn btn-primary">
     <a className = "button" href="https://fast-plains-99333.herokuapp.com/" rel="noreferrer noopener" target="_blank">Click Here</a>
     </div>
     </div>
     <div className= "col-12 col-md-6">
     <h2>NEXT</h2>
     <h3>Trip & travel logging with integrated User login authenticaiton, linked to MySQL database for conservation of user's past trips & reviews, as well as general review search functionality</h3>
     </div>
     </div>

     <div className = "row my-2">

     <div className="col-12 col-md-6 contain">
     <img src={require("../../../images/scrap.png")} alt = "Website Scraper"></img>
     <div className="middle btn btn-primary">
     <a className = "button" href="https://sleepy-ridge-63812.herokuapp.com/" rel="noreferrer noopener" target="_blank">Click Here</a>
     </div>
     </div>
     <div className= "col-12 col-md-6">
     <h2>Website Scraper</h2>
     <h3>Scraping application utilizing Axios & Cheerio to scrape various article information & store in MongoDB with unique article comment when article header is clicked
      </h3>
     </div>
     </div>
    

    <div className = "row">
    <div className = "col-12 my-5 text-center  ">
    <h1>Fun Projects</h1>
    </div>
    </div>

    <div className = "row my-2">
    <div className=" col-12 col-md-6 contain">
     <img src={require("../../../images/Click.png")} alt = "Clicky Game"></img>
     <div className="middle btn btn-primary">
     <a className = "button" href="https://henrymontesanoiii.github.io/clickyGame/" rel="noreferrer noopener" target="_blank">Click Here</a>
     </div>
     </div>
     <div className= "col-12 col-md-6">
     <h2>The Office Matching Game (React.js)</h2>
     <h3>Interactive memory game where the user attempts to click each character once before clicking one twice</h3>
     </div>
     </div>
     
     <div className = "row my-2">
     <div className="col-12 col-md-6 contain">
     <img src={require("../../../images/Trivia.png")} alt = "Trivia"></img>
     <div className="middle btn btn-primary">
     <a className = "button" href="https://henrymontesanoiii.github.io/TriviaGame/" rel="noreferrer noopener" target="_blank">Click Here</a>
     </div>
     </div>
     <div className= "col-12 col-md-6">
     <h2>Bruce Campbell Trivia</h2>
     <h3>Trivia game that has the user answer multiple choice questions under a time limit and checks user answers against correct answers to give final score </h3>
     </div>
     </div>

  

    
  </div>
  </div>
   
  
)

export default Portfolio;