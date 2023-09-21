import React from 'react'
import IndexHeader from '../assets/components/Home/IndexHeader'
import OurServices from '../assets/components/Home/OurServices'
import Destination from '../assets/components/Home/Destination'
import FlipCards from '../assets/components/Home/FlipCards'
import TopDeals from '../assets/components/Home/TopDeals'
export const Home = () => {
  return (
    <>
        <IndexHeader/>
        <OurServices/>
        <Destination/>
        <FlipCards/>
        <TopDeals/>
    </>
  )
}
