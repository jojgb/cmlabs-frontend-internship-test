import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import MealsDetail from "./pages/homepage/Food/MealsDetail";
import SingleMealDetail from "./pages/homepage/Food/MealsDetail/SingleMealDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meals/:categoryName" element={<MealsDetail />} />
        <Route path="/detail/:mealId" element={<SingleMealDetail />} />{" "}
        {/* Rute baru */}
      </Routes>
    </Router>
  );
}

export default App;
