//import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px",
        flexWrap: "wrap",
      }}
    >
      <div style={{ maxWidth: "600px" }}>
        <p
          style={{
            color: "#38bdf8",
            fontSize: "20px",
          }}
        >
          Computer Engineering Student
        </p>

        <h1
          style={{
            fontSize: "70px",
            marginTop: "20px",
            lineHeight: "1.2",
          }}
        >
          Hi, I'm
          <br />
          Kalyani Manze
        </h1>

        <p
          style={{ 
            marginTop: "25px",
            lineHeight: "1.8",
            color: "#cbd5e1",
          }}
        >
          Passionate Computer Engineering student with expertise in
          web development, programming, software engineering, and
          emerging technologies. Dedicated to building innovative
          digital solutions and continuously expanding technical
          knowledge.
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "20px",
          }}
        >
          <button
            style={{
              padding: "14px 30px",
              border: "none",
              borderRadius: "10px",
              background: "#38bdf8",
              color: "white",
              cursor: "pointer",
            }}
          >
            View Projects
          </button>

          <button
            style={{
              padding: "14px 30px",
              borderRadius: "10px",
              border: "1px solid white",
              background: "transparent",
              color: "white",
              cursor: "pointer",
            }}
          >
            Contact Me
          </button>
        </div>
      </div>


      
    </section>
  );
}

export default Hero;