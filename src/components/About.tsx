const About: React.FC = () => {
  const projects = [

    {
      image: "/finals-portfolio-project/project5.png",
      title: "UNIT1 LESSON1 A PESIMO",
      description:
        "A simple activity project created for practicing frontend fundamentals.",
      reflection:
        "This project helped me practice the basics of frontend coding and improve my confidence in writing cleaner code. I also became more familiar with organizing sections properly. It was a good starting point before working on bigger systems.",
      link: "https://ubsitpesimopmarkaaronalyster.github.io/UNIT1_LESSON1_A_PESIMO/",
    },

    {
      image: "/finals-portfolio-project/project6.png",
      title: "FG LAB2",
      description:
        "A laboratory activity project focused on frontend page design and structure.",
      reflection:
        "While making this project, I practiced spacing, alignment, and proper placement of content. I started paying more attention to how the overall design looks instead of just making it work. It helped improve my UI consistency.",
      link: "https://ubsitpesimopmarkaaronalyster.github.io/FG_LAB2/",
    },

    {
      image: "/finals-portfolio-project/project7.png",
      title: "FG LAB3",
      description:
        "A frontend laboratory activity project with improved layout and styling.",
      reflection:
        "Compared to my older projects, I think this one showed improvement in my frontend design skills. I became more comfortable experimenting with styling and organizing sections better. I also learned how small details can make the interface cleaner.",
      link: "https://ubsitpesimopmarkaaronalyster.github.io/FG_LAB3/",
    },

    {
      image: "/finals-portfolio-project/project1.png",
      title: "Club Dashboard Lab",
      description:
        "A student dashboard project with organized sections and navigation.",
      reflection:
        "This project helped me understand dashboard layouts and how to display information clearly. I also practiced making the interface easier to navigate. It improved my frontend structure and responsive design skills.",
      link: "https://ubsitpesimopmarkaaronalyster.github.io/club-dashboard-lab/",
    },

    {
      image: "/finals-portfolio-project/project3.png",
      title: "MG LAB4 PESIMO",
      description:
        "An event registration dashboard project for handling submitted information.",
      reflection:
        "I learned how to organize cards, forms, and submitted content properly in this project. I also became more comfortable creating layouts with multiple sections. This project improved my confidence in building dashboard-style pages.",
      link: "https://ubsitpesimopmarkaaronalyster.github.io/MG_LAB4_PESIMO/",
    },

    {
      image: "/finals-portfolio-project/project8.png",
      title: "MG LAB5 PESIMO",
      description:
        "A frontend activity project focused on improving page layout and responsiveness.",
      reflection:
        "This project challenged me to improve the responsiveness of my design and make the layout cleaner on different screen sizes. I also practiced organizing my code better. It helped me become more patient with debugging frontend issues.",
      link: "https://ubsitpesimopmarkaaronalyster.github.io/MG_LAB5_PESIMO/",
    },

    {
      image: "/finals-portfolio-project/project4.png",
      title: "PESIMO MG LAB3",
      description:
        "A library book request system with organized form handling and layout.",
      reflection:
        "This project gave me more experience working with forms and handling user input properly. I also practiced improving the visual layout so the page would look cleaner and easier to use. It improved my attention to detail.",
      link: "https://ubsitpesimopmarkaaronalyster.github.io/PESIMO_MG_LAB3/",
    },

    {
      image: "/finals-portfolio-project/project2.png",
      title: "Student Portal",
      description:
        "A university-style portal system for student requests and feedback.",
      reflection:
        "I enjoyed building this project because it made me think more about user experience and navigation. I also learned how important consistency is in frontend design. This project helped improve my UI planning skills.",
      link: "https://ubsitpesimopmarkaaronalyster.github.io/STUDENT_PORTAL/",
    },
  ];

  return (
    <>
      <section className="grid-section" id="about">
        <div className="glass-card skill-card">
          <p className="section-label">MY SKILLS</p>

          <h1>Learning to Build Real Systems</h1>

          <p>
            I focus on creating functional web applications with clean UI,
            backend API support, database integration, and responsive layouts.
          </p>

          <div className="skill-list">
            <div>
              <span>React TypeScript</span>
              <div className="bar">
                <div style={{ width: "90%" }}></div>
              </div>
            </div>

            <div>
              <span>Node.js API</span>
              <div className="bar">
                <div style={{ width: "82%" }}></div>
              </div>
            </div>

            <div>
              <span>MongoDB / MySQL</span>
              <div className="bar">
                <div style={{ width: "85%" }}></div>
              </div>
            </div>

            <div>
              <span>C# ASP.NET</span>
              <div className="bar">
                <div style={{ width: "75%" }}></div>
              </div>
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
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} />

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-reflection">
                <strong>Reflection:</strong>
                <p>{project.reflection}</p>
              </div>

              <a href={project.link} target="_blank">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;