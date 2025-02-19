import "./MainContent.scss";
import { Link } from "react-router-dom";
import circle from "../../assets/images/circle_button.png";
import leaves from "../../assets/images/leaves_button.png";
import heart from "../../assets/images/heart_button.png";

function MainContent() {
  return (
    <div>
      <div className="pages__labels">
      <Link to="/cycle">
        <h1 className="pages__gallery pages__gallery--1">Cycle</h1></Link>
        <Link to="/nutrition">
        <h1 className="pages__gallery pages__gallery--1">Nutrition</h1></Link>
        <Link to="/exercise">
        <h1 className="pages__gallery pages__gallery--1">Exercise</h1></Link>
      </div>  
      <div className="pages__container">
        <Link to="/cycle">
        <h1 className="pages__gallery pages__gallery--2">Cycle</h1>
        <img className="pages__img pages__img--1" src={circle} alt="Circle for cycle page" />
        </Link>
        <Link to="/nutrition">
        <h1 className="pages__gallery pages__gallery--2">Nutrition</h1>
        <img className="pages__img pages__img--2" src={leaves} alt="Leaves for nutrition page" />
        </Link>
        <h1 className="pages__gallery pages__gallery--2">Exercise</h1>
        <Link to="/exercise">
        <img className="pages__img pages__img--3" src={heart} alt="Heart for exercise page" />
        </Link>
      </div>
    </div>
  );
}

export default MainContent;
