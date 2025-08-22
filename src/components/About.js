import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import profilePic from "/Users/venkateshsr/Desktop/portfolio/src/components/asset/new4.png"; // <-- Import your image

const backgroundColor = "#232329";
const textColor = "#fff";
const accentColor = "#fd0054";

function BlobImage() {
  return (
    <svg
      width="340"
      height="300"
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
          href={profilePic} // <-- Use imported image
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
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <Container>
        <h2
          style={{
            marginBottom: "2rem",
            fontWeight: "700",
            color: accentColor,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          About Me
        </h2>
        <Row className="align-items-center">
          <Col
            md={5}
            className="mb-4 mb-md-0"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <BlobImage />
          </Col>
          <Col
            md={7}
            style={{
              textAlign: "justify",
              fontSize: "1.18rem",
              lineHeight: 1.7,
              paddingLeft: "2rem",
            }}
          >
            <p>
              I’m an{" "}
              <strong style={{ color: accentColor }}>
                Artificial Intelligence
              </strong>{" "}
              and <strong style={{ color: accentColor }}>Data Science</strong>{" "}
              enthusiast passionate about transforming data into actionable
              insights and innovative solutions. With solid expertise in{" "}
              <strong style={{ color: accentColor }}>
                machine learning, analytics, and full-stack development
              </strong>
              , I strive to build impactful projects that deliver real-world
              value.
            </p>
            <p>
              My journey spans diverse projects, from AI-powered traffic
              violation detection systems enhancing road safety to smart
              healthcare management tools optimizing patient care. I’m driven by
              curiosity, collaboration, and a passion for continuous learning.
            </p>
            <p>
              Outside of programming,{" "}
              <strong style={{ color: accentColor }}>
                sketching and creative design
              </strong>{" "}
              inspire me to bring creativity and empathy into technology. Let’s
              connect and build transformative experiences together.
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}
