import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../../../../components/button";

const MealsDetail = () => {
  const { categoryName } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMealsByCategory = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
        );
        setMeals(response.data.meals);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMealsByCategory();
  }, [categoryName]);

  const handleMealClick = (mealId) => {
    navigate(`/detail/${mealId}`);
  };

  if (loading) return <p>Loading meals...</p>;
  if (error) return <p>Error fetching meals: {error.message}</p>;

  return (
    <div className="p-4 bg-gray-800 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-center text-white pt-16">
        {categoryName} Meals
      </h2>
      <BackButton />
      <div className="flex flex-wrap gap-4 justify-center">
        {meals?.map((meal) => (
          <div
            key={meal.idMeal}
            className="border rounded-lg overflow-hidden shadow-md w-40 flex-shrink-0"
            onClick={() => handleMealClick(meal.idMeal)}
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-40 object-cover"
            />
            <div className="p-2 text-center">
              <h3 className="text-lg font-bold text-white">{meal.strMeal}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealsDetail;
