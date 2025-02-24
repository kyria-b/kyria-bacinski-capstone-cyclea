import React, { useState } from "react";
import "../Exercise/Exercise.scss";

function Exercise() {
  const [phase, setPhase] = useState("");

  const getExerciseRecommendation = () => {
    switch (phase) {
      case "Menstruation":
        return "Low-impact exercises like yoga, walking, or swimming!";
      case "Follicular":
        return "High-intensity workouts like strength training or cycling!";
      case "Ovulation":
        return "Moderate-intensity workouts like swimming or trail running/walking!";
      case "Luteal":
        return "Low-intensity exercises like Pilates or treadmill jogging!";
      default:
        return "Please select a phase to get recommendations.";
    }
  };

  return (
    <div className="exercise__recommendations">
      <h3>Exercise Recommendations</h3>
      
      {/* Phase buttons */}
      <div className="exercise__buttons">
        <button onClick={() => setPhase("Menstruation")}>Menstruation</button>
        <button onClick={() => setPhase("Follicular")}>Follicular</button>
        <button onClick={() => setPhase("Ovulation")}>Ovulation</button>
        <button onClick={() => setPhase("Luteal")}>Luteal</button>
      </div>

      <h4>Current Phase: {phase}</h4>
      <p>{getExerciseRecommendation()}</p>
    </div>
  );
}

export default Exercise;
