import React from "react";
import Navbar from "../components/header/navbar";
import VideoShowcase from "../components/videoShowcase";
import IntroParagraph from "../components/content/introPara";
import WhyChooseUs from "../components/content/whyChoose";
import DesignShowcase from "../layout/designShowcase";
import Portfolio from "../components/portfolio/portfolio";
import OurProcess from "../components/content/ourProcess";
import Footer from "../components/footer";
import ChatbotButton from "../components/chatBot";

export default function landingPage() {
  return (
    <div>
      <Navbar />
      <VideoShowcase />
      <IntroParagraph />
      <DesignShowcase />
      <WhyChooseUs />
      <Portfolio/>
      <OurProcess/>
      <Footer/>
      <ChatbotButton/>
    </div>
  );
}
