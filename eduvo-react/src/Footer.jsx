import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <Link to="/" className="logo logo--footer">
            <span className="logo-badge">🦁</span> Eduvo
          </Link>
          <p>
            A joyful, play-based early years school in Accra, Ghana — nurturing
            curious, confident learners since 2014.
          </p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            <li>
              <Link to="/teachers">Teachers</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact Details</h3>
          <ul className="footer-links">
            <li>East Legon, Accra, Ghana</li>
            <li>
              <a href="tel:+233240000000">+233 24 000 0000</a>
            </li>
            <li>
              <a href="mailto:hello@eduvo.edu.gh">hello@eduvo.edu.gh</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Eduvo Learning Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
