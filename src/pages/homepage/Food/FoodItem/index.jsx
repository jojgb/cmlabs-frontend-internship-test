import PropTypes from "prop-types";

const FoodItem = ({ id, name, image }) => {
  return (
    <div
      key={id}
      className="relative border rounded-lg overflow-hidden shadow-md w-40 flex-shrink-0 mb-4"
    >
      <img
        src={image}
        alt={image}
        className="w-full h-40 object-cover absolute inset-0 -z-10"
      />
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
};
export default FoodItem;
