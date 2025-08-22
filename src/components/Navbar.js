import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import logo from "/Users/venkateshsr/Desktop/portfolio/src/components/asset/logo.JPG"; // Adjust the path as needed

const accentColor = "#fd0054";

function Navigation() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShrink(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{
        background: shrink ? "rgba(35,35,41,0.7)" : "#232329",
        boxShadow: shrink
          ? "0 2px 6px rgba(253,0,84,0.07)"
          : "0 3px 12px rgba(253,0,84,0.08)",
        borderRadius: shrink ? "0 0 10px 10px" : "0",
        backdropFilter: shrink ? "blur(10px)" : "none",
        fontFamily: "Poppins, sans-serif",
        border: "none",
        minHeight: shrink ? 48 : 65,
        transition:
          "min-height 0.3s, border-radius 0.2s, box-shadow 0.2s, background 0.2s",
        width: "100vw",
        left: 0,
        position: "sticky",
        top: 0,
        zIndex: 1030,
        paddingLeft: 24,
        paddingRight: 24,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Brand on the left with logo image */}
      <Navbar.Brand
        href="#home"
        style={{
          fontWeight: 600,
          letterSpacing: 1.5,
          color: accentColor,
          fontSize: shrink ? "0.95rem" : "1.2rem",
          display: "flex",
          alignItems: "center",
          gap: 12,
          textShadow: shrink ? "none" : "0 2px 10px rgba(253,0,84,0.15)",
          transition: "font-size 0.25s, text-shadow 0.25s",
          padding: shrink ? "1px 0" : "4px 0",
          marginLeft: 0,
        }}
      >
        {/* Circle wrapper for logo */}
        <div
          style={{
            backgroundColor: accentColor,
            borderRadius: "50%",
            width: shrink ? 32 : 40,
            height: shrink ? 32 : 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: `0 0 8px ${accentColor}88`,
            transition: "all 0.25s",
            flexShrink: 0,
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover", // Fills the container, cropping if necessary
              borderRadius: "50%", // Keeps image round inside the circle container
              transition: "height 0.25s",
            }}
          />
        </div>
        Suberna R S
      </Navbar.Brand>

      {/* Nav links on the right */}
      <Nav
        style={{
          gap: shrink ? "6px" : "12px",
          alignItems: "center",
          marginTop: shrink ? 0 : 2,
          marginBottom: shrink ? 0 : 2,
          transition: "gap 0.25s, margin 0.2s",
          display: "flex",
        }}
      >
        {[
          ["home", "Home"],
          ["about", "About"],
          ["skills", "Skills"],
          ["projects", "Projects"],
          ["achievements", "Achievements"],
          ["experience", "Experience"],
          ["education", "Education"],
          ["hobbies", "Hobbies"],
          ["contact", "Contact"],
        ].map(([to, label]) => (
          <Link
            key={to}
            to={to}
            smooth={true}
            duration={400}
            className="nav-link nav-glass-link"
            style={{
              position: "relative",
              fontWeight: shrink ? 500 : 600,
              letterSpacing: 0.8,
              fontSize: shrink ? "0.82rem" : "0.95rem",
              cursor: "pointer",
              color: "#fff",
              border: "none",
              borderRadius: shrink ? "8px" : "999px",
              padding: shrink ? "3px 8px" : "5px 11px",
              transition:
                "background 0.25s, color 0.2s, border-radius 0.25s, padding 0.25s, font-size 0.25s",
              zIndex: 1,
              minWidth: 58,
              textAlign: "center",
              boxShadow: shrink ? "none" : "0 3px 12px rgba(253,0,84,0.05)",
              margin: "0 1px",
              backdropFilter: shrink ? "none" : "blur(2px)",
            }}
            activeClass="active"
            spy={true}
            href="#"
          >
            {label}
          </Link>
        ))}
      </Nav>

      {/* Hover / Active effect */}
      <style>{`
        .nav-glass-link {
          background: transparent;
        }
        .nav-glass-link:hover, 
        .nav-glass-link.active {
          background: linear-gradient(90deg, ${accentColor}BB 0%, #fff0 100%);
          color: #fff !important;
          box-shadow: 0 2px 10px ${accentColor}35;
        }
        .nav-glass-link:active {
          background: ${accentColor};
          color: #fff !important;
        }
      `}</style>
    </Navbar>
  );
}

export default Navigation;
