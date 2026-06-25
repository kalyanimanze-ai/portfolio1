function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Node JS",
    "Express JS",
    "MongoDB",
    "MySQL",
    "Python",
    "Java",
    "C",
    "C++",
  ];

  return (
    <section
      style={{
        padding: "80px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
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
          marginTop: "50px",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "15px",
              transition: "0.3s",
            }}
          >
            <h3>{skill}</h3>

            <div
              style={{
                height: "10px",
                background: "#334155",
                marginTop: "15px",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  width: "85%",
                  height: "100%",
                  background: "#38bdf8",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;