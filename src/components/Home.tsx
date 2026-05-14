const Home: React.FC = () => {
  return (
    <section className="hero-card glass-card" id="home">
      <div className="profile-glow">
        <img src="/finals-portfolio-project/profile.png" className="main-photo" />
      </div>

      <div className="hero-content">
        <p className="section-label">PORTFOLIO</p>
        <h1>
          Hi, I'm <span>Alyster</span>
        </h1>
        <h2>IT Student | Web Developer</h2>
        <p>
          I build responsive systems using React, TypeScript, Node.js, MongoDB,
          MySQL, and C#.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">View My Work</a>
          <a href="#contact" className="secondary-btn">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Home;