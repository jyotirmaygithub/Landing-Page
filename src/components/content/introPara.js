// src/components/IntroParagraph.js
import React from 'react';
import { Typography, Box, Container, Grid, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StarIcon from '@mui/icons-material/Star';
// import sampleImage from './path/to/your/image.jpg'; // Replace with the path to your image

const IntroParagraph = () => {
  return (
    <Container maxWidth="md">
      <Box 
        sx={{ 
          bgcolor: 'black', 
          color: 'white', 
          p: 4, 
          borderRadius: 2, 
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to <strong>InnovateTech </strong>
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Our mission is to provide innovative and reliable tech solutions tailored to your business needs.
        </Typography>
        <Grid container justifyContent="center" spacing={2} mt={2}>
          <Grid item>
            <ListItem>
              <ListItemIcon>
                <ComputerIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Custom Software" sx={{ color: 'white' }} />
            </ListItem>
          </Grid>
          <Grid item>
            <ListItem>
              <ListItemIcon>
                <RocketLaunchIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="AI Solutions" sx={{ color: 'white' }} />
            </ListItem>
          </Grid>
          <Grid item>
            <ListItem>
              <ListItemIcon>
                <StarIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Quality Focus" sx={{ color: 'white' }} />
            </ListItem>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default IntroParagraph;
