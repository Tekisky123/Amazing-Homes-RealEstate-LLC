import '../assets/Styles/HeaderComponent.css';

const HeaderComponent = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-logo">LOGO</div>
        <div className="navbar-content">Home</div>
        <div className="navbar-content">contact</div>
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
