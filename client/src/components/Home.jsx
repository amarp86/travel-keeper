import "./Home.css";
import { Link } from "react-router-dom";
import MainPic from "../images/long road ahead.jpeg";

function Home(props) {
  return (
    <div className="home-entire-area">
      <h1>Welcome to Travel Keeper</h1>
      <div className="home-content">
        <div className="home-banner-image">
          <img className="home-image" src={MainPic} alt="main" />
          <div className="headliner">
            This a place for the adventurers, the travelers, and the
            experimenters. Send us your dreams and we'll help you share them
            with the world.
          </div>
        </div>
        <div className="links-statement-container">
          <Link to="/explore">
            <button className="explore-button">Let's Explore</button>
          </Link>
          <div className="mission-statement">
            Travel Keeper is a web application that utilizes React, Ruby, and
            Rail in a full stack operation. It allows users to create accounts
            and post pictures, details, comments, and lets users like others'
            posts!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
