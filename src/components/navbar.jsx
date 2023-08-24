import { Link, useLocation } from "react-router-dom";

const navbarItems = [
  {
    path: "/",
    pathname: "/",
  },
  {
    path: "/Portfolio",
    pathname: "Portfolio",
  },
  {
    path: "/Contact",
    pathname: "Contact",
  },
  {
    path: "/Resume",
    pathname: "Resume",
  },
];

function Navbar() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav navbar">
      {navbarItems.map((navItem) => (
        <li key = {navItem.path}>
          <Link
            to={navItem.path}
            className={
              currentPage === navItem.path ? "nav-link active" : "nav-link"
            }
          >{navItem.pathname}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;