import "./MainSection.css";
import wades from "../../assets/jadon_wade.png";

const MainSection = () => {
  return (
    <div className="main-section-background">
      <div className="main-section">
        <div className="text">
          <h1>Welcome to</h1><h1>My Portfolio</h1>
          <br />
          <p>
            <em><br/></em>
          </p>
        </div>
        <div className="image">
          <img src={wades} alt="People smiling" />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
