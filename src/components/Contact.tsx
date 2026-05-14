import { useState } from "react";
import emailjs from "@emailjs/browser";

const API_URL = "https://finals-portfolio-project.onrender.com";

const Contact: React.FC = () => {
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
      const res = await fetch(`${API_URL}/contact`, {
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
    <section className="contact-section glass-card" id="contact">
      <p className="section-label">CONTACT ME</p>

      <h1>Let's Work Together</h1>

      <p className="contact-description">
        Interested in collaborating, building systems, or discussing a project?
        Feel free to send a message and I’ll respond as soon as possible.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-box">
            <h3>Email</h3>
            <p>20246896@s.ubaguio.edu</p>
          </div>

          <div className="contact-box">
            <h3>Location</h3>
            <p>Baguio City, Philippines</p>
          </div>

          <div className="contact-box">
            <h3>Specialization</h3>
            <p>Frontend, Backend, Database Systems</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
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
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;