import React, { useState, useEffect } from "react";
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

  // Automatic certificate rotation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCert((prev) => (prev + 1) % certificates.length);
    }, 3000); // Change 3000 to any number for slower/faster rotation
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="skills"
      style={{
        backgroundColor,
        color: "#fff",
        width: "100%",
        padding: "3rem 1rem",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
      }}
    >
      <Container>
        <h2
          style={{
            color: accentColor,
            textTransform: "uppercase",
            fontWeight: 700,
            letterSpacing: 1.5,
            marginBottom: "2rem",
            fontSize: "2rem",
            textAlign: "center",
          }}
        >
          Skills & Certificates
        </h2>

        {/* Skills Carousel */}
        <div
          style={{ display: "flex", overflow: "hidden", position: "relative" }}
        >
          <div
            className="skills-scroll"
            style={{
              display: "flex",
              gap: "16px",
              animation: "scroll 15s linear infinite",
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
                    gap: "8px",
                    padding: "12px 20px",
                    borderRadius: "12px",
                    backgroundColor: isHovered ? accentColor : "#111",
                    transition:
                      "transform 0.3s, background-color 0.3s, color 0.3s",
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                    cursor: "pointer",
                    minWidth: skill === "C" ? "130px" : "130px",
                    color: "#fff",
                  }}
                  onMouseEnter={() => setHoveredSkill(idx)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <IconComponent
                    size={30}
                    color={isHovered ? "#fff" : iconDefaultColors[skill]}
                  />
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: "1.2rem",
                      color: "#fff",
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
            marginTop: "2rem",
            gap: "20px",
            alignItems: "center",
            flexWrap: "nowrap",
          }}
        >
          {/* Certificate Details Scrollable */}
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "20px",
              flex: 1,
              paddingBottom: "10px",
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
                    minWidth: "180px",
                    cursor: "pointer",
                    outline: "none",
                    color: idx === activeCert ? "#fff" : "#aaa",
                    fontWeight: 600,
                    gap: "8px",
                  }}
                  onMouseEnter={() => setActiveCert(idx)}
                  onFocus={() => setActiveCert(idx)}
                  onClick={() => cert.link && window.open(cert.link, "_blank")}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
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
                      fontSize: "20px",
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
                      fontSize: "1rem",
                    }}
                  >
                    <strong style={{ color: accentColor }}>{cert.title}</strong>{" "}
                    <br />
                    {cert.platform} - {cert.date}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Fixed Certificate Image */}
          <Card
            style={{
              width: "320px",
              boxShadow: `0 8px 30px ${accentColor}44`,
              borderRadius: "16px",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Card.Img
              src={certificates[activeCert]?.image}
              alt="Certificate Preview"
              style={{ height: "220px", objectFit: "cover" }}
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

        @media (max-width: 768px) {
          .skills-scroll {
            animation: scroll 20s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}

export default Skills;
