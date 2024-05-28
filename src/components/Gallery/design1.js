import React from 'react';
import { Box, Container } from '@mui/material';
import designImage1 from '../../assets/image1.png';

const DesignShowcase = () => {
  return (
    <Container maxWidth="lg">
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
