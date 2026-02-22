import React from "react";
import {
  Home,
  Folder,
  Settings,
  FileText,
  ChevronDown,
  ChevronRight,
  Search,
  LayoutDashboard
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SideNav.css";

const SidebarItem = ({ icon: Icon, label, path, children }) => {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const isActive = location.pathname === path;

  return (
    <div className="sidebar-item-wrapper">
      <button
        onClick={() => children ? setOpen(!open) : null}
        className={`sidebar-item ${isActive ? "active" : ""}`}
      >
        <div className="sidebar-item-left">
          <Icon size={18} />
          <span>{label}</span>
        </div>
        {children && (open ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
      </button>

      {children && open && (
        <div className="sidebar-submenu">{children}</div>
      )}
    </div>
  );
};

export default function SideNav({ onLogout, onProfileClick }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="sidebar">
      <div>
        {/* Logo */}
        <div className="sidebar-logo">
          <img src="./Public/lOG_back.png" alt="Nexora Logo" width={50} height={50} />
          <h1>Nexora</h1>
        </div>

        {/* Menu Items */}
        <div className="sidebar-menu">
          <SidebarItem icon={Search} label="Search" path="/search" />
          <SidebarItem icon={LayoutDashboard} label="Dashboard" path="/dashboard" />
          <SidebarItem icon={Home} label="Activity" path="/activity" />
          <SidebarItem icon={Folder} label="Projects" path="/projects">
            <button className="submenu-item" onClick={() => navigate("/projects/design")}>Design</button>
            <button className="submenu-item" onClick={() => navigate("/projects/development")}>Development</button>
            <button className="submenu-item" onClick={() => navigate("/projects/marketing")}>Marketing</button>
          </SidebarItem>
          <SidebarItem icon={Settings} label="Settings" path="/settings" />
          <SidebarItem icon={FileText} label="Documentation" path="/documentation" />
        </div>
      </div>

      {/* Profile Section */}
      <div className="sidebar-profile" onClick={onProfileClick}>
        <img src="https://i.pravatar.cc/40" alt="profile" />
        <div>
          <p>{user?.fullName || "Guest"}</p>
          <span><i className="fa-solid fa-arrow-up-right-from-square"></i></span>
        </div>
      </div>
    </div>
  );
}