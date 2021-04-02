import "./Home.css";
import MainPic from "../images/long road ahead.jpeg";

function Home(props) {
  return (
    <div className="home">
      <h1>Welcome to Travel Keeper</h1>
      <div className="home-banner-image">
        <img src={MainPic} alt="main" />
        <div className="headliner">
          This a place for the adventurers, the travelers, and the
          experimenters. Send us your dreams and we'll help you share them with
          the world.
        </div>
      </div>
    </div>
  );
}

export default Home;
