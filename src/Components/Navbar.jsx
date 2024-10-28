import { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { RiSendPlaneLine, RiMenuLine } from "react-icons/ri";
import navbarData from "../Common/navbarData.json";
import "../assets/Styles/Navbar.css";
import { SiHomeadvisor } from "react-icons/si";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { IoMdClose, IoMdContacts } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("#home"); // State for tracking active tab

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleTabClick = (href) => {
    setActiveTab(href);
    setIsMenuOpen(false); // Close sidebar if a link is clicked
  };

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <button className="nav__hamburger-icon" onClick={toggleMenu}>
            <RiMenuLine />
          </button>
        </li>
        <li>
          <Link
            to="/contact"
            className={`nav__link ${
              activeTab === "/contact" ? "active-link" : ""
            }`}
            onClick={() => handleTabClick("/contact")}
          >
            <IoMdContacts />
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={`nav__link ${activeTab === "/" ? "" : ""}`}
            onClick={() => handleTabClick("/")}
          >
            <button
              className={`nav__expand ${
                activeTab === "/" ? "active-link-home" : ""
              }`}
              id="nav-expand"
            >
              <SiHomeadvisor
                className="nav__expand-icon"
                id="nav-expand-icon"
              />
            </button>
          </Link>
        </li>

        <li>
          <Link
            to="/projects"
            className={`nav__link ${
              activeTab === "#projects" ? "active-link" : ""
            }`}
            onClick={() => handleTabClick("#projects")}
          >
            <PiBuildingApartmentFill />
          </Link>
        </li>
        <li>
          <Link
            to="/search"
            className={`nav__link ${
              activeTab === "#contact" ? "active-link" : ""
            }`}
            onClick={() => handleTabClick("#contact")}
          >
            <FaSearchLocation />
          </Link>
        </li>
      </ul>

      <aside className={`sidebar ${isMenuOpen ? "show-sidebar" : ""}`}>
        <button className="sidebar__close" onClick={toggleMenu}>
          <IoMdClose />
        </button>
        <ul className="sidebar__list">
          {navbarData.navbarLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`sidebar__link ${
                  activeTab === link.href ? "active-link" : ""
                }`}
                onClick={() => handleTabClick(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
