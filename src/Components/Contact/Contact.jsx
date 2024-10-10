import React, { useState } from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import { Grid, TextField, Button, Typography } from "@mui/material";
import ContactForm from "./ContactForm";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          <span className="different">CONTACT ME</span>
        </h2>
        <div className="contactMain">
          <div className="contactcontainer">
            <a
              href="https://www.linkedin.com/in/bondi-shashank-7b7a311a8/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
            <a
              href="https://github.com/ShashiBondi"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="github" />
            </a>
            <a
              href="mailto:bondishashank.nitt@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="email" />
            </a>
            <a href="tel:+919441922120" target="_blank" rel="noreferrer">
              <BsFillTelephoneFill className="phone" />
            </a>
            <a
              href="https://wa.me/919441922120?text=Hello%20there!%20I%20would%20like%20to%20get%20in%20touch."
              target="_blank"
              rel="noreferrer"
            >
              <BsWhatsapp className="whatsapp" />
            </a>
          </div>

          <div className="mailNumber">
            <div>
              <CgMail className="email" />
              <p>bondishashank.nitt@gmail.com</p>
            </div>
            <div className="iconsCont">
              <BsFillTelephoneFill className="phone" />
              <p>+91 9441922120</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </>
  );
};
