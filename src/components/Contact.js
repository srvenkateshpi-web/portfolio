import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
} from "react-icons/fa";
import resumePDF from "../assets/resume.pdf";

const accentColor = "#fd0054";

const socialButtons = [
  { icon: <FaEnvelope />, href: "mailto:subernasrajaram@gmail.com" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/suberna-rajaram" },
  { icon: <FaGithub />, href: "https://github.com/Suberna" },
  { icon: <FaFileDownload />, href: resumePDF },
];

const quickLinks = [
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Hobbies", href: "#hobbies" },
  { name: "Contact", href: "#contact" },
];

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "39c6c64a-fe05-4ae5-804a-ab182f538d03"); // << replace with your key

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setStatus("✔ Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("❌ Something went wrong. Please try again.");
    }
  };

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
          {/* Social Buttons */}
          <Col md={3} className="mb-3">
            <h5>Find Me</h5>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {socialButtons.map((btn, idx) => (
                <a
                  key={idx}
                  href={btn.href}
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

          {/* Contact Form (updated) */}
          <Col md={5} className="mb-3">
            <h5>Send a Message</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-2">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
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
                  name="email"
                  placeholder="Enter your email address"
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
                  name="message"
                  rows={3}
                  placeholder="Type your message here"
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

            {status && (
              <p style={{ marginTop: "10px", color: accentColor }}>{status}</p>
            )}
          </Col>
        </Row>

        <hr className="border-white-50 my-4" />
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
          <p className="mb-2 mb-sm-0">
            © 2025 Suberna R S. All Rights Reserved.
          </p>
        </div>
      </Container>

      <style>
        {`
          ::placeholder {
            color: #b0bec5 !important;
            opacity: 1;
          }
        `}
      </style>
    </section>
  );
}

export default Contact;
