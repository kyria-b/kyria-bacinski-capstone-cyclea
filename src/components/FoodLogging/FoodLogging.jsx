import React, { useState, useEffect } from "react";
import axios from "axios";

// Ensure API key is correctly stored in environment variables (Vite)
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

const FoodLogging = () => {
  const [foodQuery, setFoodQuery] = useState("");
  const [foodResults, setFoodResults] = useState([]);
  const [mealLog, setMealLog] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load saved meal log from localStorage on mount
  useEffect(() => {
    const savedLog = localStorage.getItem("mealLog");
    if (savedLog) {
      setMealLog(JSON.parse(savedLog));
    }
  }, []);

  // Save meal log to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("mealLog", JSON.stringify(mealLog));
  }, [mealLog]);

  // Helper function to extract summary nutrients (calories, carbs, fat, protein)
  const getSummaryNutrients = (nutrients = []) => {
    const summary = {
      calories: null,
      carbs: null,
      fat: null,
      protein: null,
    };

    nutrients.forEach((nutrient) => {
      const nameLower = nutrient.name.toLowerCase();
      if (nameLower.includes("calories")) {
        summary.calories = `${nutrient.amount} ${nutrient.unit}`;
      } else if (nameLower.includes("carbohydrate")) {
        summary.carbs = `${nutrient.amount} ${nutrient.unit}`;
      } else if (nameLower.includes("fat")) {
        summary.fat = `${nutrient.amount} ${nutrient.unit}`;
      } else if (nameLower.includes("protein")) {
        summary.protein = `${nutrient.amount} ${nutrient.unit}`;
      }
    });
    return summary;
  };

  // Function to calculate total nutrients for all items in mealLog
  const calculateTotals = () => {
    const totals = {
      calories: 0,
      carbs: 0,
      fat: 0,
      protein: 0,
    };

    mealLog.forEach((food) => {
      if (food.nutrition) {
        food.nutrition.forEach((nutrient) => {
          const nameLower = nutrient.name.toLowerCase();
          if (nameLower.includes("calories")) {
            totals.calories += nutrient.amount;
          } else if (nameLower.includes("carbohydrate")) {
            totals.carbs += nutrient.amount;
          } else if (nameLower.includes("fat")) {
            totals.fat += nutrient.amount;
          } else if (nameLower.includes("protein")) {
            totals.protein += nutrient.amount;
          }
        });
      }
    });
    return totals;
  };

  // Fetch detailed ingredient information (nutrition data) by ingredient ID
  const fetchIngredientDetails = async (ingredientId) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/food/ingredients/${ingredientId}/information`,
        {
          params: {
            amount: 100, // Nutrition info for 100 grams
            unit: "grams",
            apiKey: API_KEY,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching ingredient details:", error);
      return null;
    }
  };

  // Handle food search
  const handleSearchFood = async (e) => {
    e.preventDefault();

    if (foodQuery.trim() === "") {
      alert("Please enter a food name!");
      return;
    }

    setLoading(true);
    try {
      // Step 1: Search for ingredient by name
      const searchUrl = `https://api.spoonacular.com/food/ingredients/search?query=${foodQuery}&number=5&sort=calories&sortDirection=asc&apiKey=${API_KEY}`;
      const searchResponse = await axios.get(searchUrl);

      if (searchResponse.data.results.length === 0) {
        alert("No results found!");
        setFoodResults([]);
        return;
      }

      // Step 2: Fetch detailed nutrition for each ingredient
      const resultsWithDetails = await Promise.all(
        searchResponse.data.results.map(async (food) => {
          const details = await fetchIngredientDetails(food.id);
          return {
            ...food,
            nutrition: details ? details.nutrition.nutrients : [],
          };
        })
      );

      setFoodResults(resultsWithDetails);
    } catch (error) {
      console.error("Error fetching food data:", error.response || error);
      alert("Failed to fetch food data. Please check your API key and try again.");
    } finally {
      setLoading(false);
    }
  };

  // Save a food item to the meal log
  const handleSaveFood = (foodItem) => {
    if (mealLog.some((item) => item.id === foodItem.id)) {
      alert("Food item already saved to the meal log.");
      return;
    }
    setMealLog([...mealLog, foodItem]);
  };

  // Remove a food item from the meal log
  const handleRemoveFood = (foodId) => {
    setMealLog(mealLog.filter((item) => item.id !== foodId));
  };

  // Calculate totals for meal log
  const totals = calculateTotals();

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Food Logging</h1>
      <form onSubmit={handleSearchFood} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search for a food..."
          value={foodQuery}
          onChange={(e) => setFoodQuery(e.target.value)}
          style={{ padding: "0.5rem", width: "250px" }}
        />
        <button type="submit" disabled={loading} style={{ padding: "0.5rem", marginLeft: "0.5rem" }}>
          {loading ? "Loading..." : "Search"}
        </button>
      </form>

      <div style={{ display: "flex", gap: "2rem" }}>
        {/* Left column: Search Results */}
        <div style={{ flex: 1 }}>
          <h2>Search Results</h2>
          {foodResults.length === 0 && <p>No search results yet.</p>}
          <ul style={{ listStyle: "none", padding: 0 }}>
            {foodResults.map((food) => {
              const summary = getSummaryNutrients(food.nutrition);
              return (
                <li key={food.id} style={{ border: "1px solid #ccc", marginBottom: "1rem", padding: "0.5rem" }}>
                  <h3>{food.name}</h3>
                  <img
                    src={`https://spoonacular.com/cdn/ingredients_100x100/${food.image}`}
                    alt={food.name}
                    style={{ marginBottom: "0.5rem" }}
                  />
                  <div>
                    <p><strong>Calories:</strong> {summary.calories || "N/A"}</p>
                    <p><strong>Carbs:</strong> {summary.carbs || "N/A"}</p>
                    <p><strong>Fat:</strong> {summary.fat || "N/A"}</p>
                    <p><strong>Protein:</strong> {summary.protein || "N/A"}</p>
                  </div>
                  <button onClick={() => handleSaveFood(food)} style={{ marginTop: "0.5rem" }}>
                    Save to Meal Log
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right column: Meal Log */}
        <div style={{ flex: 1 }}>
          <h2>Meal Log</h2>
          {mealLog.length === 0 && <p>No items saved yet.</p>}
          <ul style={{ listStyle: "none", padding: 0 }}>
            {mealLog.map((food) => {
              const summary = getSummaryNutrients(food.nutrition);
              return (
                <li key={food.id} style={{ border: "1px solid #ccc", marginBottom: "1rem", padding: "0.5rem" }}>
                  <h3>{food.name}</h3>
                  <img
                    src={`https://spoonacular.com/cdn/ingredients_100x100/${food.image}`}
                    alt={food.name}
                    style={{ marginBottom: "0.5rem" }}
                  />
                  <div>
                    <p><strong>Calories:</strong> {summary.calories || "N/A"}</p>
                    <p><strong>Carbs:</strong> {summary.carbs || "N/A"}</p>
                    <p><strong>Fat:</strong> {summary.fat || "N/A"}</p>
                    <p><strong>Protein:</strong> {summary.protein || "N/A"}</p>
                  </div>
                  <button onClick={() => handleRemoveFood(food.id)} style={{ marginTop: "0.5rem" }}>
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
          {/* Total Nutrients Section */}
          {mealLog.length > 0 && (
            <div style={{ borderTop: "2px solid #000", paddingTop: "1rem" }}>
              <h2>Total Nutrients</h2>
              <p><strong>Total Calories:</strong> {totals.calories.toFixed(2)} kcal</p>
              <p><strong>Total Carbs:</strong> {totals.carbs.toFixed(2)} g</p>
              <p><strong>Total Fat:</strong> {totals.fat.toFixed(2)} g</p>
              <p><strong>Total Protein:</strong> {totals.protein.toFixed(2)} g</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodLogging;
