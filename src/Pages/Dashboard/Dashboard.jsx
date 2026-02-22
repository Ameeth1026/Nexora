import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import SideNav from "../../Components/SideNav/SideNav";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="dashboard">
      <SideNav
        onLogout={handleLogout}
        onProfileClick={() => setShowProfile(true)} // show profile in main content
      />

      {/* MAIN CONTENT */}
      <div className="main-content">
        <div className="topbar">
          <h2>Hello, {user?.fullName}</h2>
        </div>

        <div className="content">
         {showProfile ? (
  <div className="profile-view">
    {/* Cover Image */}
    <div className="cover-image">
      <img
        src="https://m.media-amazon.com/images/I/81V2hzNkcsL._AC_UF894,1000_QL80_.jpg"
        alt="cover"
      />
    </div>

    {/* Profile Picture and Name */}
    <div className="profile-info">
      <img
        className="profile-pic"
        src="https://i.pravatar.cc/150?img=12"
        alt="profile"
      />
      <h2>{user?.fullName}</h2>
      <p className="designation">Software Developer at Nexora</p>
      <p className="location">San Francisco, CA</p>
      <p className="email">{user?.email}</p>
    </div>

    {/* Contact Buttons */}
    <div className="profile-actions">
  <button className="chat-btn">Chat</button>
  <button className="follow-btn">Follow</button>
  <button className="logout-btn" onClick={handleLogout}>Logout</button>
</div>
    {/* Stats / Ratings */}
    <div className="profile-stats">
      <div>
        <h4>4.5</h4>
        <span>Rating</span>
      </div>
      <div>
        <h4>938</h4>
        <span>Posts</span>
      </div>
      <div>
        <h4>3,586</h4>
        <span>Followers</span>
      </div>
      <div>
        <h4>2,659</h4>
        <span>Following</span>
      </div>
    </div>

    {/* Introduction / Video */}
    <div className="profile-intro">
      <h3>Introduction</h3>
      <div className="video-placeholder">
        <p>Video goes here</p>
      </div>
    </div>
  </div>
) : (
  <>
    {/* Default Dashboard Content */}
    <h3>Welcome to your dashboard!</h3>
    <p>This is where you can manage your projects, view activity, and update your settings.</p>
  </>
)}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;