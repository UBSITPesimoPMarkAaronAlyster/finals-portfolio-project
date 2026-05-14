import { useEffect, useState } from "react";

const API_URL = "https://finals-portfolio-project.onrender.com";

const AdminDashboard: React.FC = () => {
  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(() => {
    if (localStorage.getItem("adminLogin") !== "true") {
      window.location.href = "/finals-portfolio-project/admin-login";
    } else {
      loadContacts();
    }
  }, []);

  const loadContacts = async () => {
    try {
      const res = await fetch(`${API_URL}/contacts`);

      const data = await res.json();

      setContacts(data);
    } catch (error) {
      console.error(error);
      alert("Error loading contacts.");
    }
  };

  const handleUpdate = async (id: string) => {
    try {
      const res = await fetch(`${API_URL}/contacts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "Read",
        }),
      });

      const data = await res.json();

      alert(data.message);

      loadContacts();
    } catch (error) {
      console.error(error);
      alert("Error updating message.");
    }
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const res = await fetch(`${API_URL}/contacts/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      alert(data.message);

      loadContacts();
    } catch (error) {
      console.error(error);
      alert("Error deleting message.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminLogin");
    window.location.href = "/finals-portfolio-project/admin-login";
  };

  return (
    <div className="dashboard-page glass-card">
      <div className="dashboard-header">
        <div>
          <p className="section-label">SECRET WEBSITE</p>
          <h1>Admin Dashboard</h1>
        </div>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="dashboard-subtitle">
        Employer messages received from your portfolio website.
      </div>

      {contacts.length === 0 ? (
        <div className="empty-message">
          No messages yet.
        </div>
      ) : (
        contacts.map((contact, index) => (
          <div key={index} className="message-card">
            <div className="message-top">
              <h2>{contact.employerName}</h2>

              <span className={contact.status === "Read" ? "status-read" : "status-unread"}>
                {contact.status}
              </span>
            </div>

            <div className="message-info">
              <p>
                <strong>Email:</strong> {contact.email}
              </p>

              <p>
                <strong>Company:</strong> {contact.company}
              </p>

              <p>
                <strong>Date:</strong>{" "}
                {new Date(contact.date).toLocaleString()}
              </p>
            </div>

            <div className="message-body">
              {contact.message}
            </div>

            <div className="dashboard-buttons">
              <button onClick={() => handleUpdate(contact._id)}>
                Mark as Read
              </button>

              <button
                onClick={() => handleDelete(contact._id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminDashboard;