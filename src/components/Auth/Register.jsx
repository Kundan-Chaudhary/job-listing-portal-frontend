import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { registerUser } from "../../services/authService";
import "./Auth.css";

const Register = () => {
  const [role, setRole] = useState("candidate");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalData = {
      ...formData,
      role,
    };

    try {
      await registerUser(finalData);
      alert("Registration Successful");
    } catch {
      alert("Registration Failed");
    }
  };

  const handleGoogleRegister = () => {
    alert(`Google Sign Up as ${role} coming soon`);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Job Listing Portal</h1>
        <h2>Register</h2>

        {/* ROLE TOGGLE */}
        <div className="role-toggle">
          <button
            type="button"
            className={role === "candidate" ? "active" : ""}
            onClick={() => setRole("candidate")}
          >
            Candidate
          </button>
          <button
            type="button"
            className={role === "employer" ? "active" : ""}
            onClick={() => setRole("employer")}
          >
            Employer
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="input-group">
            <span className="input-icon">
              <FaUser />
            </span>
            <input
              type="text"
              name="name"
              placeholder="Username"
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <span className="input-icon">
              <MdEmail />
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="input-group">
            <span className="input-icon">
              <FaPhoneAlt />
            </span>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <span className="input-icon">
              <FaLock />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <span
              className="input-icon right"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit">Sign Up</button>
        </form>

        {/* DIVIDER */}
        <div className="divider">or</div>

        {/* GOOGLE REGISTER */}
        <button className="google-btn" onClick={handleGoogleRegister}>
          <FcGoogle />
          <span>Continue with Google</span>
        </button>

        <p>
          Already have an account? <Link to="/">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
