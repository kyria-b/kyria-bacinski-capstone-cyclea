import React, { useState } from "react";
import "../Nutrition/Nutrition.scss";

function Nutrition() {
  const [phase, setPhase] = useState("");

  const getDietRecommendation = () => {
    switch (phase) {
      case "Menstruation":
        return "Iron-rich foods are essential during menstruation. Try spinach, lentils, and beans!";
      case "Follicular":
        return "Focus on protein-rich foods for muscle building and repair. Consider foods like salmon, tofu, eggs, and legumes!";
      case "Ovulation":
        return "Consume foods rich in antioxidants to combat inflammation and improve fertility. Think leafy greens, blueberries, and apples!";
      case "Luteal":
        return "Eat foods with vitamin B6 to combat PMS and fatigue. Try foods like bananas, oranges, and potatoes!";
      default:
        return "Please select a phase to get recommendations.";
    }
  };

  return (
    <div className="nutrition">
      <h3>Nutrition Recommendations</h3>
      <div className="nutrition__buttons">
        <button onClick={() => setPhase("Menstruation")}>Menstruation</button>
        <button onClick={() => setPhase("Follicular")}>Follicular</button>
        <button onClick={() => setPhase("Ovulation")}>Ovulation</button>
        <button onClick={() => setPhase("Luteal")}>Luteal</button>
      </div>
      <h4>Current Phase: {phase}</h4>
      <p>{getDietRecommendation()}</p>
    </div>
  );
}

export default Nutrition;
