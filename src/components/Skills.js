import React, { useState, useEffect, useRef } from "react";
import { Container, Card } from "react-bootstrap";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaMicrosoft,
} from "react-icons/fa";
import { SiC, SiMysql, SiCoursera } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

const backgroundColor = "#232329";
const accentColor = "#fd0054";

const iconDefaultColors = {
  Python: "#3776AB",
  C: "#A8B9CC",
  Java: "#007396",
  HTML: "#E34F26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  React: "#61DAFB",
  MySQL: "#4479A1",
  GitHub: "#b69090ff",
};

const skillIconsMap = {
  Python: FaPython,
  C: SiC,
  Java: FaJava,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  React: FaReact,
  MySQL: SiMysql,
  GitHub: FaGitAlt,
};

const certificates = [
  {
    title: "Python for Data Science",
    platform: "IBM - Coursera",
    date: "June 2023",
    image:
      "https://img.freepik.com/free-vector/realistic-certificate-template_52683-83834.jpg?semt=ais_hybrid&w=740&q=80",
    link: "https://www.coursera.org/account/accomplishments/certificate/abc123",
    icon: FaPython,
  },
  {
    title: "Neural Networks & Deep Learning",
    platform: "Coursera",
    date: "August 2023",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZexdO9622UngACYtecB1uPXy5klRGpNf6rA&s",
    link: "https://www.coursera.org/account/accomplishments/certificate/def456",
    icon: SiCoursera,
  },
  {
    title: "Machine Learning",
    platform: "GUVI",
    date: "September 2023",
    image:
      "https://img.freepik.com/free-vector/realistic-certificate-template_52683-83834.jpg?semt=ais_hybrid&w=740&q=80",
    link: null,
    icon: GiArtificialIntelligence,
  },
  {
    title: "Gen AI & Copilots",
    platform: "Microsoft",
    date: "April 2024",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIrtXJkFqAD9P95mGZV-XsPl-oRfGMQpugEHH1nLIvUwr0rmb8AeU-pObJKmjMZHhWWUc&usqp=CAU",
    link: null,
    icon: FaMicrosoft,
  },
  {
    title: "JavaScript Advanced Concepts",
    platform: "Cisco Academy",
    date: "May 2023",
    image:
      "https://img.freepik.com/free-vector/realistic-certificate-template_52683-83834.jpg?semt=ais_hybrid&w=740&q=80",
    link: null,
    icon: FaJs,
  },
  {
    title: "React Developer",
    platform: "Udemy",
    date: "July 2023",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZexdO9622UngACYtecB1uPXy5klRGpNf6rA&s",
    link: null,
    icon: FaReact,
  },
];

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCert, setActiveCert] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const certificatesRef = useRef(null);

  const skills = [
    "Python",
    "C",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "MySQL",
    "GitHub",
  ];

  const scrollSkills = skills.concat(skills);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 576);
      setIsTablet(width > 576 && width <= 992);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Auto-scroll certificates to keep active one visible
  useEffect(() => {
    if (certificatesRef.current) {
      const container = certificatesRef.current;
      const activeElement = container.children[activeCert];

      if (activeElement) {
        const containerWidth = container.offsetWidth;
        const elementWidth = activeElement.offsetWidth;
        const elementLeft = activeElement.offsetLeft;
        const scrollLeft = elementLeft - containerWidth / 2 + elementWidth / 2;

        container.scrollTo({
          left: Math.max(0, scrollLeft),
          behavior: "smooth",
        });
      }
    }
  }, [activeCert]);

  // Automatic certificate rotation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCert((prev) => (prev + 1) % certificates.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="skills"
      style={{
        backgroundColor,
        color: "#fff",
        width: "100%",
        padding: isMobile
          ? "2rem 0.5rem"
          : isTablet
          ? "2.5rem 1rem"
          : "3rem 1rem",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
      }}
    >
      <Container fluid={isMobile}>
        <h2
          style={{
            color: accentColor,
            textTransform: "uppercase",
            fontWeight: 700,
            letterSpacing: isMobile ? 1 : 1.5,
            marginBottom: isMobile ? "1.5rem" : "2rem",
            fontSize: isMobile ? "1.5rem" : isTablet ? "1.75rem" : "2rem",
            textAlign: "center",
          }}
        >
          Skills & Certificates
        </h2>

        {/* Skills Carousel */}
        <div
          style={{
            display: "flex",
            overflow: "hidden",
            position: "relative",
            marginBottom: isMobile ? "1.5rem" : "2rem",
          }}
        >
          <div
            className="skills-scroll"
            style={{
              display: "flex",
              gap: isMobile ? "8px" : isTablet ? "12px" : "16px",
              animation: isMobile
                ? "scroll 20s linear infinite"
                : "scroll 15s linear infinite",
            }}
          >
            {scrollSkills.map((skill, idx) => {
              const IconComponent = skillIconsMap[skill];
              const isHovered = hoveredSkill === idx;

              return (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: isMobile ? "4px" : "8px",
                    padding: isMobile
                      ? "8px 12px"
                      : isTablet
                      ? "10px 16px"
                      : "12px 20px",
                    borderRadius: isMobile ? "8px" : "12px",
                    backgroundColor: isHovered ? accentColor : "#111",
                    transition:
                      "transform 0.3s, background-color 0.3s, color 0.3s",
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                    cursor: "pointer",
                    minWidth: isMobile ? "100px" : isTablet ? "115px" : "130px",
                    color: "#fff",
                    flexDirection: isMobile ? "column" : "row",
                  }}
                  onMouseEnter={() => setHoveredSkill(idx)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <IconComponent
                    size={isMobile ? 20 : isTablet ? 25 : 30}
                    color={isHovered ? "#fff" : iconDefaultColors[skill]}
                  />
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: isMobile
                        ? "0.8rem"
                        : isTablet
                        ? "1rem"
                        : "1.2rem",
                      color: "#fff",
                      textAlign: "center",
                    }}
                  >
                    {skill === "C" ? "Program" : skill}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certificates */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "15px" : "20px",
            alignItems: isMobile ? "center" : "flex-start",
          }}
        >
          {/* Certificate Details */}
          <div
            ref={certificatesRef}
            style={{
              display: "flex",
              overflowX: "auto",
              gap: isMobile ? "10px" : "20px",
              flex: 1,
              paddingBottom: "10px",
              width: isMobile ? "100%" : "auto",
              order: isMobile ? 2 : 1,
              scrollBehavior: "smooth",
            }}
            aria-label="Certificates List"
          >
            {certificates.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <div
                  key={idx}
                  tabIndex={0}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: isMobile ? "140px" : isTablet ? "160px" : "180px",
                    cursor: "pointer",
                    outline: "none",
                    color: idx === activeCert ? "#fff" : "#aaa",
                    fontWeight: 600,
                    gap: isMobile ? "6px" : "8px",
                    padding: isMobile ? "8px" : "0",
                  }}
                  onMouseEnter={() => setActiveCert(idx)}
                  onFocus={() => setActiveCert(idx)}
                  onClick={() => cert.link && window.open(cert.link, "_blank")}
                >
                  <div
                    style={{
                      width: isMobile ? 36 : isTablet ? 40 : 44,
                      height: isMobile ? 36 : isTablet ? 40 : 44,
                      backgroundColor:
                        idx === activeCert ? accentColor : "#666",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      boxShadow:
                        idx === activeCert
                          ? `0 0 12px ${accentColor}cc`
                          : "none",
                      fontSize: isMobile ? "16px" : isTablet ? "18px" : "20px",
                      flexShrink: 0,
                      transition: "all 0.3s",
                    }}
                  >
                    <Icon />
                  </div>
                  <p
                    style={{
                      textAlign: "center",
                      margin: 0,
                      fontSize: isMobile
                        ? "0.75rem"
                        : isTablet
                        ? "0.875rem"
                        : "1rem",
                      lineHeight: isMobile ? 1.3 : 1.4,
                    }}
                  >
                    <strong style={{ color: accentColor }}>{cert.title}</strong>{" "}
                    <br />
                    <span style={{ fontSize: isMobile ? "0.7rem" : "0.85rem" }}>
                      {cert.platform} - {cert.date}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>

          {/* Certificate Image */}
          <Card
            style={{
              width: isMobile ? "280px" : isTablet ? "300px" : "320px",
              maxWidth: isMobile ? "90vw" : "none",
              boxShadow: `0 8px 30px ${accentColor}44`,
              borderRadius: isMobile ? "12px" : "16px",
              overflow: "hidden",
              flexShrink: 0,
              order: isMobile ? 1 : 2,
            }}
          >
            <Card.Img
              src={certificates[activeCert]?.image}
              alt="Certificate Preview"
              style={{
                height: isMobile ? "180px" : isTablet ? "200px" : "220px",
                objectFit: "cover",
              }}
            />
          </Card>
        </div>
      </Container>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Scrollbar styling with fade gradient red -> black */
        div[aria-label="Certificates List"]::-webkit-scrollbar {
          height: 6px;
        }
        div[aria-label="Certificates List"]::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #fd0054, #000);
          border-radius: 3px;
        }
        div[aria-label="Certificates List"]::-webkit-scrollbar-track {
          background: #111;
          border-radius: 3px;
        }

        /* Mobile specific styles */
        @media (max-width: 576px) {
          .skills-scroll {
            animation: scroll 25s linear infinite;
          }
          
          /* Touch-friendly tap targets */
          div[aria-label="Certificates List"] > div {
            min-height: 44px;
          }
          
          /* Better touch scrolling */
          div[aria-label="Certificates List"] {
            -webkit-overflow-scrolling: touch;
            scroll-behavior: smooth;
          }
        }

        /* Tablet specific styles */
        @media (min-width: 577px) and (max-width: 992px) {
          .skills-scroll {
            animation: scroll 18s linear infinite;
          }
        }

        /* Desktop styles */
        @media (min-width: 993px) {
          .skills-scroll {
            animation: scroll 15s linear infinite;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          div[style*="background-color: #111"] {
            border: 1px solid #fff;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .skills-scroll {
            animation: none;
          }
          
          div {
            transition: none !important;
          }
        }

        /* Focus management for accessibility */
        div[tabindex="0"]:focus {
          outline: 2px solid ${accentColor};
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}

export default Skills;
