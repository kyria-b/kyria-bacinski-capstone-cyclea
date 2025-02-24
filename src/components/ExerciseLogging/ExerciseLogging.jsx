import React, { useState, useEffect } from "react";
import axios from "axios";
import '../ExerciseLogging/ExerciseLogging.scss'

const API_KEY = import.meta.env.VITE_API_NINJAS_EXERCISES_KEY;

const WorkoutExercises = () => {
  const [exerciseQuery, setExerciseQuery] = useState("");
  const [exerciseResults, setExerciseResults] = useState([]);
  const [workoutLog, setWorkoutLog] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedLog = localStorage.getItem("workoutLog");
    if (savedLog) {
      setWorkoutLog(JSON.parse(savedLog));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("workoutLog", JSON.stringify(workoutLog));
  }, [workoutLog]);

  const handleSearchExercises = async (e) => {
    e.preventDefault();
    if (exerciseQuery.trim() === "") {
      alert("Please enter an exercise name.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/exercises?name=${exerciseQuery}`,
        {
          headers: { "X-Api-Key": API_KEY },
        }
      );
      setExerciseResults(response.data);
    } catch (error) {
      console.error("Error fetching exercises:", error.response || error);
      alert("Failed to fetch exercises. Please check your API key and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToWorkoutLog = (exercise, duration) => {
    if (workoutLog.some((item) => item.name === exercise.name)) {
      alert("Exercise already added to workout log.");
      return;
    }
    setWorkoutLog([...workoutLog, { ...exercise, duration }]);
  };

  const handleRemoveFromWorkoutLog = (exerciseName) => {
    setWorkoutLog(workoutLog.filter((item) => item.name !== exerciseName));
  };

  const totalDuration = workoutLog.reduce((sum, ex) => sum + ex.duration, 0);
  const uniqueExerciseTypes = [...new Set(workoutLog.map((ex) => ex.type))];
  const uniqueMusclesTargeted = [...new Set(workoutLog.map((ex) => ex.muscle))];

  return (
    <div className="exercise">
      <h1>Workout Exercises & Log</h1>
      <form onSubmit={handleSearchExercises} className="exercise__search">
        <input
          type="text"
          placeholder="Search for an exercise..."
          value={exerciseQuery}
          onChange={(e) => setExerciseQuery(e.target.value)}
          className="exercise__search--input"
        />
        <button type="submit" disabled={loading} className="exercise__search--button" >
          {loading ? "Loading..." : "Search"}
        </button>
      </form>

      <div className="search">
        <div className="search__container">
          <h2>Exercise Search Results</h2>
          {exerciseResults.length === 0 ? (
            <p>No exercises found.</p>
          ) : (
            <ul className="search__list">
              {exerciseResults.map((exercise, index) => (
                <li key={index} className="search__list--item">
                  <h3>{exercise.name}</h3>
                  <p><strong>Type:</strong> {exercise.type}</p>
                  <p><strong>Muscle:</strong> {exercise.muscle}</p>
                  <p><strong>Difficulty:</strong> {exercise.difficulty}</p>
                  <p><strong>Duration:</strong><input
                    type="number"
                    min="0"
                    placeholder="Mins"
                    onChange={(e) => (exercise.duration = parseInt(e.target.value, 10) || 0)}
                    className="search__list--duration"
                  /></p>
                  <button onClick={() => handleAddToWorkoutLog(exercise, exercise.duration)}>Add
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="workout">
          <h2>Workout Log</h2>
          {workoutLog.length === 0 ? (
            <p>No exercises added yet.</p>
          ) : (
            <ul className="search__list">
              {workoutLog.map((exercise, index) => (
                <li key={index} className="search__list--item">
                  <h3>{exercise.name}</h3>
                  <p><strong>Type:</strong> {exercise.type}</p>
                  <p><strong>Muscle:</strong> {exercise.muscle}</p>
                  <p><strong>Difficulty:</strong> {exercise.difficulty}</p>
                  <p><strong>Duration:</strong> {exercise.duration} min</p>
                  <button onClick={() => handleRemoveFromWorkoutLog(exercise.name)} className="workout__list--button">
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}

          <h3>Total Workout Stats</h3>
          <p><strong>Total Duration:</strong> {totalDuration} mins</p>
          <p><strong>Exercise Types:</strong> {uniqueExerciseTypes.join(", ") || "None"}</p>
          <p><strong>Muscles Targeted:</strong> {uniqueMusclesTargeted.join(", ") || "None"}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkoutExercises;
