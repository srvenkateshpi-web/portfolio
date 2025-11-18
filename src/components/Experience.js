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
      "Built an AI tool using Random Forest to analyze learning styles, deployed via Streamlit using Python, pandas, and scikit-learn.",
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
        position: "relative",
        transition: "padding .35s ease-in-out",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          fontWeight: 700,
          fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)",
          color: accentColor,
          position: "relative",
          transition: "font-size .4s ease-in-out",
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
            transition: "width .35s ease-in-out",
          }}
        />
      </h2>

      {/* Wave Line for Desktop Only */}
      <svg
        viewBox="0 0 1000 120"
        className="wave-line"
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          width: "100%",
          height: "120px",
          zIndex: 0,
          transition: "height .35s ease-in-out",
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

      <div className="exp-wrapper">
        {experiences.map((exp, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`exp-card ${isEven ? "even" : "odd"}`}
              onMouseEnter={() => setFlippedIndex(idx)}
              onMouseLeave={() => setFlippedIndex(null)}
              onClick={() => setFlippedIndex(flippedIndex === idx ? null : idx)}
              style={{
                transition: "transform .4s ease-in-out, width .4s ease-in-out",
              }}
            >
              {/* Flip Container */}
              <div
                className="flip-box"
                style={{
                  transition: "transform .6s ease-in-out",
                  transform:
                    flippedIndex === idx ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front */}
                <Card className="front-card">
                  <div className="icon">{exp.icon}</div>
                  <Card.Title>{exp.company}</Card.Title>
                  <Card.Subtitle>{exp.year}</Card.Subtitle>
                  <Card.Text>{exp.tagline}</Card.Text>
                </Card>

                {/* Back */}
                <Card className="back-card">
                  <Card.Title>{exp.role}</Card.Title>
                  <Card.Text>{exp.description}</Card.Text>
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

        .exp-wrapper {
          display: flex;
          justify-content: center;
          gap: clamp(20px, 6vw, 80px);
          padding: 60px 0;
          position: relative;
          z-index: 1;
          transition: gap .4s ease-in-out;
        }

        .exp-card {
          flex: 0 0 clamp(200px, 22vw, 240px);
          height: clamp(180px, 22vh, 220px);
          transform-style: preserve-3d;
          perspective: 1000px;
          cursor: pointer;
          transition: all .4s ease-in-out;
        }

        .even { transform: translateY(-50px); }
        .odd { transform: translateY(50px); }

        .flip-box {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }
        .front-card, .back-card {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 16px;
          text-align: center;
          padding: 20px;
          transition: background .35s ease-in-out;
        }
        .front-card {
          background: #fff;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
        .front-card .icon {
          font-size: 2rem;
          color: ${accentColor};
          margin-bottom: 10px;
          transition: font-size .35s ease-in-out;
        }
        .back-card {
          background: ${accentColor};
          color: #fff;
          transform: rotateY(180deg);
        }

        /* SMALL SCREENS */
        @media (max-width: 576px) {
          .wave-line { display: none; }
          .exp-wrapper {
            display: grid;
            grid-template-columns: 1fr;
            row-gap: 25px;
          }
          .exp-card {
            transform: translateY(0) !important;
            width: 100% !important;
            max-width: 330px;
          }
        }

        /* MEDIUM SCREENS */
        @media (min-width: 577px) and (max-width: 991px) {
          .wave-line { display: none; }
          .exp-wrapper {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
            justify-items: center;
          }
          .exp-card {
            transform: translateY(0) !important;
            max-width: 260px;
          }
        }
      `}</style>
    </Container>
  );
}

export default ExperienceWave;
