import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import sketchImg from "../assets/father.png";
import creativeImg from "../assets/creative.png";
import readImg from "../assets/read.png";

const hobbies = [
  { name: "Sketching", img: sketchImg },
  { name: "Creative Designing", img: creativeImg },
  { name: "Bibliophilia", img: readImg },
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

      <Row className="justify-content-center hobby-row" style={{ gap: "20px" }}>
        {hobbies.map((hobby, idx) => (
          <Col key={idx} xs={4} sm={4} md={4} lg={3}>
            <Card
              className="hobby-card"
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
                className="hobby-img"
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                  margin: "0 auto 10px",
                }}
              />
              <Card.Body>
                <Card.Title
                  className="hobby-title"
                  style={{
                    fontWeight: 600,
                    fontSize: "1.2rem",
                    color: "#333",
                  }}
                >
                  {hobby.name}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Small screen adjustments only */}
      <style>
        {`
  @media (max-width: 576px) {
    .hobby-card {
      padding: 6px !important; /* reduce padding */
    }
    .hobby-img {
      width: 35px !important;
      height: 35px !important;
    }
    .hobby-title {
      font-size: 0.45rem !important; /* small enough to fit one line */
      white-space: nowrap !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
    }
    .hobby-row {
      display: flex !important;
      flex-wrap: nowrap !important;
      justify-content: center !important;
      gap: 5px !important; /* smaller gap for better fit */
    }
    .hobby-row > .col-4 {
      flex: 1 1 auto !important;
      max-width: calc(33.333% - 5px) !important; /* adjust for gap */
    }
  }
`}
      </style>
    </Container>
  );
}

export default Hobbies;
