const About: React.FC = () => {
  return (
    <>
      <section className="grid-section" id="about">
        <div className="glass-card skill-card">
          <p className="section-label">MY SKILLS</p>
          <h1>Learning to Build Real Systems</h1>
          <p>
            I focus on creating functional web applications with clean UI,
            database integration, and backend API support.
          </p>

          <div className="skill-list">
            <div>
              <span>React TypeScript</span>
              <div className="bar"><div style={{ width: "90%" }}></div></div>
            </div>

            <div>
              <span>Node.js API</span>
              <div className="bar"><div style={{ width: "82%" }}></div></div>
            </div>

            <div>
              <span>MongoDB / MySQL</span>
              <div className="bar"><div style={{ width: "85%" }}></div></div>
            </div>

            <div>
              <span>C# ASP.NET</span>
              <div className="bar"><div style={{ width: "75%" }}></div></div>
            </div>
          </div>
        </div>

        <div className="glass-card image-card">
          <img src="/finals-portfolio-project/project2.png" />
        </div>
      </section>

      <section className="projects-section glass-card" id="projects">
        <p className="section-label">MY PORTFOLIO</p>
        <h1>Featured Projects</h1>

        <div className="project-gallery">
          <div className="project-card">
            <img src="/finals-portfolio-project/project1.png" />
            <h3>Student Information Portal</h3>
            <p>A student directory and activities portal.</p>
            <a href="https://ubsitpesimopmarkaaronalyster.github.io/club-dashboard-lab/" target="_blank">
              View Project
            </a>
          </div>

          <div className="project-card">
            <img src="/finals-portfolio-project/project2.png" />
            <h3>Student Portal System</h3>
            <p>A university portal for requests and feedback.</p>
            <a href="https://ubsitpesimopmarkaaronalyster.github.io/STUDENT_PORTAL/" target="_blank">
              View Project
            </a>
          </div>

          <div className="project-card">
            <img src="/finals-portfolio-project/project3.png" />
            <h3>Event Registration Dashboard</h3>
            <p>A system for managing campus event registrations.</p>
            <a href="https://ubsitpesimopmarkaaronalyster.github.io/MG_LAB4_PESIMO/" target="_blank">
              View Project
            </a>
          </div>

          <div className="project-card">
            <img src="/finals-portfolio-project/project4.png" />
            <h3>Library Book Request System</h3>
            <p>A form system for student book requests.</p>
            <a href="https://ubsitpesimopmarkaaronalyster.github.io/PESIMO_MG_LAB3/" target="_blank">
              View Project
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;