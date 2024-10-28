import React, { useState } from "react";

import { TextField, Button, Grid, Typography } from "@mui/material";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.message) {
      emailjs
        .send(
          "service_u5l5xvb",
          "template_3kf3me4",
          formData,
          "2a5Xcg36V4mAjOU2J"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent!");
          },
          (error) => {
            console.error("FAILED...", error);
          }
        );

      setFormData({ name: "", message: "", email: "" });
    } else {
      window.alert("All Fields are mandatory");
    }
  };

  return (
    <div className="contact-section">
      <form className="contact-form" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" align="center" gutterBottom color="black">
              Write me a message
            </Typography>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              multiline
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              multiline
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ContactForm;
