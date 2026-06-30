export default function Skills() {
  const technicalSkills = [
    { name: "C++", level: 90 },
    { name: "Data Structures & Algorithms", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 75 },
  ];

  const professionalSkills = [
    { name: "Problem Solving", level: 90 },
    { name: "Communication", level: 85 },
    { name: "Teamwork", level: 90 },
    { name: "Leadership", level: 80 },
  ];

  const technologies = [
    "C++", "Python", "HTML5", "CSS3", "JavaScript",
    "Bootstrap", "React.js", "Node.js", "Express.js",
    "MongoDB", "MySQL", "Git", "GitHub",
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">

        {/* Heading (MATCH PROJECT STYLE) */}
        <div className="text-center mb-5">
          <h2 className="section-title text-white fw-bold">
            My <span className="text-info">Skills</span>
          </h2>

          <div
            className="mx-auto my-3 "
            style={{
              width: "170px",
              height: "4px",
              background: "#00d9ff",
              borderRadius: "20px",
            }}
          ></div>

          <p className="text-secondary">
            Technologies and skills I use to build scalable applications
          </p>
        </div>

        {/* Skill Cards */}
        <div className="row g-4">

          {/* Technical Skills */}
          <div className="col-lg-6">
            <div className="skill-card h-100 p-4">
              <h4 className="text-info mb-4">Technical Skills</h4>

              {technicalSkills.map((skill, idx) => (
                <div key={idx} className="mb-4">
                  <div className="d-flex justify-content-between text-white">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="progress custom-progress mt-2">
                    <div
                      className="progress-bar bg-info"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="col-lg-5">
            <div className="skill-card h-100 p-4">
              <h4 className="text-info mb-4">Professional Skills</h4>

              {professionalSkills.map((skill, idx) => (
                <div key={idx} className="mb-4">
                  <div className="d-flex justify-content-between text-white">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="progress custom-progress mt-2">
                    <div
                      className="progress-bar bg-info"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-5">
          <h3 className="text-center text-white fw-bold mb-4">
            Technologies & Tools
          </h3>

          <div className="skill-card p-4 text-center">
            {technologies.map((tech, idx) => (
              <span key={idx} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}