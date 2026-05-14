const Navbar: React.FC = () => {
  return (
    <header className="top-navbar glass-card">
      <div className="nav-logo">
        MARK AARON ALYSTER PESIMO
      </div>

      <nav className="nav-links">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </header>
  );
};

export default Navbar;