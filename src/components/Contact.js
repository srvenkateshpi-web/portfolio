import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
} from "react-icons/fa";

const accentColor = "#fd0054";

const socialButtons = [
  { icon: <FaEnvelope />, href: "mailto:subernasrajaram@gmail.com" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/suberna-rajaram" },
  { icon: <FaGithub />, href: "https://github.com/Suberna" },
  {
    icon: <FaFileDownload />,
    href: "/Suberna_Rajaram_Resume.pdf",
    download: true,
  },
];

const quickLinks = [
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Hobbies", href: "#hobbies" },
  { name: "Contact", href: "#contact" },
];

function Contact() {
  return (
    <section className="bg-dark text-white mt-5 pt-5" id="contact">
      <Container>
        <h2
          style={{
            color: accentColor,
            textAlign: "center",
            marginBottom: "0.5rem",
          }}
        >
          Let's Connect
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#b0bec5",
            marginBottom: "2rem",
          }}
        >
          "Great ideas start with a conversation. Drop a message and let's
          collaborate!"
        </p>

        <Row className="justify-content-between">
          {/* Social Icons */}
          <Col md={3} className="mb-3">
            <h5>Find Me</h5>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {socialButtons.map((btn, idx) => (
                <a
                  key={idx}
                  href={btn.href}
                  download={btn.download || false}
                  target={btn.href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  style={{
                    background: "#18181b",
                    borderRadius: 8,
                    color: "#fff",
                    fontSize: 24,
                    width: 48,
                    height: 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 6px 0 #0002",
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = accentColor)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "#18181b")
                  }
                >
                  {btn.icon}
                </a>
              ))}
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={3} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="nav flex-column">
              {quickLinks.map((link, idx) => (
                <li key={idx} className="nav-item mb-2">
                  <a
                    href={link.href}
                    style={{
                      color: accentColor,
                      textDecoration: "none",
                      fontSize: "1.1rem",
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact Form */}
          <Col md={5} className="mb-3">
            <h5>Send a Message</h5>
            <Form>
              <Form.Group className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  style={{
                    backgroundColor: "#232329",
                    color: "#fff",
                    border: `1px solid ${accentColor}`,
                    borderRadius: 4,
                    padding: "6px",
                  }}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  style={{
                    backgroundColor: "#232329",
                    color: "#fff",
                    border: `1px solid ${accentColor}`,
                    borderRadius: 4,
                    padding: "6px",
                  }}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Your Message"
                  style={{
                    backgroundColor: "#232329",
                    color: "#fff",
                    border: `1px solid ${accentColor}`,
                    borderRadius: 4,
                    padding: "6px",
                  }}
                  required
                />
              </Form.Group>
              <Button
                type="submit"
                style={{
                  backgroundColor: accentColor,
                  border: "none",
                  width: "100%",
                }}
              >
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>

        <hr className="border-white-50 my-4" />

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
          <p className="mb-2 mb-sm-0">
            © 2025 Suberna R S. All Rights Reserved.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
