import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';

const OurProcess = () => {
  return (
    <Box py={8} >
      <Typography variant="h4" align="center" gutterBottom style={{ color: '#ffffff' }}>
        Our Process
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Box textAlign="center">
            <LightbulbOutlinedIcon style={{ fontSize: '3em', color: '#1976d2' }} /> {/* Blue color */}
            <Typography variant="h6" gutterBottom style={{ color: '#ffffff' }}>
              Step 1: Idea Generation
            </Typography>
            <Typography variant="body1" style={{ color: '#ffffff' }}>
              Have an idea? Let's brainstorm together to refine and expand it into a concrete plan.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box textAlign="center">
            <CheckCircleOutlineOutlinedIcon style={{ fontSize: '3em', color: '#1976d2' }} /> {/* Blue color */}
            <Typography variant="h6" gutterBottom style={{ color: '#ffffff' }}>
              Step 2: Execution
            </Typography>
            <Typography variant="body1" style={{ color: '#ffffff' }}>
              With a solid plan in place, our expert team will execute each step meticulously to bring your idea to life.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box textAlign="center">
            <FlagOutlinedIcon style={{ fontSize: '3em', color: '#1976d2' }} /> {/* Blue color */}
            <Typography variant="h6" gutterBottom style={{ color: '#ffffff' }}>
              Step 3: Success
            </Typography>
            <Typography variant="body1" style={{ color: '#ffffff' }}>
              Your project is now complete! Sit back and enjoy the success of your vision realized.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurProcess;
