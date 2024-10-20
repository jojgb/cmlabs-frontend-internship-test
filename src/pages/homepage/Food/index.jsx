import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { FOOD_API } from "../../../constant/apiConstant";
import EachUtils from "../../../utils/EachUtil";
import { useNavigate } from "react-router-dom";
import FoodItem from "./FoodItem";

const Food = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchFood = useCallback(async () => {
    try {
      const response = await axios.get(FOOD_API);
      setCategories(response.data.categories);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleCategoryClick = (categoryName) => {
    // Navigasi ke halaman meal detail dengan nama kategori
    navigate(`/meals/${categoryName}`);
  };

  useEffect(() => {
    fetchFood();
  }, [fetchFood]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching categories: {error.message}</p>;

  return (
    <div>
      <h2 className="text-center text-2xl font-bold pt-16">
        Menu Selera Sejati
      </h2>
      <div className="flex flex-wrap gap-4 p-4">
        <EachUtils
          array={categories}
          render={(item) => {
            return (
              <FoodItem
                id={item.idCategory}
                name={item.strCategory}
                image={item.strCategoryThumb}
                onClick={() => handleCategoryClick(item.strCategory)}
              />
            );
          }}
        />
      </div>
    </div>
  );
};

export default Food;
