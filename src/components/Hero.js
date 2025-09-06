import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaDownload,
} from "react-icons/fa";
import resumePDF from "../assets/resume.pdf";

const accentColor = "#fd0054";

const socialLinks = [
  { icon: <FaEnvelope />, link: "mailto:subernasrajaram@gmail.com" },
  { icon: <FaWhatsapp />, link: "https://wa.me/919788953899" },
  { icon: <FaLinkedin />, link: "https://linkedin.com/in/suberna-rajaram" },
  { icon: <FaGithub />, link: "https://github.com/Suberna" },
];

function Hero() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isTablet = windowWidth <= 1024;
  const isMobile = windowWidth <= 768;
  const isTiny = windowWidth <= 400;

  const leftFontSize = isTiny
    ? "5vw"
    : isMobile
    ? "4vw"
    : isTablet
    ? "2vw"
    : "1.4vw";
  const headingFontSize = isTiny
    ? "10vw"
    : isMobile
    ? "8vw"
    : isTablet
    ? "4vw"
    : "3vw";
  const subHeadingFontSize = isTiny
    ? "8vw"
    : isMobile
    ? "6vw"
    : isTablet
    ? "3vw"
    : "3vw";
  const typedFontSize = isTiny
    ? "6vw"
    : isMobile
    ? "5vw"
    : isTablet
    ? "2.5vw"
    : "2vw";
  const paragraphFontSize = isTiny
    ? "5vw"
    : isMobile
    ? "4vw"
    : isTablet
    ? "1.5vw"
    : "1.2vw";
  const iconSize = isTiny ? 18 : isMobile ? 20 : 28;
  const iconDim = isTiny ? 40 : isMobile ? 45 : 48;
  const iconMarginTop = isMobile ? 10 : 20;

  return (
    <div
      style={{
        background: "#232329",
        color: "#fff",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start", // removes vertical centering
        justifyContent: isMobile ? "center" : "flex-start",
        padding: isTiny ? "8vw 3vw" : isMobile ? "8vw 4vw" : "6vw 6vw",
      }}
    >
      {/* Left Side */}
      <div
        style={{
          flex: 2,
          minWidth: 280,
          fontSize: leftFontSize,
          marginBottom: isMobile ? 20 : 0,
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <p
          style={{ letterSpacing: 2, color: "#d1d8e0", fontSize: leftFontSize }}
        >
          WELCOME TO MY WORLD
        </p>
        <h1 style={{ fontWeight: 700, fontSize: headingFontSize, margin: 0 }}>
          Hi, I'm <span style={{ color: accentColor }}>Suberna R S</span>
        </h1>
        <h1
          style={{
            fontWeight: 700,
            fontSize: subHeadingFontSize,
            margin: 0,
            color: accentColor,
          }}
        >
          an AI & Data Science Enthusiast
        </h1>
        <div
          style={{
            fontWeight: 700,
            fontSize: typedFontSize,
            color: "#fff",
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-start",
            alignItems: "center",
            marginTop: 18,
          }}
        >
          <ReactTyped
            strings={[
              "Machine Learning Developer !",
              "Web Developer",
              "Problem Solver !",
              "Hackathon Winner",
              "AI Enthusiast",
            ]}
            typeSpeed={60}
            backSpeed={35}
            loop
          />
        </div>
        <p
          style={{
            maxWidth: isMobile ? "100%" : 500,
            marginTop: 20,
            color: "#b0bec5",
            fontSize: paragraphFontSize,
            fontWeight: 400,
            letterSpacing: 0.5,
          }}
        >
          As a driven Data Science student and developer, I love building
          impactful projects and collaborating on real-world AI solutions. Let's
          make a difference together!
        </p>
      </div>

      {/* Right Side */}
      {isMobile ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
            marginTop: iconMarginTop,
          }}
        >
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
                fontSize: iconSize,
                width: iconDim,
                height: iconDim,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 6px 0 #0002",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = accentColor)
              }
              onMouseOut={(e) => (e.currentTarget.style.background = "#18181b")}
            >
              {s.icon}
            </a>
          ))}
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#18181b",
              borderRadius: 8,
              color: "#fff",
              fontSize: iconSize,
              width: iconDim,
              height: iconDim,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 6px 0 #0002",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = accentColor)
            }
            onMouseOut={(e) => (e.currentTarget.style.background = "#18181b")}
          >
            <FaDownload />
          </a>
        </div>
      ) : (
        // Desktop layout
        <div
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 24,
            marginTop: 20,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div style={{ color: "#b0bec5", marginBottom: 10 }}>FIND ME IN</div>
            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                justifyContent: "flex-start",
              }}
            >
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
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = accentColor)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "#18181b")
                  }
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div style={{ marginLeft: 10 }}>
            <div style={{ color: "#b0bec5", marginBottom: 10 }}>RESUME</div>
            <a
              href={resumePDF}
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
                transition: "background 0.2s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = accentColor)
              }
              onMouseOut={(e) => (e.currentTarget.style.background = "#18181b")}
            >
              <FaDownload />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
