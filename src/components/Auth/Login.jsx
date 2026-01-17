import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { loginUser } from "../../services/authService";
import "./Auth.css";

const Login = () => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(formData);
      alert("Login Successful");
    } catch {
      alert("Login Failed");
    }
  };

  // Google Login
  const handleGoogleLogin = () => {
    alert("Google Login coming soon 🚀");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Job Listing Portal</h1>
        <h2>Login</h2>

        {/* LOGIN FORM */}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="input-icon">
              <FaUser />
            </span>
            <input
              type="text"
              name="identifier"
              placeholder="Email or Username"
              onChange={handleChange}
              required
            />
          </div>

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

          <button type="submit">Sign In</button>
        </form>

        {/* DIVIDER */}
        <div className="divider">or</div>

        {/* GOOGLE LOGIN */}
        <button className="google-btn" onClick={handleGoogleLogin}>
          <FcGoogle />
          <span>Continue with Google</span>
        </button>

        <p>
          Don’t have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;