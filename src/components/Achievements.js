import React, { useEffect, useState, useRef } from "react";
import { Container, Card } from "react-bootstrap";
import {
  FaTrophy,
  FaMedal,
  FaStar,
  FaPeopleCarry,
  FaCalendarAlt,
  FaUserTie,
} from "react-icons/fa";

// Local images
import vihasanImg from "../asset/vihasan.JPG";
import hackImg from "../asset/hack.JPG";
import avdImg from "../asset/avd.JPG";
import devImg from "../asset/dev.jpg";

const accentColor = "#fd0054";

const achievements = [
  {
    icon: <FaTrophy />,
    text: (
      <>
        <strong style={{ color: accentColor }}>HackXelerators Award</strong> -
        HackXelerate 2025 (
        <span style={{ color: accentColor }}>₹2000 cash prize</span>)
      </>
    ),
    image: hackImg,
  },
  {
    icon: <FaMedal />,
    text: (
      <>
        <strong style={{ color: accentColor }}>Best Project Award</strong> -
        Vihansa Hackathon 2025 (
        <span style={{ color: accentColor }}>₹3000 cash prize</span>)
      </>
    ),
    image: vihasanImg,
  },
  {
    icon: <FaStar />,
    text: (
      <>
        <strong style={{ color: accentColor }}>Best Paper Award</strong> -
        DigiTechCON'25 Conference
      </>
    ),
    image:
      "https://whitecloud-solutions.com/wp-content/uploads/2012/10/presentation.png",
  },
  {
    icon: <FaPeopleCarry />,
    text: (
      <>
        <strong style={{ color: accentColor }}>Finalist</strong> - National
        Level Hackathon Advaya 2025
      </>
    ),
    image: avdImg,
  },
  {
    icon: <FaCalendarAlt />,
    text: (
      <>
        Organized{" "}
        <strong style={{ color: accentColor }}>Google DevFest 2024</strong>,
        Salem
      </>
    ),
    image: devImg,
  },
  {
    icon: <FaUserTie />,
    text: (
      <>
        <strong style={{ color: accentColor }}>Treasurer</strong>, Rotaract Club
        of Salem Metropolis (2024–2025)
      </>
    ),
    image:
      "https://sdmcbm.ac.in/wp-content/uploads/2024/09/unnamed-7-1024x768.jpg",
  },
];

function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [inView, setInView] = useState(false); // track if the section is visible
  const timerRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % achievements.length);
    }, 2000);
    return () => clearInterval(timerRef.current);
  }, []);

  // Intersection Observer to detect scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // optional: disconnect after first trigger
        }
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) observer.observe(timelineRef.current);

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = (idx) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setActiveIndex(idx);
  };

  const handleMouseLeave = () => {
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % achievements.length);
    }, 2000);
  };

  const getRotation = (offset) => (offset % 2 === 0 ? 6 : -6);

  return (
    <Container
      fluid
      id="achievements"
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #232329 0%, #1a1a22 100%)",
        padding: "60px 40px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          fontWeight: "700",
          color: accentColor,
          letterSpacing: 2,
          fontSize: "2.2rem",
          position: "relative",
        }}
      >
        Achievements
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

      <div
        ref={timelineRef}
        style={{
          position: "relative",
          maxWidth: "1300px",
          margin: "0 auto",
          display: "flex",
          gap: "60px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Timeline list */}
        <div
          style={{
            flex: "1 1 400px",
            position: "relative",
            paddingLeft: "60px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 30,
              width: "6px",
              height: "100%",
              background: `linear-gradient(0deg, ${accentColor}, transparent)`,
              borderRadius: "3px",
            }}
          />
          {achievements.map(({ icon, text }, idx) => (
            <div
              key={idx}
              onMouseEnter={() => handleMouseEnter(idx)}
              onFocus={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
              tabIndex={0}
              className={inView ? "animate-text" : ""}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                marginBottom: idx !== achievements.length - 1 ? "48px" : 0,
                cursor: "pointer",
                outline: "none",
                color: idx === activeIndex ? "#fff" : "#aaa",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "color 0.4s",
                position: "relative",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  minWidth: 38,
                  height: 38,
                  backgroundColor: idx === activeIndex ? accentColor : "#666",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  boxShadow:
                    idx === activeIndex ? `0 0 12px ${accentColor}80` : "none",
                  fontSize: "18px",
                  flexShrink: 0,
                  transition: "all 0.4s",
                  animation: idx === activeIndex ? "pulse 2s infinite" : "none",
                }}
              >
                {icon}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span>{text}</span>
                {idx === activeIndex && (
                  <span
                    style={{
                      display: "block",
                      height: "4px",
                      marginTop: "4px",
                      borderRadius: "2px",
                      background: `linear-gradient(90deg, transparent, ${accentColor})`,
                      transition: "all 0.4s",
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div
          style={{
            flex: "1 1 400px",
            position: "relative",
            width: "400px",
            height: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "auto",
          }}
        >
          {[2, 1, 0].map((offset, i) => {
            const idx = (activeIndex + offset) % achievements.length;
            const scale = offset === 0 ? 1 : offset === 1 ? 0.96 : 0.92;
            const top = offset === 0 ? 0 : offset === 1 ? 10 : 20;
            const zIndex = 3 - offset;
            return (
              <Card
                key={i}
                style={{
                  width: "400px",
                  height: "250px",
                  boxShadow: `0 5px 18px ${accentColor}${
                    offset === 0 ? "66" : offset === 1 ? "33" : "22"
                  }`,
                  borderRadius: "16px",
                  overflow: "hidden",
                  position: "absolute",
                  top: `${top}px`,
                  left: "50%",
                  transform: `translateX(-50%) rotate(${getRotation(
                    activeIndex + offset
                  )}deg) scale(${scale})`,
                  transition: "all 0.6s ease",
                  zIndex,
                  backgroundColor: "#111",
                  cursor: "pointer",
                }}
                onMouseEnter={() => handleMouseEnter(idx)}
              >
                <Card.Img
                  src={achievements[idx]?.image}
                  alt={`Achievement ${idx}`}
                  style={{ height: "250px", objectFit: "cover" }}
                />
              </Card>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 rgba(253,0,84,0.4); }
          70% { box-shadow: 0 0 12px rgba(253,0,84,0.6); }
          100% { box-shadow: 0 0 0 rgba(253,0,84,0.4); }
        }

        div[tabindex="0"]:focus {
          outline: none;
          background-color: rgba(253,0,84,0.1);
          border-radius: 8px;
        }

        /* Scroll-based entry animation */
        .animate-text span {
          display: inline-block;
          transform: translateX(-50px);
          opacity: 0;
          animation: slideIn 0.8s forwards;
        }

        @keyframes slideIn {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </Container>
  );
}

export default Achievements;
