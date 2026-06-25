function ProjectCard({
  image,
  title,
  description,
  technologies,
  features,
}) {
  return (
    <div
      style={{
        background: "#1e293b",
        borderRadius: "20px",
        overflow: "hidden",
        transition: "0.3s",
        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          padding: "25px",
        }}
      >
        <h2>{title}</h2>

        <p
          style={{
            marginTop: "15px",
            color: "#cbd5e1",
            lineHeight: "1.8",
          }}
        >
          {description}
        </p>

        <h4
          style={{
            marginTop: "20px",
            color: "#38bdf8",
          }}
        >
          Technologies Used
        </h4>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "15px",
          }}
        >
          {technologies.map((tech, index) => (
            <span
              key={index}
              style={{
                background: "#0f172a",
                padding: "8px 14px",
                borderRadius: "20px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <h4
          style={{
            marginTop: "25px",
            color: "#38bdf8",
          }}
        >
          Key Features
        </h4>

        <ul
          style={{
            marginTop: "15px",
            lineHeight: "2",
            color: "#cbd5e1",
          }}
        >
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <button
          style={{
            marginTop: "25px",
            padding: "12px 25px",
            border: "none",
            borderRadius: "10px",
            background: "#38bdf8",
            color: "white",
            cursor: "pointer",
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;