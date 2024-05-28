import React, { useState } from "react";
import { TextField, Button, Typography, Box, Container } from "@mui/material";

const ContactForm = () => {
  
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email:", email);
    console.log("Message:", message);
    // Reset form
    setEmail("");
    setMessage("");
  };

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
            label="Email"
            value={email}
            onChange={handleEmailChange}
            margin="normal"
            fullWidth
            variant="outlined"
            placeholder="Your email"
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
            }}
          />
          <TextField
            label="Message"
            value={message}
            onChange={handleMessageChange}
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
