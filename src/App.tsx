import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="portfolio-page">
            <Navbar />
            <main>
              <Home />
              <About />
              <Contact />
            </main>

            <footer>
              <h2>ALYSTER PORTFOLIO</h2>
              <p>
                Built with React, TypeScript, Node.js, MongoDB, Render, and
                EmailJS
              </p>
            </footer>
          </div>
        }
      />

      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;