import { useEffect } from 'react';
import { RiHomeSmile2Line, RiUserLine, RiAddLine, RiImage2Line, RiArchiveLine, RiBookmark3Line, RiBriefcaseLine, RiSendPlaneLine } from 'react-icons/ri'; // Importing specific icons
import "../assets/Styles/Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const navExpand = document.getElementById('nav-expand');
    const navExpandList = document.getElementById('nav-expand-list');
    const navExpandIcon = document.getElementById('nav-expand-icon');

    const handleExpandClick = () => {
      // Expand list
      navExpandList.classList.toggle('show-list');

      // Rotate icon
      navExpandIcon.classList.toggle('rotate-icon');
    };

    navExpand.addEventListener('click', handleExpandClick);

    // Clean up event listener on component unmount
    return () => {
      navExpand.removeEventListener('click', handleExpandClick);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
      const scrollDown = window.scrollY;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
          sectionsClass.classList.add('active-link');
        } else {
          sectionsClass.classList.remove('active-link');
        }
      });
    };

    window.addEventListener('scroll', scrollActive);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', scrollActive);
    };
  }, []);

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <a href="#home" className="nav__link active-link">
            <RiHomeSmile2Line />
          </a>
        </li>

        <li>
          <a href="#about" className="nav__link">
            <RiUserLine />
          </a>
        </li>

        {/* Expand list */}
        <li>
          <button className="nav__expand" id="nav-expand">
            <RiAddLine className="nav__expand-icon" id="nav-expand-icon" />
          </button>

          <ul className="nav__expand-list" id="nav-expand-list">
            <li>
              <a href="#" className="nav__expand-link">
                <RiImage2Line />
                <span>Gallery</span>
              </a>
            </li>

            <li>
              <a href="#" className="nav__expand-link">
                <RiArchiveLine />
                <span>Files</span>
              </a>
            </li>

            <li>
              <a href="#" className="nav__expand-link">
                <RiBookmark3Line />
                <span>Saved</span>
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#projects" className="nav__link">
            <RiBriefcaseLine />
          </a>
        </li>

        <li>
          <a href="#contact" className="nav__link">
            <RiSendPlaneLine />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
