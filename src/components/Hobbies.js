import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import sketchImg from "../asset/father.png"; // <-- Import your image
import creativeImg from "../asset/creative.png";
import readImg from "../asset/read.png";
const hobbies = [
  {
    name: "Sketching",
    img: sketchImg, // example sketching icon
  },
  {
    name: "Creative Designing",
    img: creativeImg, // example design icon
  },
  {
    name: "Bibliophilia",
    img: readImg, // example book icon
  },
];

function Hobbies() {
  return (
    <Container
      id="hobbies"
      fluid
      style={{
        backgroundColor: "#f9f9f9",
        padding: "3rem 1rem",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2
        style={{
          color: "#333",
          textAlign: "center",
          marginBottom: "2rem",
          fontWeight: "700",
          letterSpacing: "2px",
          fontSize: "2rem",
        }}
      >
        Hobbies
        <span
          style={{
            display: "block",
            margin: "6px auto 0",
            width: "50px",
            height: "3px",
            backgroundColor: "#fd0054",
            borderRadius: "2px",
          }}
        />
      </h2>

      <Row className="justify-content-center" style={{ gap: "20px" }}>
        {hobbies.map((hobby, idx) => (
          <Col key={idx} xs={10} sm={6} md={4} lg={3}>
            <Card
              style={{
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                textAlign: "center",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
              }}
            >
              <Card.Img
                variant="top"
                src={hobby.img}
                alt={hobby.name}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                  margin: "0 auto 10px",
                }}
              />
              <Card.Body>
                <Card.Title
                  style={{ fontWeight: 600, fontSize: "1.2rem", color: "#333" }}
                >
                  {hobby.name}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Hobbies;
