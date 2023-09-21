import React from 'react'
import AboutHead from '../assets/components/aboutpage/Aboutheader'
import ChooseUs from '../assets/components/aboutpage/ChooseUs'
import AboutOurServices from '../assets/components/aboutpage/AboutOurService'
import  OurTeam from '../assets/components/aboutpage/OurTeam'
import Clients from '../assets/components/aboutpage/Clients'
import Gallery from '../assets/components/aboutpage/Gallery'
export const About = () => {
  return (
    <>
        <AboutHead/>
        <ChooseUs/>
        <AboutOurServices/>
        <OurTeam/>
        <Clients/>
        <Gallery/>
    </>
  )
}
