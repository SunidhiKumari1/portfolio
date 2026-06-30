import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f172a,#1e293b)",
        color: "white",
      }}
    >
      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold">
            About <span className="text-info">Me</span>
          </h2>
          <div
            className="mx-auto mt-3 mb-3"
            style={{
              width: "170px",
              height: "4px",
              background: "#00d9ff",
              borderRadius: "20px",
            }}
          ></div>
          <p
  className="text-light mx-auto mb-3"
>
  I am Sunidhi Kumari, a final-year Dual Degree student in
   Computer Science & Engineering with Data Science at
   NIT Patna. I am passionate about software engineering and enjoy
  transforming ideas into responsive, scalable, and user-friendly applications.
</p>
          
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">

            <div
              className="p-4 rounded-4 shadow-lg"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(13,202,240,.3)",
                backdropFilter: "blur(10px)",
              }}
            >

              <div className="row gy-3">

                <div className="col-md-6">
  <div className="d-flex flex-wrap align-items-center">
    <strong className="text-info me-2">🎓 Degree:</strong>
    <span className="text-light">
      Dual Degree (CSE with Data Science)
    </span>
  </div>
</div>

                <div className="col-md-6">
  <div className="d-flex flex-wrap align-items-center">
    <strong className="text-info me-2">🏫 College:</strong>
    <span className="text-light">NIT Patna</span>
  </div>
</div>

<div className="col-md-6">
  <div className="d-flex flex-wrap align-items-center">
    <strong className="text-info me-2">💻 Languages:</strong>
    <span className="text-light">C++, JavaScript, Python</span>
  </div>
</div>

<div className="col-md-6">
  <div className="d-flex flex-wrap align-items-center">
    <strong className="text-info me-2">⚙️ Tools & Technologies:</strong>
    <span className="text-light">
      MERN Stack, Tailwind CSS, MySQL, Git, Github
    </span>
  </div>
</div>

<div className="col-md-6">
  <div className="d-flex flex-wrap align-items-center">
    <strong className="text-info me-2">🧠 Core Skills:</strong>
    <span className="text-light">
      DSA, OOPS, OS, CN, DBMS, Problem Solving
    </span>
  </div>
</div>

<div className="col-md-6">
  <div className="d-flex flex-wrap align-items-center">
    <strong className="text-info me-2">🌱 Learning:</strong>
    <span className="text-light">
      Full Stack Development
    </span>
  </div>
</div>

<div className="col-md-6">
  <div className="d-flex flex-wrap align-items-center">
    <strong className="text-info me-2">🎯 Goal:</strong>
    <span className="text-light">Software Engineer</span>
  </div>
</div>

<div className="col-md-6">
  <div className="d-flex flex-wrap align-items-center">
    <strong className="text-info me-2">📍 Location:</strong>
    <span className="text-light">Patna, Bihar, India</span>
  </div>
</div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}