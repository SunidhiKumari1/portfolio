import Card from "./Card";
import project1Image from './project1Image.jpeg'
import project2Image from './project2Image.jpeg'
import project3Image from './project3Image.png'

export default function Projects() {
  return (
    <section className="py-5 px-5" id="projects">
      <div className="container">

        <div className="text-center mb-5 text-light">
          <h2 className="display-5 fw-bold">
            My <span className="text-info">Projects</span>
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
          <p className="text-light">
            Some of the projects I've worked on.
          </p>
        </div>

        <div className="row justify-content-center g-4">

          <Card link={"https://textutils-dusky-psi.vercel.app/"} imageUrl={project1Image} title="Text Utils App" description="TextUtils is a responsive React-based web application that provides a variety of text manipulation and analysis features. Built with React and Bootstrap, the application offers a clean, user-friendly interface."/>
          <Card link={"https://smartquiz-mu.vercel.app/"} imageUrl={project2Image} title="Smart Quiz App" description="SmartQuiz is a responsive React-based quiz platform for CSE placement preparation. It offers subject-wise quizzes across 10 technical subjects with multiple difficulty levels, helping students strengthen their concepts and prepare effectively for coding interviews and campus placements."/>
          <Card link={"/"} imageUrl={project3Image} title="Personal Portfolio" description="This portfolio is a responsive personal website built using React and Bootstrap to showcase my skills, projects, and achievements. It features a clean, modern design providing an overview of my technical expertise, development experience, and problem-solving abilities as an aspiring Software Engineer."/>

        </div>

      </div>
    </section>
  );
}