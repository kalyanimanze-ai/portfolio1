function Contact() {
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
          Contact Me
        </h1>

        <p
          style={{
            marginTop: "20px",
            color: "#cbd5e1",
            maxWidth: "800px",
            marginInline: "auto",
          }}
        >
          Feel free to reach out for collaboration,
          internships, projects, or networking opportunities.
        </p>
      </section>

      {/* Contact Section */}

      <section
        style={{
          padding: "80px",
          display: "flex",
          gap: "50px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Contact Form */}

        <div
          style={{
            flex: "1",
            minWidth: "350px",
            background: "#1e293b",
            padding: "40px",
            borderRadius: "20px",
          }}
        >
          <h2>Send Message</h2>

          <form>
            <input
              type="text"
              placeholder="Your Name"
              style={{
                width: "100%",
                padding: "15px",
                marginTop: "20px",
                borderRadius: "10px",
                border: "none",
              }}
            />

            <input
              type="email"
              placeholder="Your Email"
              style={{
                width: "100%",
                padding: "15px",
                marginTop: "20px",
                borderRadius: "10px",
                border: "none",
              }}
            />

            <input
              type="text"
              placeholder="Subject"
              style={{
                width: "100%",
                padding: "15px",
                marginTop: "20px",
                borderRadius: "10px",
                border: "none",
              }}
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              style={{
                width: "100%",
                padding: "15px",
                marginTop: "20px",
                borderRadius: "10px",
                border: "none",
              }}
            />

            <button
              style={{
                marginTop: "20px",
                padding: "15px 30px",
                background: "#38bdf8",
                border: "none",
                borderRadius: "10px",
                color: "white",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}

        <div
          style={{
            flex: "1",
            minWidth: "350px",
          }}
        >
          <div
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "20px",
              marginBottom: "20px",
            }}
          >
            <h3>Email</h3>

            <p
              style={{
                marginTop: "10px",
                color: "#cbd5e1",
              }}
            >
              kalyani@example.com
            </p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "20px",
              marginBottom: "20px",
            }}
          >
            <h3>Phone</h3>

            <p
              style={{
                marginTop: "10px",
                color: "#cbd5e1",
              }}
            >
              +91 XXXXX XXXXX
            </p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "20px",
              marginBottom: "20px",
            }}
          >
            <h3>Location</h3>

            <p
              style={{
                marginTop: "10px",
                color: "#cbd5e1",
              }}
            >
              Maharashtra, India
            </p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h3>Connect With Me</h3>

            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "15px",
              }}
            >
              <button
                style={{
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                LinkedIn
              </button>

              <button
                style={{
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                GitHub
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <section
        style={{
          padding: "80px",
          textAlign: "center",
          background: "#111827",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
          }}
        >
          Let's Build Something Amazing Together
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#cbd5e1",
            maxWidth: "800px",
            marginInline: "auto",
            lineHeight: "1.8",
          }}
        >
          I am always open to discussing innovative ideas,
          exciting projects, internships, and opportunities
          that help me grow as a software developer.
        </p>
      </section>
    </div>
  );
}

export default Contact;