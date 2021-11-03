import React, { useState, useEffect } from "react";
import "../css/aboutme.css";
import channy from "../assets/img/channy-aboutMe.png";
import pinkcloud from "../assets/img/background-pinkcloud.png";
import moon from "../assets/img/background-moon.png";

function AboutMe() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="aboutMe" id="aboutMe">
      <h3>ABOUT ME</h3>
      <div className="aboutMeContainer">
        <div className="itemContainer">
          <div className="imageContainer">
            <img src={channy} alt="My Picture" id="myPicture" />
          </div>

          <div className="introduce">
            <pre>
              {`
const helloIam = {
name : "Channy Lim",
dateOfBirth : "18 March 2000",
favMoto : "Be honest in your life
           it creates a positive
           energy, stopping all un-
           fairness through life.",
hobby : "",
certificates : {Progate: "HTML & CSS",
                Progate: JavaScript",
                ""},
}`}
            </pre>
          </div>
        </div>
        <div className="skills">
          <div className="skill html">HTML</div>
          <div className="skill css">CSS</div>
          <div className="skill js">JavaScript &amp;&amp; ES6</div>
          <div className="skill reactjs">ReactJS</div>
          <div className="skill git">Git</div>
        </div>
      </div>
      <img
        src={pinkcloud}
        alt="background"
        id="pinkcloud"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      />
      <img
        src={moon}
        alt="background"
        id="moon"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      />
    </section>
  );
}

export default AboutMe;
