import NavItem from "./navitem";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 fixed top-0 left-0 w-full z-50">
      <ul className="flex space-x-4 justify-center">
        <NavItem label="Home" href="/" />
        <NavItem label="Foods" href="/about" />
        <NavItem label="Ingredients" href="/contact" />
      </ul>
    </nav>
  );
};

export default Navbar;
