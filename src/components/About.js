import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import profilePic from "../assets/new4.png";

const backgroundColor = "#232329";
const textColor = "#fff";
const accentColor = "#fd0054";

function BlobImage({ width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 187"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", margin: "auto" }}
    >
      <mask id="mask0" mask-type="alpha">
        <path
          d="M190.312 36.4879C206.582 62.1187 201.309 
             102.826 182.328 134.186C163.346 165.547 
             130.807 187.559 100.226 186.353C69.6454 
             185.297 41.0228 161.023 21.7403 129.362C2.45775 
             97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 
             10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 
             0.303176 174.193 10.857 190.312 36.4879Z"
          fill="#ffffff"
        />
      </mask>
      <g mask="url(#mask0)">
        <path
          d="M190.312 36.4879C206.582 62.1187 201.309 
             102.826 182.328 134.186C163.346 165.547 
             130.807 187.559 100.226 186.353C69.6454 
             185.297 41.0228 161.023 21.7403 129.362C2.45775 
             97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 
             10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 
             0.303176 174.193 10.857 190.312 36.4879Z"
          fill={accentColor}
        />
        <image
          x="-79"
          y="-46"
          width="350"
          height="280"
          href={profilePic}
          preserveAspectRatio="xMidYMid slice"
          alt="Profile"
        />
      </g>
    </svg>
  );
}

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="about"
      className="py-5"
      style={{ backgroundColor, color: textColor }}
    >
      <Container>
        <h2
          style={{
            marginBottom: "2.5rem",
            fontWeight: "700",
            color: accentColor,
            letterSpacing: 2,
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          About Me
        </h2>

        <Row className="align-items-center">
          {/* Image Column */}
          <Col
            xs={12}
            md={5} // image slightly smaller on MD
            className="mb-4 mb-md-0"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BlobImage width="280" height="250" />
          </Col>

          {/* Text Column */}
          <Col
            xs={12}
            md={7} // text column proportionally bigger
            style={{
              textAlign: "center", // small screens
              fontSize: "clamp(0.95rem, 1vw + 0.5rem, 1.2rem)",
              lineHeight: 1.8,
              padding: "0 1rem",
              maxWidth: "650px",
              margin: "0 auto",
            }}
            className="text-md-start px-md-3"
          >
            <p style={{ marginBottom: "1rem" }}>
              I’m an{" "}
              <strong style={{ color: accentColor }}>
                Artificial Intelligence
              </strong>{" "}
              and <strong style={{ color: accentColor }}>Data Science</strong>{" "}
              enthusiast passionate about transforming data into actionable
              insights and innovative solutions.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              With solid expertise in{" "}
              <strong style={{ color: accentColor }}>
                machine learning, analytics, and full-stack development
              </strong>
              , I strive to build impactful projects that deliver real-world
              value.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              My journey spans diverse projects, from AI-powered traffic
              violation detection systems enhancing road safety to smart
              healthcare management tools optimizing patient care.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              I’m driven by curiosity, collaboration, and a passion for
              continuous learning. Outside of programming,{" "}
              <strong style={{ color: accentColor }}>
                sketching and creative design
              </strong>{" "}
              inspire me to bring creativity and empathy into technology.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Let’s connect and build transformative experiences together.
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}
