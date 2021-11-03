import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home" id="home">
      <div className="intro">
        <h1>CHANNY LIM</h1>
        <h2>Junior Front End Developer</h2>
        <hr />
        <a href="#projects" className="links">
          <button>My Projects</button>
        </a>
        {/* <Link to="#" className="links"> */}
        <button>My Resume</button>
        {/* </Link> */}
      </div>
    </section>
  );
}
export default Home;
