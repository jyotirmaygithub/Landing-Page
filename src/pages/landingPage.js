import React from "react";
import Navbar from "../components/header/navbar";
import VideoShowcase from "../components/videoShowcase";
import IntroParagraph from "../components/content/introPara";
import WhyChooseUs from "../components/content/whyChoose";
import DesignShowcase from "../layout/designShowcase";
import Portfolio from "../components/portfolio/portfolio";
import OurProcess from "../components/content/ourProcess";
import Footer from "../components/footer/footer";
import ChatbotButton from "../components/chatBot";
import TrustedPartnersSection from "../components/trustedPartner";
import CookieConsent from "../components/cookies";
import ServicesSection from "../layout/services";

export default function landingPage() {
  return (
    <div>
      <CookieConsent/>
      <Navbar />
      <VideoShowcase />
      <TrustedPartnersSection/>
      <IntroParagraph />
      <DesignShowcase />
      <WhyChooseUs />
      <ServicesSection/>
      <OurProcess/>
      <Portfolio/>
      <Footer/>
      <ChatbotButton/>
    </div>
  );
}
