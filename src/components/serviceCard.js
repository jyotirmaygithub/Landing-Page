import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image1 from "../assets/marketing.webp";
import Image2 from "../assets/figma.webp";
import Image3 from "../assets/webflow.webp";
import Image4 from "../assets/web.jpg";

const services = [
  {
    title: "Custom Website Design:",
    description:
      "Create unique, visually appealing website designs tailored to the clients brand and goals.",
    imageUrl: Image1,
  },
  {
    title: "Responsive Design",
    description:
      "We create websites that look great on any device, ensuring a seamless experience for all users.",
    imageUrl: Image3,
  },
  {
    title: "E-Commerce Solutions",
    description:
      "I create secure online stores with full e-commerce functionality.",
    imageUrl: Image4,
  },
  {
    title: "UI/UX Design",
    description:
      "Focus on user experience (UX) by creating intuitive navigation and interactive elements.",
    imageUrl: Image2,
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
  return (
    <Container>
      <Carousel
        responsive={responsive}
        infinite={true}
        className="carousel-container"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200  shadow-sm mx-2 bg-white space-y-5"
          >
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-60 object-cover mb-4"
            />
            <Typography
              variant="h6"
              component="h3"
              className="text-gray-800 mb-2"
              style={{ fontWeight: 800 }}
            >
              {service.title}
            </Typography>
            <Typography
              variant="body2"
              className="text-gray-600
            "
            >
              {service.description}
            </Typography>
            <Typography
              variant="body2"
              className="text-gray-600"
              style={{ fontWeight: 600 }}
            >
              Learn more <ArrowForward />
            </Typography>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default ServicesSection;
