import EducationTimeline from "../components/EducationTimeline";

function About() {
  return (
    <div>
      {/* Banner */}
      <section
        style={{
          padding: "100px 80px",
          textAlign: "center",
          background:
            "linear-gradient(135deg,#0f172a,#1e293b)",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
          }}
        >
          About Me
        </h1>

        <p
          style={{
            marginTop: "20px",
            color: "#cbd5e1",
          }}
        >
          Learn more about my journey, education,
          skills and career aspirations.
        </p>
      </section>

      {/* Profile */}
      <section
        style={{
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "50px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt=""
            style={{
              width: "400px",
              borderRadius: "20px",
            }}
          />

          <div style={{ flex: 1 }}>
            <h2>Who Am I?</h2>

            <p
              style={{
                lineHeight: "2",
                marginTop: "20px",
                color: "#cbd5e1",
              }}
            >
              I am Kalyani Manze, a dedicated Computer Engineering
              student with a passion for software development,
              web technologies, and continuous learning.
            </p>

            <p
              style={{
                lineHeight: "2",
                marginTop: "20px",
                color: "#cbd5e1",
              }}
            >
              My academic journey has helped me build strong
              foundations in programming, data structures,
              databases, operating systems, and software engineering.
            </p>

            <p
              style={{
                lineHeight: "2",
                marginTop: "20px",
                color: "#cbd5e1",
              }}
            >
              I enjoy solving problems, developing projects,
              and exploring innovative technologies that can
              positively impact people's lives.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Journey */}
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
          }}
        >
          Academic Journey
        </h2>

        <p
          style={{
            marginTop: "30px",
            lineHeight: "2",
            color: "#cbd5e1",
            textAlign: "center",
            maxWidth: "900px",
            marginInline: "auto",
          }}
        >
          Throughout my educational journey, I have consistently
          focused on building strong technical knowledge while
          participating in practical learning experiences and
          project-based development.
        </p>
      </section>

      {/* Education Timeline */}
      <EducationTimeline />

      {/* Technical Skills */}
      <section
        style={{
          padding: "80px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "42px",
          }}
        >
          Technical Skills
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
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React JS</p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            <h3>Backend</h3>
            <p>Node JS, Express JS</p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            <h3>Database</h3>
            <p>MongoDB, MySQL</p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            <h3>Programming</h3>
            <p>C, C++, Java, Python</p>
          </div>
        </div>
      </section>

      {/* Hobbies */}
      <section
        style={{
          padding: "80px",
          background: "#111827",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Interests & Hobbies
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "auto",
            lineHeight: "2",
            textAlign: "center",
            color: "#cbd5e1",
          }}
        >
          Cooking, reading technology blogs, exploring new
          programming languages, participating in coding
          challenges, designing websites, and learning
          emerging technologies.
        </p>
      </section>
    </div>
  );
}

export default About;