import PropTypes from "prop-types";

const FoodItem = ({ id, name, image, onClick }) => {
  return (
    <div
      key={id}
      className="relative border rounded-lg overflow-hidden shadow-md w-40 flex-shrink-0 mb-4"
      onClick={() => onClick()}
    >
      <img
        src={image}
        alt={image}
        className="w-full h-40 object-cover absolute inset-0 -z-10"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex items-center justify-center h-full p-4 relative z-10 text-center">
        <h3 className="text-xl font-bold text-white">{name}</h3>
      </div>
    </div>
  );
};

FoodItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default FoodItem;
