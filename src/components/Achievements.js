import React, { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";
import {
  FaTrophy,
  FaMedal,
  FaStar,
  FaPeopleCarry,
  FaCalendarAlt,
  FaUserTie,
} from "react-icons/fa";

import vihasanImg from "../assets/vihasan.JPG";
import hackImg from "../assets/hack.JPG";
import avdImg from "../assets/avd.JPG";
import devImg from "../assets/dev.jpg";

const accentColor = "#fd0054";

const achievements = [
  {
    icon: <FaTrophy />,
    text: "HackXelerators Award - HackXelerate 2025 (₹2000 cash prize)",
    note: "HackXelerators ✨",
    highlight: ["HackXelerators Award", "₹2000 cash prize"],
    image: hackImg,
  },
  {
    icon: <FaMedal />,
    text: "Best Project Award - Vihansa Hackathon 2025 (₹3000 cash prize)",
    note: "Vihansa Winner 🏅",
    highlight: ["Best Project Award", "₹3000 cash prize"],
    image: vihasanImg,
  },
  {
    icon: <FaStar />,
    text: "Best Paper Award - DigiTechCON'25 Conference",
    note: "Published 📃",
    highlight: ["Best Paper Award"],
    image:
      "https://sdmcbm.ac.in/wp-content/uploads/2024/09/unnamed-7-1024x768.jpg",
  },
  {
    icon: <FaPeopleCarry />,
    text: "Finalist - National Level Hackathon Advaya 2025",
    note: "Top Finalist 💡",
    highlight: ["Finalist"],
    image: avdImg,
  },
  {
    icon: <FaCalendarAlt />,
    text: "Organized Google DevFest 2024, Salem",
    note: "Organizer 🔥",
    highlight: ["Google DevFest 2024"],
    image: devImg,
  },
  {
    icon: <FaUserTie />,
    text: "Treasurer, Rotaract Club of Salem Metropolis (2024–2025)",
    note: "Leadership 🧩",
    highlight: ["Treasurer"],
    image:
      "https://sdmcbm.ac.in/wp-content/uploads/2024/09/unnamed-7-1024x768.jpg",
  },
];

function highlightText(text, words) {
  let newStr = text;
  words.forEach((word) => {
    newStr = newStr.replace(
      word,
      `<span style="color:${accentColor}; font-weight:700">${word}</span>`
    );
  });
  return newStr;
}

function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(timerRef.current);
  }, []);

  const startAutoSlide = () => {
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % achievements.length);
    }, 2200);
  };

  const stopAutoSlide = () => clearInterval(timerRef.current);

  return (
    <Container
      id="achievements"
      fluid
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #232329, #1a1a22)",
        fontFamily: "'Poppins', sans-serif",
        padding: "70px 42px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "3.2rem",
          fontWeight: 700,
          fontSize: "2.3rem",
          color: accentColor,
          letterSpacing: "1.5px",
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
            display: "block",
            width: "75px",
            height: "3px",
            backgroundColor: accentColor,
            borderRadius: "2px",
          }}
        />
      </h2>

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "flex",
          gap: "65px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Timeline Text */}
        <div
          style={{
            flex: "1 1 420px",
            paddingLeft: "55px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 28,
              width: "6px",
              height: "100%",
              background: `linear-gradient(0deg, ${accentColor}, transparent)`,
              borderRadius: "3px",
            }}
          />

          {achievements.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => {
                stopAutoSlide();
                setActiveIndex(idx);
              }}
              onMouseLeave={startAutoSlide}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "22px",
                marginBottom: idx !== achievements.length - 1 ? "44px" : "0px",
                cursor: "pointer",
                color: idx === activeIndex ? "#fff" : "#9c9c9c",
                fontWeight: 600,
                transition: "color .4s ease",
              }}
            >
              <div
                style={{
                  minWidth: 36,
                  height: 36,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: idx === activeIndex ? accentColor : "#555",
                  color: "#fff",
                  fontSize: "17px",
                  transition: "all .35s",
                  boxShadow:
                    idx === activeIndex ? `0 0 12px ${accentColor}70` : "none",
                }}
              >
                {item.icon}
              </div>

              <span
                style={{ lineHeight: "1.35rem", fontSize: "0.97rem" }}
                dangerouslySetInnerHTML={{
                  __html: highlightText(item.text, item.highlight),
                }}
              />
            </div>
          ))}
        </div>

        {/* Polaroid Stack With Handwritten Note */}
        <div
          className="polaroid-stack"
          style={{
            flex: "1 1 420px",
            position: "relative",
            height: "310px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {[2, 1, 0].map((offset, i) => {
            const idx = (activeIndex + offset) % achievements.length;
            const rotate = offset === 1 ? -4 : offset === 2 ? 5 : 0;

            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "88%",
                  maxWidth: "360px",
                  background: "#fff",
                  borderRadius: "6px",
                  padding: "10px 10px 14px",
                  boxShadow:
                    offset === 0
                      ? "0 8px 24px rgba(0,0,0,0.45)"
                      : "0 5px 14px rgba(0,0,0,0.28)",
                  transform: `translateX(-50%) rotate(${rotate}deg)`,
                  left: "50%",
                  top: offset * 14,
                  transition: "all .5s",
                  zIndex: 10 - offset,
                  cursor: "pointer",
                }}
              >
                <img
                  src={achievements[idx].image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "210px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
                <div
                  style={{
                    fontFamily: "'Handlee', cursive",
                    fontSize: "1rem",
                    color: "#222",
                    marginTop: "6px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: offset === 0 ? 1 : 0.45,
                  }}
                >
                  📌 {achievements[idx].note}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');

        @media (max-width: 768px) {
          span {
            font-size: .85rem !important;
          }
          .polaroid-stack {
            height: 260px !important;
          }
          .polaroid-stack img {
            height: 180px !important;
          }
        }
      `}</style>
    </Container>
  );
}

export default Achievements;
