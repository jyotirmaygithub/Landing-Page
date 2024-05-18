import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image1.png";
import image5 from "../../assets/image1.png";
import "./portfolio.css"; // Import CSS for custom styling

const Portfolio = () => {
  const [isDragging, setIsDragging] = useState(false);

  const projects = [image1, image2, image3, image4, image5];

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div style={{ marginTop: "40px", marginBottom: "40px" }}>
      <Carousel
        additionalTransfrom={0}
        arrows
        centerMode={false}
        containerClass="carousel-container"
        draggable={!isDragging}
        focusOnSelect={false}
        infinite
        itemClass="carousel-item"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
      >
        {projects.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Project ${index + 1}`}
            className="project-image" // Apply custom CSS class for styling
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Portfolio;
