import React from "react";
import "./Techstacks.css";
import { FaReact, FaAws, FaGithub, FaJava, FaNodeJs } from "react-icons/fa";
import {
  SiSpringboot,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiJavascript,
  SiDocker,
  SiKubernetes,
  SiFirebase,
  SiNetlify,
} from "react-icons/si";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <FaJava />
            <h5>Java</h5>
          </div>
          <div>
            <SiSpringboot />
            <h5>Spring Boot</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>NodeJS</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <SiCss3 />
            <h5>CSS</h5>
          </div>

          <div>
            <SiPostgresql />
            <h5>PostgreSQL</h5>
          </div>
          <div>
            <SiMysql />
            <h5>MySQL</h5>
          </div>
          <div>
            <SiRedis />
            <h5>Redis</h5>
          </div>
          <div>
            <SiDocker />
            <h5>Docker</h5>
          </div>
          <div>
            <SiKubernetes />
            <h5>Kubernetes</h5>
          </div>
          <div>
            <FaAws />
            <h5>AWS</h5>
          </div>
          <div>
            <FaGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiFirebase />
            <h5>Firebase</h5>
          </div>
          <div>
            <SiNetlify />
            <h5>Netlify</h5>
          </div>
        </div>
      </div>
    </>
  );
};
