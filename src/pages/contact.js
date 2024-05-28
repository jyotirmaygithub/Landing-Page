import React, { useState } from "react";
import { TextField, Button, Typography, Box, Container } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navaigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    email: "",
    message: "",
  });

  function onchange(e) {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formDetails.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (formDetails.message.trim() === "") {
      toast.error("Please enter your message");
      return;
    }
    toast.success("form submitted successfully!");
    setTimeout(() => {
      navaigate("/");
    }, 700);
    console.log("Form is valid, submitting...");
  }

  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: 900 }}
      >
        Send Us a Message
      </Typography>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            onChange={onchange}
            variant="outlined"
            placeholder="Enter Your email"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiInputBase-input": {
                color: "white",
              },
              "& .MuiInputLabel-root": {
                color: "white",
              },
              "& .MuiFormHelperText-root": {
                color: "white",
              },
            }}
          />
          <TextField
            label="Message"
            onChange={onchange}
            required
            name="message"
            id="message"
            margin="normal"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Your message"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiInputBase-input": {
                color: "white",
              },
              "& .MuiInputLabel-root": {
                color: "white",
              },
              "& .MuiFormHelperText-root": {
                color: "white",
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            fullWidth
          >
            Submit
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default ContactForm;
