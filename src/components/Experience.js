import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { FaBrain, FaCode, FaHeartbeat, FaLaptopCode } from "react-icons/fa";

const accentColor = "#fd0054";

const experiences = [
  {
    company: "Corizo",
    year: "2023",
    role: "Machine Learning Intern",
    tagline: "AI-Driven Learning Insights",
    description:
      "Built an AI tool using Random Forest to analyze learning styles, deployed via Streamlit with Python, pandas, and scikit-learn.",
    icon: <FaBrain />,
  },
  {
    company: "Teachnook",
    year: "2024",
    role: "Web Development Intern",
    tagline: "Engaging React UIs",
    description:
      "Crafted a responsive product page with React.js, boosting user engagement.",
    icon: <FaCode />,
  },
  {
    company: "MainFlow",
    year: "2024",
    role: "Data Science Intern",
    tagline: "Healthcare Data Solutions",
    description:
      "Conducted EDA and applied ML to enhance breast cancer detection accuracy.",
    icon: <FaHeartbeat />,
  },
  {
    company: "Stack and Queue",
    year: "2025",
    role: "JavaScript Learning Experience",
    tagline: "Interactive JS Projects",
    description:
      "Mastered JavaScript, DOM, and ES6 by building calculators, to-do apps, and mini games.",
    icon: <FaLaptopCode />,
  },
];

function ExperienceWave() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <Container
      fluid
      style={{
        fontFamily: "'Poppins', sans-serif",
        padding: "4rem 1rem",
        background: "#f5f5f5",
        overflowX: "auto",
        position: "relative",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          fontWeight: 700,
          fontSize: "2.2rem",
          color: accentColor,
          position: "relative",
        }}
      >
        Experience
        <span
          style={{
            position: "absolute",
            bottom: "-14px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "70px",
            height: "3px",
            backgroundColor: accentColor,
            borderRadius: "2px",
          }}
        />
      </h2>

      {/* Moving Wave Line */}
      <svg
        viewBox="0 0 1000 120"
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          width: "100%",
          height: "120px",
          zIndex: 0,
        }}
      >
        <path
          d="M0,60 C150,10 350,110 500,60 C650,10 850,110 1000,60"
          stroke={accentColor}
          strokeWidth="4"
          fill="transparent"
          style={{ animation: "waveMove 6s linear infinite" }}
        />
      </svg>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "clamp(30px, 8vw, 80px)",
          padding: "60px 0",
          position: "relative",
          zIndex: 1,
        }}
      >
        {experiences.map((exp, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              onMouseEnter={() => setFlippedIndex(idx)}
              onMouseLeave={() => setFlippedIndex(null)}
              style={{
                flex: "0 0 clamp(200px, 22vw, 240px)",
                transform: `translateY(${isEven ? "-50px" : "50px"})`,
                transition: "transform 0.3s ease-in-out",
                perspective: "1000px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "200px",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.6s",
                  transform: flippedIndex === idx ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front */}
                <Card
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    borderRadius: "16px",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                    backgroundColor: "#fff",
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  <div style={{ fontSize: "2rem", color: accentColor, marginBottom: "10px" }}>
                    {exp.icon}
                  </div>
                  <Card.Title style={{ fontWeight: 700 }}>{exp.company}</Card.Title>
                  <Card.Subtitle
                    style={{ color: accentColor, fontWeight: 500, marginBottom: "8px" }}
                  >
                    {exp.year}
                  </Card.Subtitle>
                  <Card.Text style={{ fontSize: "0.95rem", color: "#555" }}>
                    {exp.tagline}
                  </Card.Text>
                </Card>

                {/* Back */}
                <Card
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    borderRadius: "16px",
                    backgroundColor: accentColor,
                    color: "#fff",
                    textAlign: "center",
                    padding: "20px",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <Card.Title style={{ fontWeight: 700 }}>{exp.role}</Card.Title>
                  <Card.Text style={{ fontSize: "0.9rem", marginTop: "8px" }}>
                    {exp.description}
                  </Card.Text>
                </Card>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes waveMove {
          0% { d: path("M0,60 C150,10 350,110 500,60 C650,10 850,110 1000,60"); }
          50% { d: path("M0,60 C150,110 350,10 500,60 C650,110 850,10 1000,60"); }
          100% { d: path("M0,60 C150,10 350,110 500,60 C650,10 850,110 1000,60"); }
        }

        @media (max-width: 768px) {
          div[style*="flex: 0 0"] {
            transform: translateY(0) !important;
          }
          div[style*="display: flex"][style*="justify-content: center"] {
            flex-direction: column;
            gap: 20px;
            align-items: center;
          }
        }
      `}</style>
    </Container>
  );
}

export default ExperienceWave;
