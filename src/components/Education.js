import React from "react";
import { Container } from "react-bootstrap";

const backgroundColor = "#232329";
const textColor = "#fff";
const accentColor = "#fd0054";

const educationData = [
  {
    degree: "B.Tech AI & Data Science",
    institution: "Knowledge Institute Of Technology",
    year: "2022 – 2026",
  },
  {
    degree: "12th",
    institution: "Greenpark Higher Secondary School",
    year: "2021 – 2022",
  },
  { degree: "10th", institution: "Holly Angels School", year: "2019 – 2020" },
];

function Education() {
  return (
    <Container
      id="education"
      fluid
      style={{
        backgroundColor,
        color: textColor,
        fontFamily: "'Poppins', sans-serif",
        padding: "2rem 1rem",
      }}
    >
      <h2
        style={{
          color: accentColor,
          textAlign: "center",
          marginBottom: "1.5rem",
          fontWeight: "700",
          letterSpacing: "2px",
          fontSize: "2rem",
        }}
      >
        Education
        <span
          style={{
            display: "block",
            margin: "6px auto 0",
            width: "50px",
            height: "3px",
            backgroundColor: accentColor,
            borderRadius: "2px",
          }}
        />
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            style={{
              position: "relative",
              padding: "6px 10px 6px 20px",
            }}
          >
            {/* Gradient timeline line */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "4px",
                borderRadius: "2px",
                background: `linear-gradient(to bottom, ${accentColor}, #000)`,
              }}
            />

            <p style={{ margin: 0, fontWeight: 600, fontSize: "1.05rem" }}>
              {edu.degree}
            </p>
            <p style={{ margin: 0, color: "#ccc", fontSize: "0.95rem" }}>
              {edu.institution}
            </p>
            <p
              style={{
                margin: 0,
                color: accentColor,
                fontStyle: "italic",
                fontSize: "0.9rem",
              }}
            >
              {edu.year}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Education;
