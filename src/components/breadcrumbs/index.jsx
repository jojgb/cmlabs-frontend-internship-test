import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="bg-gray-200 p-3 rounded mb-4">
      <ol className="list-reset flex">
        <li>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          // Menampilkan setiap segmen path, dengan link ke setiap level breadcrumb
          return (
            <li key={to}>
              <span className="mx-2">/</span>
              {index === pathnames.length - 1 ? (
                <span className="text-gray-500">{value}</span> // Breadcrumb terakhir tanpa link
              ) : (
                <Link to={to} className="text-blue-600 hover:text-blue-800">
                  {value}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
