import { Link } from "react-router-dom";
import { FaSearch, FaPaperPlane, FaBriefcase } from "react-icons/fa";
import BG from "../assets/BG.png";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">


<header className="landing-header">
  <div className="header-left">
    <h1>Job Listing Portal</h1>
  </div>
  <nav className="header-right">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

      <section id="home" className="hero-section">
        <img src={BG} alt="Background" className="hero-bg" />
        <div className="landing-card">
          <h1 className="landing-title">Job Listing Portal</h1>
          <p className="landing-subtitle">
            Find the best jobs. Hire the best talent. Your career starts here.
          </p>

          <div className="landing-buttons">
            <Link to="/login">
              <button className="primary-btn">Login</button>
            </Link>
            <Link to="/register">
              <button className="secondary-btn">Register</button>
            </Link>
          </div>

          <div className="features-card">
            <div className="feature">
              <FaSearch size={24} />
              <span className="feature-title">Search Jobs</span>
              <p className="feature-desc">Browse thousands of opportunities.</p>
            </div>
            <div className="feature">
              <FaPaperPlane size={24} />
              <span className="feature-title">Easy Apply</span>
              <p className="feature-desc">Apply in just one click.</p>
            </div>
            <div className="feature">
              <FaBriefcase size={24} />
              <span className="feature-title">Get Hired</span>
              <p className="feature-desc">Connect with top companies.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
  <h2>About Job Portal</h2>

  <p>
    Welcome to our Job Listing Portal! This platform was created by our team 
    to simplify the process of finding the right job and connecting talented 
    professionals with top companies. We believe in making job searching 
    faster, easier, and more efficient for everyone.
  </p>

  <p>
    Features of our portal include job search, easy one-click applications, 
    and tools to help employers find the perfect candidate. Whether you are 
    a job seeker or an employer, our portal ensures a smooth experience.
  </p>

  <p>
    Our mission is to bridge the gap between talent and opportunity by 
    providing a user-friendly interface and innovative features that make 
    recruitment simple and effective.
  </p>

  <h3>Our Team</h3>
  <div className="team-members">
    <div className="member">Kavya Patel</div>
    <div className="member">Shah Nisarg Hiteshkumar</div>
    <div className="member">Kundan Chaudhary</div>
    <div className="member">Mahalaxmi Kinnal</div>
    <div className="member">Kriti Chandel</div>
    <div className="member">Savare Ganesh Dattatray</div>
    <div className="member">Shaik Sahul Ameen</div>
  </div>
</section>

      <footer id="contact" className="landing-footer">
        <p>Contact: support@jobportal.com | +91 1234567890</p>
      </footer>
    </div>
  );
}

export default LandingPage;
