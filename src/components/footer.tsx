"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        padding: "2rem 1rem",
        backgroundColor: "#1f2937", // dark gray
        color: "#f9fafb",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* About Me */}
      <p style={{ maxWidth: 600, marginBottom: "1rem", lineHeight: 1.6 }}>
        I am Sreerag Sathian, MSc in Computing from South East Technological University, Waterford. 
        I have a keen interest in programming, data science, remote sensing, and climate change.
      </p>

      {/* Social links */}
      <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1rem" }}>
        <a
          href="https://www.linkedin.com/in/sreerag-sathian-212305189/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0a66c2", fontSize: "1.5rem" }}
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Sreerag20109451"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f9fafb", fontSize: "1.5rem" }}
          title="GitHub"
        >
          <FaGithub />
        </a>
      </div>

      {/* Copyright */}
      <span style={{ fontSize: "0.9rem", color: "#cbd5e1" }}>
        © {new Date().getFullYear()} Sreerag Sathian
      </span>
    </footer>
  );
}
