import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { FOOD_API } from "../../../constant/apiConstant";
import EachUtils from "../../../utils/EachUtil";
import FoodItem from "./FoodItem";

const Food = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFood = useCallback(async () => {
    try {
      const response = await axios.get(FOOD_API);
      console.log({ response });
      setCategories(response.data.categories);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFood();
  }, [fetchFood]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching categories: {error.message}</p>;

  return (
    <div>
      <h2 className="text-center text-2xl font-bold pt-16">Menu Selera Kita</h2>
      <div className="flex flex-wrap gap-4 p-4">
        <EachUtils
          array={categories}
          render={(item) => {
            return (
              <FoodItem
                id={item.idCategory}
                name={item.strCategory}
                image={item.strCategoryThumb}
              />
            );
          }}
        />
      </div>
    </div>
  );
};

export default Food;
