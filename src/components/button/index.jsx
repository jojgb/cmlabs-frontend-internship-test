import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate(); // Hook untuk navigasi
  return (
    <button
      onClick={() => navigate(-1)}
      className="mb-4 bg-transparent hover:bg-transparent text-white px-4 py-2 rounded flex items-center"
    >
      <span className="mr-2 text-lg">←</span>
    </button>
  );
};

export default BackButton;
