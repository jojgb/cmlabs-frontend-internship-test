import PropTypes from "prop-types";

const NavItem = ({ label, href }) => {
  return (
    <li>
      <a href={href} className="text-black">
        {label}
      </a>
    </li>
  );
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavItem;
