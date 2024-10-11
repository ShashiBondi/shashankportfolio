import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Experience } from "./Experience";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/documents/Bondi Shashank_Resume.pdf";

    link.download = "Bondi Shashank_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Bondi Shashank</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          I am a Java Full Stack Developer with expertise in Java Spring Boot
          and ReactJS, I have a strong passion for learning new technologies. My
          skills enable me to work across the stack as a Full Stack Developer,
          Backend Developer, or Frontend Developer. Currently, I’m exploring
          opportunities that align with my interests and expertise.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/ShashiBondi"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:bondishashank.niit@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+919441922120"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/bondi-shashank-7b7a311a8/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>

        <button className="btnResume" onClick={downloadResume}>
          Resume
        </button>
      </div>
      <Introduction />
    </>
  );
};
