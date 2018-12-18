import React from 'react';
import './Home.css'
import '../../../css/hover.css'


const Home = () => (
  <div>
    <div className = "container">
    <div className = "row">
    <div className = "col-12 text-center mt-5 pt-5 hvr-bob ">
    <img src={require('../../../images/name.png')} className="img-fluid" alt = "Henry Montesano III"></img>
    </div>
    <div className = "col-12 text-center mt-3">
    <h2>A <img src={require("../../../images/MERN.png")} alt = "Henry Montesano III"></img> Full Stack Web Developer</h2>
    </div>
    </div>

    <div className = "row">
    <div className = "col-12 col-md-6">
    <div className = "row ">
    <div className = "col-12  mt-5 text-center">
    <h3>Find Me Here:</h3>
    </div>
    
    </div>

    <div className = "row">
    <div className = "col-4  my-5 text-center hvr-bob">
    <i className="fab fa-linkedin fa-3x"></i>
    <a className = "button" href="https://www.linkedin.com/in/henry-montesano-iii-b12a4a92/" rel="noreferrer noopener" target="_blank"><h4>Linkedin</h4></a>
    </div>

    <div className = "col-4  my-5 text-center hvr-bob">
    <i className="fab fa-github fa-3x"></i><a className = "button" href="https://github.com/henrymontesanoiii" rel="noreferrer noopener" target="_blank"><h4>Github</h4></a>
    </div>

    <div className = "col-4  my-5 text-center hvr-bob">
    <i className="fas fa-at fa-3x"></i><br></br><a className = "button hvr-float" href=" mailto:henrymontesanoiii@gmail.com" rel="noreferrer noopener"><h4>Email</h4></a>
    </div>
    
    </div>
    </div>
    
    <div className = "col-12 col-md-6">
    <div className = "row">
    <div className = "col-12  mt-5 text-center">
    <h3>Contact:</h3>
    </div>
    
    </div>

    <div className = "row">
    <div className = "col-12 col-md-6  my-5 text-center hvr-bob">
    <i className="fas fa-envelope fa-3x"></i><h4>henrymontesanoiii@gmail.com</h4>
    </div>

    <div className = "col-12 col-md-6  my-5 text-center hvr-bob">
    <i className="fas fa-file fa-3x"></i><a className = "button" href="https://drive.google.com/file/d/1M34P_r8BRYsEPuF3-tNKoQoS6RyuT9JK/view?usp=sharing" rel="noreferrer noopener" target="_blank"><h4>Resume</h4></a>
    </div>

    
    
    </div>
    </div>
    </div>
    </div>
  </div>
)

export default Home;