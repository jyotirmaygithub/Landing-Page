import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box bgcolor="white" color="black" py={4}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1">
              We are dedicated to providing top-notch services to help bring your ideas to life. Learn more about our mission and team.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" variant="body1" display="block" gutterBottom>
              Home
            </Link>
            <Link href="/about" color="inherit" variant="body1" display="block" gutterBottom>
              About
            </Link>
            <Link href="/services" color="inherit" variant="body1" display="block" gutterBottom>
              Services
            </Link>
            <Link href="/contact" color="inherit" variant="body1" display="block" gutterBottom>
              Contact
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1">
              Email: info@example.com
            </Typography>
            <Typography variant="body1">
              Phone: +1 234 567 890
            </Typography>
            <Typography variant="body1">
              Address: 123 Street Name, City, State, Country
            </Typography>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={4}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
