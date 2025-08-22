import React from "react";
import Slider from "react-slick";
import { Button } from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const accentColor = "#fd0054";

// Custom arrows positioned outside the slider container
const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      left: "-60px", // outside the slider container (adjust if needed)
      transform: "translateY(-50%)",
      zIndex: 1000,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      backgroundColor: "#fff",
      borderRadius: "50%",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    }}
    aria-label="Previous Slide"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={accentColor}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      right: "-60px", // outside the slider container (adjust if needed)
      transform: "translateY(-50%)",
      zIndex: 1000,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      backgroundColor: "#fff",
      borderRadius: "50%",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    }}
    aria-label="Next Slide"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={accentColor}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  </div>
);

const projects = [
  {
    title: "AutoEyeAI",
    img: "https://media.licdn.com/dms/image/v2/D5612AQHCOI2qZAPQGw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1699968551173?e=2147483647&v=beta&t=SuD4YTgWeyHRoQQAPVcLXiiV2nvlxH78FSWitWWV6oc",
    description: "Real-time traffic violation detection using YOLOv8 & OCR.",
    stack: "YOLOv8, OCR, Python",
    github: "https://github.com/yourusername/AutoEyeAI",
    outcome: "Best Project Award - Vihansa Hackathon 2025",
  },
  {
    title: "Tejus",
    img: "https://static.vecteezy.com/system/resources/previews/006/683/812/non_2x/car-crashed-into-the-rear-of-the-hood-opened-and-smoke-spewed-out-insurance-worker-using-mobile-phone-to-take-pictures-mother-and-son-hugged-each-other-sadly-male-counterpart-stood-at-a-distance-vector.jpg",
    description:
      "Real-time accident detection using AI-powered camera analysis.",
    stack: "AI, GPS, SMS Alerts",
    github: "https://github.com/yourusername/Tejus",
    outcome: "Applied for Patent (2025)",
  },
  {
    title: "MedSync",
    img: "https://smartclinix.net/wp-content/uploads/2023/10/Role-of-EHR-in-Telemedicine.jpg",
    description:
      "Centralized healthcare management system for smart hospital operations.",
    stack: "React, Python, Real-time Tracking",
    github: "https://github.com/yourusername/MedSync",
    outcome: "Finalist - Advaya National Hackathon 2025",
  },
  {
    title: "Precog",
    img: "https://www.electronic-sirens.com/wp-content/uploads/2020/07/warning-system.jpg",
    description: "Disaster prediction and alert system with IoT sensors.",
    stack: "Python, IoT, Machine Learning",
    github: "https://github.com/yourusername/Precog",
    outcome: "Top 10 - iStart Hackathon 2024",
  },
];

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    appendDots: (dots) => (
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <ul style={{ margin: 0, padding: 0 }}>{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false, // hide arrows on mobile
          dots: true,
        },
      },
    ],
  };

  return (
    <div
      id="projects"
      style={{
        background: "linear-gradient(135deg, #232329 0%, #1a1a22 100%)",
        padding: "50px 0",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          fontWeight: "700",
          color: accentColor,
          letterSpacing: 2,
          fontSize: "2.2rem",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Projects
      </h2>

      <div style={{ position: "relative", width: "80%", margin: "0 auto" }}>
        <Slider {...settings}>
          {projects.map((project, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "stretch",
                minHeight: "400px",
                padding: "20px 0",
              }}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "18px",
                  padding: "28px 24px 24px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                  transition: "transform 0.3s, box-shadow 0.3s, filter 0.3s",
                  cursor: "default",
                }}
                className="project-slide"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-10px) scale(1.03)";
                  e.currentTarget.style.boxShadow = `0 20px 50px ${accentColor}44`;
                  e.currentTarget.style.filter = "brightness(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0, 0, 0, 0.15)";
                  e.currentTarget.style.filter = "none";
                }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  style={{
                    borderRadius: "16px",
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                    marginBottom: "18px",
                  }}
                />
                <h3
                  style={{
                    fontWeight: "700",
                    fontSize: "1.28rem",
                    marginBottom: "10px",
                    color: "#222",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    flexGrow: 1,
                    color: "#444",
                    marginBottom: "14px",
                    fontSize: "1rem",
                    lineHeight: 1.4,
                  }}
                >
                  {project.description}
                </p>
                <p
                  style={{
                    fontWeight: "600",
                    marginBottom: "8px",
                    fontSize: "0.95rem",
                  }}
                >
                  Tech:{" "}
                  <span style={{ fontWeight: "400" }}>{project.stack}</span>
                </p>
                <p
                  style={{
                    fontWeight: "600",
                    marginBottom: "20px",
                    fontSize: "0.95rem",
                  }}
                >
                  Outcome:{" "}
                  <span style={{ fontWeight: "400" }}>{project.outcome}</span>
                </p>
                <Button
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: accentColor,
                    borderColor: accentColor,
                    fontWeight: "700",
                    padding: "10px 18px",
                    fontSize: "1rem",
                    alignSelf: "flex-start",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(253, 0, 84, 0.4)",
                    transition: "background-color 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#e6003f";
                    e.currentTarget.style.borderColor = "#e6003f";
                    e.currentTarget.style.boxShadow =
                      "0 6px 12px rgba(230, 0, 63, 0.7)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = accentColor;
                    e.currentTarget.style.borderColor = accentColor;
                    e.currentTarget.style.boxShadow =
                      "0 4px 8px rgba(253, 0, 84, 0.4)";
                  }}
                >
                  View on GitHub
                </Button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
