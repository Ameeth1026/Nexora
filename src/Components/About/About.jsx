import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">

      {/* HERO */}
      <section className="about-hero">
        <h1>
          Build the Future <br />
          with Nexora.
        </h1>

        <p>
          Nexora empowers developers and businesses with powerful AI tools
          designed to accelerate innovation, automation, and creativity.
        </p>
      </section>

      {/* FEATURES */}
      <section className="feature-grid">
        <div className="feature-card">
          <h3>⚡ Easy</h3>
          <p>Deploy and scale your AI workflows with simplicity.</p>
        </div>

        <div className="feature-card">
          <h3>🌍 Universal</h3>
          <p>Access tools anywhere with high-performance infrastructure.</p>
        </div>

        <div className="feature-card">
          <h3>🔒 Secure</h3>
          <p>Enterprise-grade security built into every layer.</p>
        </div>
      </section>

      {/* AI TOOLS */}
      <section className="tools-section">
        <h2 className="tools-title">
          Everything you need. In one AI platform.
        </h2>

        <div className="tools-grid">

          <div className="tool">
            <img src="/ai.svg" alt="AI Assistant" className="tool-icon" />
            <span>AI Assistant</span>
          </div>

          <div className="tool">
            <img src="/calc.svg" alt="Smart Calculator" className="tool-icon" />
            <span>Smart Calculator</span>
          </div>

          <div className="tool">
            <img src="/Note.svg" alt="AI Notepad" className="tool-icon" />
            <span>AI Notepad</span>
          </div>

          <div className="tool">
            <img src="/Code.svg" alt="Code Studio" className="tool-icon" />
            <span>Code Studio</span>
          </div>
 
          <div className="tool">
            <img src="/Image_editor.svg" alt="Image Editor" className="tool-icon" />
            <span>Image Editor</span>
          </div>

          <div className="tool">
            <img src="/Task.svg" alt="Task Manager" className="tool-icon" />
            <span>Task Manager</span>
          </div>

          <div className="tool">
            <img src="/Video.svg" alt="Data Insights" className="tool-icon" />
            <span>Video Editor</span>
          </div>

          <div className="tool">
            <img src="/Draw.svg" alt="Design Builder" className="tool-icon" />
            <span>Drawing</span>
          </div>

          <div className="tool">
            <img src="/Search.svg" alt="Smart Search" className="tool-icon" />
            <span>Smart Search</span>
          </div>

          <div className="tool">
            <img src="/Learn.svg" alt="Idea Engine" className="tool-icon" />
            <span>Idea Boost</span>
          </div>

          <div className="tool">
            <img src="/TtoS.svg" alt="Text to Speech" className="tool-icon" />
            <span>Text to Speech</span>
          </div>

          <div className="tool">
            <img src="/Download.svg" alt="Downloader" className="tool-icon" />
            <span>Downloader</span>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;