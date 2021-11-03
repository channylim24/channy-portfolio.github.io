import "../css/projects.css";
import ProjectButton from "../assets/img/projectButton.PNG";
import ProjectToDoList from "../assets/img/toDoList.PNG";
import ProjectSignUpPage from "../assets/img/signUpPage.PNG";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h3>PROJECTS</h3>
      <div className="project-container">
        <div className="project">
          <div className="image-container">
            <img src={ProjectToDoList} alt="Simple To Do List" />
          </div>
          <p>Simple To Do List (HTML, CSS, JS)</p>
        </div>
        <div className="project">
          <div className="image-container">
            <img src={ProjectButton} alt="Button Hover Effects Project" />
          </div>
          <p>Button hover effects (HTML, CSS)</p>
        </div>
        <div className="project">
          <div className="image-container">
            <img
              src={ProjectSignUpPage}
              alt="Simple Sign Up Page using React"
            />
          </div>
          <p>Simple Elegant Sign Up Page (React)</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
