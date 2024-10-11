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
                Hello everyone, I am{" "}
                <span className="different">Bondi Shashank </span>from
                Hyderabad, India. I graduated with a B.Tech from
                <span className="different">
                  {" "}
                  National Institute of Technology, Tiruchirappalli (NIT
                  TRICHY).
                </span>{" "}
                With over 2 years of experience as a Java Full Stack Developer,
                I have honed my expertise in Java Spring Boot and ReactJS,
                consistently delivering high-quality projects with efficiency
                and precision.
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
