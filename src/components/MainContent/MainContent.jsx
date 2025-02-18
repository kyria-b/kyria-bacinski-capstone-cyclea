import "./MainContent.scss";
import circle from "../../assets/images/circle_button.png";
import leaves from "../../assets/images/leaves_button.png";
import heart from "../../assets/images/heart_button.png";

function MainContent() {
  return (
    <div>
      <div className="pages__labels">
        <h1 className="pages__gallery pages__gallery--1">Cycle</h1>
        <h1 className="pages__gallery pages__gallery--1">Nutrition</h1>
        <h1 className="pages__gallery pages__gallery--1">Exercise</h1>
      </div>  
      <div className="pages__container">
        <h1 className="pages__gallery pages__gallery--2">Cycle</h1>
        <img className="pages__img pages__img--1" src={circle} alt="Circle for cycle page" />
        
        <h1 className="pages__gallery pages__gallery--2">Nutrition</h1>
        <img className="pages__img pages__img--2" src={leaves} alt="Leaves for nutrition page" />
        
        <h1 className="pages__gallery pages__gallery--2">Exercise</h1>
        <Link to="">
        <img className="pages__img pages__img--3" src={heart} alt="Heart for exercise page" />
        </Link>
      </div>
    </div>
  );
}

export default MainContent;
