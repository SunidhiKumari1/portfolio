import profile from "./profile.jpeg";

export default function Home() {
  return (
    <section
      id="home"
      className="d-flex align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#151515",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left */}
          <div className="col-lg-6 text-white">
            <h5 className="text-info fw-bold">Hello, I'm</h5>

            <h1 className="display-3 fw-bold" style={{ letterSpacing: "1px" }}>
              Sunidhi Kumari
            </h1>

            <h3 className="mb-4">
              Aspiring <span className="text-info">Software Engineer</span>
            </h3>

            <p className="text-light fs-5">
              Computer Science student at NIT Patna passionate about Full Stack
              Development, Problem Solving, and building scalable applications
              using modern technologies.
            </p>

            {/* Social Icons */}
            <div className="d-flex justify-content-center justify-content-lg-start gap-3 flex-wrap mt-4">
              <div className="social-icons mt-4">
                <a
                  href="https://github.com/SunidhiKumari1"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <i className="bi bi-github"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/sunidhi-kumari-b91587274/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <i className="bi bi-linkedin"></i>
                </a>

                <a href="mailto:sunidhik471@gmail.com" className="social-icon">
                  <i className="bi bi-envelope-fill"></i>
                </a>
              </div>
            </div>
            <a
              href="/resume.pdf"
              className="btn btn-info btn-lg mt-5 px-4"
              download
            >
              Download Resume
            </a>
          </div>

          {/* Right */}

          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <div className="profile-image">
              <img
                src={profile}
                alt="Sunidhi"
                className="img-fluid rounded-circle "
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "360px",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  boxShadow: "0 0 20px 3px #00d9ff",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
