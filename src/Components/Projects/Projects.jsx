import React from "react";
import "./Projects.css";
import { FaReact, FaAws } from "react-icons/fa";
import {
  SiHtml5,
  SiMaterialui,
  SiSpringboot,
  SiPostgresql,
  SiNetlify,
  SiFirebase,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import portfolio from "../../assets/portfolio.png";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          <span className="different">PROJECTS</span>
        </h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://www.mirrorfly.com/assets/images/tutorials/build-react-js-chat-app/build-react-js-chat-app-og.png"
                    alt="Chat Application"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Chat Application</h2>
                <p>
                  In this project, a real Time Chat Application is built using
                  React JS and Firebase hosting services, which offers cost free
                  backend for the chat messages and data. This application will
                  contain a simple login system where user Signup and Login.
                  User will be able to send one-one messages to other users. All
                  messages are stored in a firebase database and are synced in
                  real time with our react application. I have deployed the
                  application on Netlify.
                </p>
                <div>
                  <FaReact />
                  <SiFirebase />
                  <SiNetlify />
                </div>
                <div>
                  <a
                    href="https://github.com/ShashiBondi/Chatapplication.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/Va2/react-todo-list/master/screenshot.jpg"
                    alt="Todo Application"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Todo Application</h2>
                <p>
                  In this project, a Task Manager is built using React JS,
                  Firebase authentication, SpringBoot and PostgreSQL. This App
                  helps users to manage their tasks by allowing them to set time
                  constraints in achieving the goals and keeps them away from
                  any distractions and increases the productivity. All tasks are
                  stored in a PostgreSQL database and are synced in real time
                  with our react application. I have deployed the application
                  using Aws EC2 Linux virtual machine, with the help of Docker.
                </p>
                <div>
                  <FaReact />
                  <SiSpringboot />
                  <SiPostgresql />
                  <FaAws />
                </div>
                <div>
                  <a
                    href="https://github.com/ShashiBondi/todo-ui.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={portfolio} alt="Portfolio" />
                </div>
              </div>
              <div className="project_information">
                <h2>Portfolio</h2>
                <p>
                  Developed my personal portfolio, which includes all my skills,
                  eductaional qualifications, experience,projects,contact
                  details etc. The feature of sending me a message through a
                  form using Emailjs is also enabled in the portfolio. The
                  application is also a mobile responsive, the transition of
                  light theme to dark theme is also included in this project.
                </p>
                <div>
                  <FaReact />
                  <SiMaterialui />
                  <DiCss3 />
                  <SiNetlify />
                </div>
                <div>
                  <a
                    href="https://github.com/ShashiBondi/shashankportfolio.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiS0xtSgT2mE8AYOVk-36N-769swi52xhZat78cSRdx4EPSLhqkm2expZSS6qltNrN9UZGBpSfedEX837VvceFnBZxeDEP3xNPbVsEii7R8UlFiC5Hl2-sa3EqCRZsCdCfq_8Vlreyfg-e7zoTe8XxBY7GmmExXars8jklQhHVyRbEbMijmDb7DxptY3A/s1280/Copy%20of%20Copy%20of%20SVG%20in%20HTML11.png"
                    alt="Dice Game"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Dice Game</h2>
                <p>
                  This game is developed using HTML,CSS and JavaScript. This is
                  a 2 player game. The main ideology of this game is Playerstake
                  turns to roll a single dice as many times as they wish, adding
                  all roll results to a running total, but losing their gained
                  score for the turn if they roll a 1 and switching the player.
                  If they wish they can also hold their turn’s score, which in
                  turn adds to the original score and switches the player.The
                  player who meets the desired score constraint first wins the
                  game.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://github.com/ShashiBondi/Dice-Game-.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
