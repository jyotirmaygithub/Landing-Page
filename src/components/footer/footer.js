import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box  color="white" py={14}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4} className='space-y-4'>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" className='text-gray-400'>
              We are dedicated to providing top-notch services to help bring your ideas to life. Learn more about our mission and team.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} className='space-y-4'>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body1" className='text-gray-400'>
              Home
            </Typography>
            <Typography variant="body1" className='text-gray-400'>
              About
            </Typography>
            <Typography variant="body1" className='text-gray-400'>
              Services
            </Typography>
            <Typography variant="body1" className='text-gray-400'>
              Contact
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} className='space-y-4'>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" className='text-gray-400'>
              Email: info@example.com
            </Typography>
            <Typography variant="body1" className='text-gray-400'>
              Phone: +1 234 567 890
            </Typography>
            <Typography variant="body1" className='text-gray-400'>
              Address: 123 Street Name, City, State, Country
            </Typography>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={6}>
          <Typography variant="body2" className='text-gray-400'>
            &copy; {new Date().getFullYear()} InnovateTech. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
