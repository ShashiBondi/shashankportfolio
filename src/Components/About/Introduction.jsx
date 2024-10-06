import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Bondi Shashank Photo.jpeg";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            <span className="different">ABOUT ME</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Bondi Shashank </span> and I am from
                Hyderabad, India. I have completed my B.Tech from
                <span className="different">
                  {" "}
                  National Institute of Technology, Tiruchirappalli (NIT
                  TRICHY).
                </span>{" "}
                I hold 2+ years of experience as a Java Full Stack Developer.
                With expertise in Java SpringBoot and ReactJS, I am successful
                in delivering the best outcomes at the organisations I am
                working in.
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
