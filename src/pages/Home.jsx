import Hero from "../components/Hero";
import Skills from "../components/Skills";
import EducationTimeline from "../components/EducationTimeline";

function Home() {
  return (
    <>
      <Hero />

      {/* About Preview */}
      <section
        style={{
          padding: "80px",
          background: "#111827",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          About Me
        </h2>

        <div
          style={{
            display: "flex",
            gap: "50px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt=""
            style={{
              width: "450px",
              borderRadius: "20px",
            }}
          />

          <div style={{ flex: 1 }}>
            
            <p
              style={{ 
                lineHeight: "2",
                color: "#cbd5e1",
    
              }}
            >
              I am Kalyani Manze, a Computer Engineering student passionate
              about software development, web technologies, and innovation.
              My goal is to create impactful digital solutions while
              continuously improving my technical and professional skills.
            </p>

            <p
              style={{
                marginTop: "20px",
                lineHeight: "2",
                color: "#cbd5e1",
              }}
            >
              I enjoy working on real-world projects that challenge my
              creativity and problem-solving abilities. My interests include
              full-stack development, UI/UX design, artificial intelligence,
              cloud computing, and software engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Career Objective */}
      <section
        style={{
          padding: "80px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "42px",
          }}
        >
          Career Objective
        </h2>

        <p
          style={{
            marginTop: "30px",
            lineHeight: "2",
            textAlign: "center",
            maxWidth: "900px",
            marginInline: "auto",
            color: "#cbd5e1",
          }}
        >
          To obtain a challenging position in the field of software
          development where I can apply my technical knowledge,
          creativity, and dedication while contributing to innovative
          projects and organizational growth.
        </p>
      </section>

      {/* Skills */}
      <Skills />

      {/* Education */}
      <EducationTimeline />

      {/* Achievements */}
      <section
        style={{
          padding: "80px",
          background: "#111827",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "40px",
          }}
        >
          Achievements
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          <div
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <h3>Academic Excellence</h3>
            <p style={{ marginTop: "15px" }}>
              Consistently performed well in engineering academics and
              technical activities.
            </p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <h3>Web Development Projects</h3>
            <p style={{ marginTop: "15px" }}>
              Developed multiple responsive websites using modern
              technologies.
            </p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <h3>Technical Learning</h3>
            <p style={{ marginTop: "15px" }}>
              Continuously learning new technologies and frameworks.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;