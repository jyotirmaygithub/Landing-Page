// src/components/DesignShowcase.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import designImage1 from '../../assets/image1.png'; // Replace with the path to your image

const DesignShowcase = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom textAlign="center" className='text-white'>
        Our Creative Design
      </Typography>
      <Box
        component="img"
        src={designImage1}
        alt="Creative Design"
        sx={{
          width: '100%',
          height: 'auto',
          borderRadius: 2,
          boxShadow: 3,
          my: 2,
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      />
    </Container>
  );
};

export default DesignShowcase;
