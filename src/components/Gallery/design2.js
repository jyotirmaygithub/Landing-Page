import React from 'react';
import { Box, Grid, Container } from '@mui/material';
import designImage2 from '../../assets/image2.png';
import designImage3 from '../../assets/image3.png';

const DesignShowcase = () => {
  return (
    <Container sx={{ padding: 0, my: 12, height: '100vh', display: 'flex' }}>
      <Grid container spacing={8} sx={{ height: '100vh' }}>
        <Grid item xs={12} sm={6} sx={{ height: '100vh' }}>
          <Box
            component="img"
            src={designImage2}
            alt="Design 2"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 2,
              boxShadow: 3,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ height: '100vh' }}>
          <Box
            component="img"
            src={designImage3}
            alt="Design 3"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 2,
              boxShadow: 3,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DesignShowcase;
