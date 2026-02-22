import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import Assets from "../../assets/Assets";

const Register = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, type } = e.target;
    setFormData({
      ...formData,
      [type === "text" ? "fullName" : type]: value,
    });
  };

  const handleSubmit = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (isLogin) {
      // LOGIN
      const existingUser = users.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (!existingUser) {
        alert("Invalid credentials");
        return;
      }

      localStorage.setItem("user", JSON.stringify(existingUser));
      navigate("/dashboard");
    } else {
      // SIGN UP
      const userExists = users.find((user) => user.email === formData.email);

      if (userExists) {
        alert("User already exists");
        return;
      }

      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("user", JSON.stringify(formData));

      navigate("/dashboard");
    }
  };

  return (
    <div className="register-wrapper">
      <div className="left-side">
        <div className="form-container">
          <h1>Nexora</h1>

          <div className="toggle-buttons">
            <button
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>

            <button
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
          </div>

          <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button className="main-btn" onClick={handleSubmit}>
            {isLogin ? "Login" : "Sign Up"}
          </button>

          <p className="switch-text">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? " Sign Up" : " Login"}
            </span>
          </p>
        </div>
      </div>

      <div className="right-side">
        <div className="card">
          <img src={Assets.auth} alt="Auth" />
        </div>
      </div>
    </div>
  );
};

export default Register;