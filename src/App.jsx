import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cycle from "./pages/Cycle/Cycle";
import Nutrition from "./pages/Nutrition/Nutrition";
import Exercise from "./pages/Exercise/Exercise";
import '../src/App.scss';

function App() {
  return (
      <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cycle" element={<Cycle />} />
                  <Route path="/nutrition" element={<Nutrition />} />
                  <Route path="/exercise" element={<Exercise />} />
                </Routes>
        </BrowserRouter>
  )
}

export default App;