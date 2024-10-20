import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../../../../../components/button";
import Skeleton from "../../../../../components/skeleton";

const SingleMealDetail = () => {
  const { mealId } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        setMeal(response.data.meals[0]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMealDetails();
  }, [mealId]);

  if (loading) return <p>Loading meal details...</p>;
  if (error) return <p>Error fetching meal details: {error.message}</p>;

  if (!meal) return <p>No meal found.</p>;

  // Ubah URL YouTube menjadi format embed
  const youtubeUrl = meal.strYoutube
    ? meal.strYoutube.replace("watch?v=", "embed/")
    : null;

  return (
    <div className="p-4 bg-gray-800 min-h-screen text-white pt-16">
      <BackButton />
      <h2 className="text-3xl font-bold mb-4 text-center">{meal.strMeal}</h2>
      {loading ? (
        <div>
          {/* Skeleton placeholders while loading */}
          <Skeleton width="60%" height="32px" className="mb-4" />
          <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
            <Skeleton width="100%" height="300px" className="md:w-1/2 mb-4" />
            <div className="md:w-1/2">
              <Skeleton width="100%" height="20px" className="mb-2" />
              <Skeleton width="80%" height="20px" className="mb-2" />
              <Skeleton width="100%" height="200px" className="mb-4" />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
          {/* Gambar di sebelah kiri, sejajar di tengah secara vertikal */}
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full max-w-md md:w-1/2 object-cover mb-4 md:mb-0"
          />
          {/* Deskripsi di sebelah kanan */}
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              <strong>Category:</strong> {meal.strCategory}
            </p>
            <p className="text-lg mb-4">
              <strong>Area:</strong> {meal.strArea}
            </p>
            <p className="text-lg mb-4">
              <strong>Instructions:</strong> {meal.strInstructions}
            </p>

            {youtubeUrl && (
              <div className="mt-4">
                <h3 className="text-lg font-bold mb-2">Watch Video</h3>
                <iframe
                  width="100%"
                  height="315"
                  src={youtubeUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleMealDetail;
