import { useState, useEffect } from 'react';
import '../assets/Styles/HeaderComponent.css';
import logo from "../assets/Images/logo.png";

const HeaderComponent = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header  ${isScrollingDown ? 'hidden' : ''}`}>
      <nav className="navbar ">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-text">Amazing-Homes-RealEstate-LLC</div>
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
