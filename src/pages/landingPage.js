import React from 'react'
import Navbar from "../components/header/navbar"
import VideoShowcase from '../components/videoShowcase'
import IntroParagraph from '../components/introPara'
import DesignShowcase from '../components/Gallery/design1'
import DesignShowcase2 from '../components/Gallery/design2'

export default function landingPage() {
  return (
    <div>
      <Navbar/>
      <VideoShowcase/>
      <IntroParagraph/>
      <DesignShowcase/>
      <DesignShowcase2/>

    </div>
  )
}
