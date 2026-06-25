import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "AI Medical Translation Platform",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      description:
        "A healthcare communication platform that helps doctors and patients communicate using AI-powered language translation.",

      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
      ],

      features: [
        "Multi-language support",
        "Medical terminology translation",
        "Responsive design",
        "User-friendly dashboard",
      ],
    },

    {
      title: "Student Management System",

      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

      description:
        "Web application for managing student records, attendance and academic information.",

      technologies: [
        "React",
        "Node.js",
        "MySQL",
      ],

      features: [
        "Student profiles",
        "Attendance management",
        "Marks tracking",
        "Reports generation",
      ],
    },

    {
      title: "Smart Attendance System",

      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",

      description:
        "Automated attendance system using modern technologies for educational institutions.",

      technologies: [
        "React",
        "Python",
        "MongoDB",
      ],

      features: [
        "Attendance tracking",
        "Analytics dashboard",
        "Automated reports",
        "Real-time updates",
      ],
    },

    {
      title: "Weather Forecast Application",

      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",

      description:
        "Responsive weather forecasting application with live weather updates.",

      technologies: [
        "React",
        "API",
        "CSS",
      ],

      features: [
        "Live weather",
        "Location search",
        "Forecast reports",
        "Responsive design",
      ],
    },

    {
      title: "Portfolio Website",

      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",

      description:
        "Personal portfolio website showcasing projects, skills, education and achievements.",

      technologies: [
        "React",
        "JavaScript",
        "CSS",
      ],

      features: [
        "Responsive design",
        "Modern UI",
        "Project showcase",
        "Contact section",
      ],
    },

    {
      title: "E-Learning Platform",

      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f",

      description:
        "Online learning platform providing courses, assignments and progress tracking.",

      technologies: [
        "React",
        "Node.js",
        "MongoDB",
      ],

      features: [
        "Course management",
        "Assignments",
        "Progress tracking",
        "Student dashboard",
      ],
    },
  ];

  return (
    <div>
      {/* Banner Section */}

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
          My Projects
        </h1>

        <p
          style={{
            marginTop: "20px",
            color: "#cbd5e1",
            maxWidth: "900px",
            marginInline: "auto",
            lineHeight: "1.8",
          }}
        >
          Explore some of my academic and personal projects
          demonstrating my technical skills, creativity,
          and passion for software development.
        </p>
      </section>

      {/* Projects Grid */}

      <section
        style={{
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(350px,1fr))",
            gap: "30px",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              technologies={project.technologies}
              features={project.features}
            />
          ))}
        </div>
      </section>

      {/* Project Summary */}

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
          What I Learned
        </h2>

        <p
          style={{
            marginTop: "30px",
            maxWidth: "900px",
            marginInline: "auto",
            textAlign: "center",
            lineHeight: "2",
            color: "#cbd5e1",
          }}
        >
          Through these projects, I have gained valuable
          experience in front-end development, database
          management, problem-solving, software design,
          teamwork, and modern development practices.
        </p>
      </section>
    </div>
  );
}

export default Projects;