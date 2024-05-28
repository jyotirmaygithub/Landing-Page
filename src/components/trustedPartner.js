import React from "react";
import image1 from "../assets/audi-logo-1.png";
import image2 from "../assets/ihop-logo.png";
import image3 from "../assets/citibank-logo.png";
import image4 from "../assets/sprite-logo.png";

const trustedPartners = [image1, image2, image3, image4];

const TrustedPartnersSection = () => {
  return (
    <div className="flex flex-wrap justify-around my-14">
      {trustedPartners.map((partner, index) => (
        <div className="">
            <img
              src={partner}
              alt={`trusted-partners-${index}`}
            className="w-[120px]"
            />
        </div>
      ))}
    </div>
  );
};

export default TrustedPartnersSection;
