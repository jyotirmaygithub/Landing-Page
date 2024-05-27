import React, { useState } from 'react';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from '../assets/image.png';
import image2 from '../assets/audi-logo-1.png';
import image3 from '../assets/audi-logo-1.png';
import image4 from '../assets/citibank-logo.png';
import image5 from '../assets/audi-logo-1.png';

const services = [
  {
    image: image1,
    title: 'Responsive Design',
    description: 'Creating responsive websites that look great on any device.',
  },
  {
    image: image2,
    title: 'E-commerce Solutions',
    description: 'Developing secure and efficient e-commerce platforms.',
  },
  {
    image: image3,
    title: 'SEO Optimization',
    description: 'Improving your site’s visibility on search engines.',
  },
  {
    image: image4,
    title: 'Content Management',
    description: 'Easy-to-use content management systems.',
  },
  {
    image: image5,
    title: 'Custom Web Applications',
    description: 'Building custom web applications tailored to your needs.',
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ServicesSection = () => {
  const [autoPlay, setAutoPlay] = useState(true);

  return (
    <div className="p-4 text-black">
      <Typography variant="h3" className="text-center my-5" gutterBottom>
        Our Web Designing Services
      </Typography>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        ssr={true} // means to render carousel on server-side
        infinite={true}
        autoPlay={autoPlay}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {services.map((service, index) => (
          <Card
            className="m-4"
            key={index}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <CardMedia
              component="img"
              alt={service.title}
              height="140"
              image={service.image}
              title={service.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {service.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default ServicesSection;
