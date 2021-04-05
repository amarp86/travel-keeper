import "./Home.css";
import { Link } from "react-router-dom";
import MainPic from "../images/long road ahead.jpeg";
import { Button } from "@material-ui/core";

function Home(props) {
  return (
    <div className="home-entire-area">
      <h1 className="main-welcome">Welcome to Travel Keeper</h1>
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
            <Button
              variant="contained"
              color="primary"
              className="explore-button"
            >
              Let's Explore
            </Button>
          </Link>
          <div className="mission-statement">
            Travel Keeper is a web application that utilizes React, Ruby on
            Rails, PostgreSQL, Javascript, HTML, and CSS in a full stack
            application. It allows users to create accounts and post multiple
            posts with pictures, details, comments, and lets users "like" other
            users posts!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
