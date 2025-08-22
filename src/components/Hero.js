import React from "react";
import { ReactTyped } from "react-typed";
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaDownload,
} from "react-icons/fa";

const accentColor = "#fd0054"; // Your highlight color

const socialLinks = [
  { icon: <FaEnvelope />, link: "mailto:subernasrajaram@gmail.com" },
  { icon: <FaWhatsapp />, link: "https://wa.me/919788953899" },
  { icon: <FaLinkedin />, link: "https://linkedin.com/in/suberna-rajaram" },
  { icon: <FaGithub />, link: "https://github.com/Suberna" },
];

function Hero() {
  return (
    <div
      style={{
        background: "#232329",
        minHeight: "85vh",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        paddingLeft: "6vw",
        paddingBottom: "-2rem", // reduce bottom padding from 3rem or remove if exists
        marginBottom: 0, // ensure margin below is zero
      }}
    >
      <div style={{ flex: 2 }}>
        <p style={{ letterSpacing: 2, color: "#d1d8e0" }}>
          WELCOME TO MY WORLD
        </p>
        <h1 style={{ fontWeight: 700, fontSize: "3vw", margin: 0 }}>
          Hi, I'm <span style={{ color: accentColor }}>Suberna R S</span>
        </h1>
        <h1
          style={{
            fontWeight: 700,
            fontSize: "3vw",
            margin: 0,
            color: accentColor,
          }}
        >
          an AI & Data Science Enthusiast
        </h1>
        <div
          style={{
            fontWeight: 700,
            fontSize: "2vw",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            marginTop: 18,
          }}
        >
          <ReactTyped
            strings={[
              "Machine Learning Developer",
              "Web Developer",
              "Problem Solver",
              "Hackathon Winner",
            ]}
            typeSpeed={60}
            backSpeed={35}
            loop
          />
        </div>
        <p
          style={{
            maxWidth: 500,
            marginTop: 24,
            color: "#b0bec5",
            fontSize: "1.2vw",
            fontWeight: 400,
            letterSpacing: 0.5,
          }}
        >
          As a driven Data Science student and developer, I love building
          impactful projects and collaborating on real-world AI solutions. Let's
          make a difference together!
        </p>
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 24,
            marginBottom: 16,
          }}
        >
          <div>
            <div style={{ color: "#b0bec5", marginBottom: 10 }}>FIND ME IN</div>
            <div style={{ display: "flex", gap: 10 }}>
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#18181b",
                    borderRadius: 8,
                    color: "#fff",
                    fontSize: 28,
                    width: 48,
                    height: 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 6px 0 #0002",
                    transition: "background 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = accentColor;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "#18181b";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div style={{ marginLeft: 30 }}>
            <div style={{ color: "#b0bec5", marginBottom: 10 }}>
              DOWNLOAD RESUME
            </div>
            <a
              href="https://pdf.ac/6lIar35Rd2"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#18181b",
                borderRadius: 8,
                color: "#fff",
                fontSize: 28,
                width: 48,
                height: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 6px 0 #0002",
                textDecoration: "none",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = accentColor;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#18181b";
              }}
            >
              <FaDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
