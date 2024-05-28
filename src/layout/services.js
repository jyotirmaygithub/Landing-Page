import React from 'react';
import { Typography } from '@mui/material';
import ServicesCards from '../components/serviceCard';


const ServicesSection = () => {
  return (
    <div className="bg-white py-14">
      <div className='my-14'>
        <Typography variant="h2" component="h2" gutterBottom className="text-black text-center"  sx={{ fontWeight: 'bold', '@media (max-width:600px)': { fontSize: '2rem' } }}>
           Web Designing Services
        </Typography>
        <Typography variant="body1" className="text-gray-600 mb-8 text-center">
          We offer a variety of web design services to help you build your online presence.
        </Typography>
      </div>
       <ServicesCards/>
    </div>
  );
};

export default ServicesSection;
