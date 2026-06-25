import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      <h2
        style={{
          color: "#38bdf8",
        }}
      >
        Kalyani Manze
      </h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          Home
        </Link>

        <Link style={{ color: "white", textDecoration: "none" }} to="/about">
          About
        </Link>

        <Link
          style={{ color: "white", textDecoration: "none" }}
          to="/projects"
        >
          Projects
        </Link>

        <Link
          style={{ color: "white", textDecoration: "none" }}
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;