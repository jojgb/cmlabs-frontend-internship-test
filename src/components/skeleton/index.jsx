// eslint-disable-next-line react/prop-types
const Skeleton = ({ width = "100%", height = "20px", className = "" }) => {
  return (
    <div
      className={`animate-pulse bg-gray-300 ${className}`}
      style={{ width, height }}
    ></div>
  );
};

export default Skeleton;
