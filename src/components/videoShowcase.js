import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const VideoShowcase = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          padding: 2, 
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom style={{fontWeight: 900}}>
          Web Design Services
        </Typography>
        <Typography variant="h5" component="h2">
          Creating Stunning and Responsive Websites
        </Typography>
      </Box>
    </Box>
  );
};

export default VideoShowcase;
