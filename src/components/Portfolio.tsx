import { useState } from "react";
import emailjs from "@emailjs/browser";

const Portfolio: React.FC = () => {
  const [formData, setFormData] = useState({
    employerName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Error saving message");
        return;
      }

      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          employer_name: formData.employerName,
          employer_email: formData.email,
          company: formData.company,
          message: formData.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      alert("Message sent successfully.");

      setFormData({
        employerName: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error sending message");
    }
  };

  return (
    <div className="portfolio-page">
      <header className="top-header navbar navbar-expand-lg">
        <h2 className="logo">ALYSTER'S PORTFOLIO</h2>

        <nav className="navbar-nav d-flex flex-row gap-4">
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <section className="hero-section" id="about">
        <div className="hero-images">
          <div className="profile-frame">
            <img
              src="/finals-portfolio-project/profile.png"
              className="main-photo"
            />
          </div>
        </div>

        <div className="hero-text">
          <p className="section-label">ABOUT ME</p>

          <h1>Hi! My name is Alyster Pesimo, I’m an IT student.</h1>

          <div className="line"></div>

          <p>I build systems using React, Node.js, MongoDB, MySQL and C#.</p>
        </div>
      </section>

      <section className="skills-project-section" id="skills">
        <div className="skills-left">
          <p className="section-label">MY SKILLS</p>

          <h1>Learning to Build Real Systems</h1>

          <div className="line"></div>

          <div className="skill-grid">
            <div className="skill-box">
              <h3>Frontend</h3>
              <p>React TypeScript HTML CSS</p>
            </div>

            <div className="skill-box">
              <h3>Backend</h3>
              <p>Node, APIs</p>
            </div>

            <div className="skill-box">
              <h3>Database</h3>
              <p>MongoDB MySQL</p>
            </div>

            <div className="skill-box">
              <h3>Programming</h3>
              <p>C# ASP.NET CRUD</p>
            </div>
          </div>
        </div>

        <div className="skills-images">
          <img
            src="/finals-portfolio-project/project2.png"
            className="wide-photo"
          />
          <img
            src="/finals-portfolio-project/project3.png"
            className="floating-photo"
          />
        </div>
      </section>

      <section className="projects-section" id="projects">
        <p className="section-label">ACHIEVEMENTS</p>

        <h1>My Projects</h1>

        <div className="project-gallery row g-4">
          <div className="project-card col-lg-3 col-md-6 col-sm-12">
            <img src="/finals-portfolio-project/project1.png" />
            <h3>Student Information Portal</h3>
            <p>A student directory and activities portal.</p>
            <a
              href="https://ubsitpesimopmarkaaronalyster.github.io/club-dashboard-lab/"
              target="_blank"
            >
              View GitHub
            </a>
          </div>

          <div className="project-card col-lg-3 col-md-6 col-sm-12">
            <img src="/finals-portfolio-project/project2.png" />
            <h3>Student Portal System</h3>
            <p>A university portal for requests and feedback.</p>
            <a
              href="https://ubsitpesimopmarkaaronalyster.github.io/STUDENT_PORTAL/"
              target="_blank"
            >
              View GitHub
            </a>
          </div>

          <div className="project-card col-lg-3 col-md-6 col-sm-12">
            <img src="/finals-portfolio-project/project3.png" />
            <h3>Event Registration Dashboard</h3>
            <p>A system for managing campus event registrations.</p>
            <a
              href="https://ubsitpesimopmarkaaronalyster.github.io/MG_LAB4_PESIMO/"
              target="_blank"
            >
              View GitHub
            </a>
          </div>

          <div className="project-card col-lg-3 col-md-6 col-sm-12">
            <img src="/finals-portfolio-project/project4.png" />
            <h3>Library Book Request System</h3>
            <p>A form system for student book requests.</p>
            <a
              href="https://ubsitpesimopmarkaaronalyster.github.io/PESIMO_MG_LAB3/"
              target="_blank"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-label">CONTACT ME</p>

        <h1>Let's Work Together</h1>

        <form onSubmit={handleSubmit} className="contact-form container">
          <input
            type="text"
            name="employerName"
            placeholder="Employer Name"
            value={formData.employerName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Employer Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn btn-outline-light">
            Send Message
          </button>
        </form>
      </section>

      <footer>
        <h2>ALYSTER PORTFOLIO</h2>
        <p>Home / About / Projects / Contact</p>
      </footer>
    </div>
  );
};

export default Portfolio;