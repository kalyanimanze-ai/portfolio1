function EducationTimeline() {
  const education = [
    {
      year: "2019 - 2020",
      title: "SSC",
      school: "Secondary School",
      description:
        "Successfully completed Secondary School education with a strong academic foundation in Mathematics, Science, and Computer fundamentals.",
    },

    {
      year: "2021 - 2022",
      title: "HSC",
      school: "Higher Secondary Education",
      description:
        "Completed Higher Secondary education with focus on Science and Technology subjects, building analytical and problem-solving skills.",
    },

    {
      year: "2023 - Present",
      title: "B.E. Computer Engineering",
      school: "Computer Engineering",
      description:
        "Currently pursuing Bachelor of Engineering in Computer Engineering with focus on Software Development, Web Technologies, Databases, Artificial Intelligence and Cloud Computing.",
    },
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
          fontSize: "42px",
          marginBottom: "50px",
        }}
      >
        Education Timeline
      </h2>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        {education.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "20px",
              marginBottom: "25px",
              borderLeft: "6px solid #38bdf8",
            }}
          >
            <h4
              style={{
                color: "#38bdf8",
              }}
            >
              {item.year}
            </h4>

            <h2
              style={{
                marginTop: "10px",
              }}
            >
              {item.title}
            </h2>

            <h4
              style={{
                marginTop: "10px",
                color: "#cbd5e1",
              }}
            >
              {item.school}
            </h4>

            <p
              style={{
                marginTop: "15px",
                lineHeight: "1.8",
                color: "#cbd5e1",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationTimeline;