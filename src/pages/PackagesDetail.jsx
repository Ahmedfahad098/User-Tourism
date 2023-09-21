import React from 'react'
import SinglePackages from '../assets/components/Adventure/SinglePakages'
import AdvantureDubae from '../assets/components/Adventure/AdventureDubai'
import Image from '../assets/components/Adventure/Image'
import Frequently from '../assets/components/Adventure/Frequently'
import Reviews from '../assets/components/Adventure/Reviews'
import ExploreOther from '../assets/components/Adventure/ExploreOther'
export const PackagesDetail = () => {
  return (
    <>
       <SinglePackages/>
       <Image />
       <AdvantureDubae/>
       <Frequently/>
       <Reviews/>
       <ExploreOther/>
    </>
  )
}
