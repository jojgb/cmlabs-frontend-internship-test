import { Children } from "react";

const EachUtils = ({ array, render }) => {
  return Children.toArray(array.map((item, index) => render(item, index)));
};

export default EachUtils;
