import NavItem from "./navitem";

const Navbar = () => {
  return (
    <nav className="bg-slate-200 p-4 fixed top-0 left-0 w-full z-50">
      <ul className="flex justify-between items-center w-full">
        <NavItem label="Selera Sejati" href="/" />
        <div className="flex space-x-4">
          <NavItem label="Home" href="/" />
          <NavItem label="Foods" href="/about" />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
