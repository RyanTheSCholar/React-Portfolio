import { useLocation, Link } from "react-router-dom";
// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/individual";
import BusinessLogo from "../assets/BusinessLogo1.png";
// import backgroundIMG from "../assets/backgroundIMGPortfolio.jpg"

const navbarItems = [
  {
    path: "/",
    pathname: "About",
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

function Navtab() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar-expand-lg">
      <div className="navbarContainer container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <img className="rotate-center" src={BusinessLogo} alt="Logo" id="logo" />
      <ul className="nav navbar">
        {navbarItems.map((navItem) => (
          <li id="items" key={navItem.path}>
            <Link
              to={navItem.path}
              className={
                currentPage === navItem.path ? "nav-link active" : "nav-link"
              }
            >
              {navItem.pathname}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </nav>
    
  );
}

export default Navtab;
