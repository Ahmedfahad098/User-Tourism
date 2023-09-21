import React from 'react'
import Frequently from '../assets/components/Adventure/Frequently'
import Reviews from '../assets/components/Adventure/Reviews'
import ExploreOther from '../assets/components/Adventure/ExploreOther'
import ActivityHead from '../assets/components/singleactivitypage/ActivityHead'
import AlTourCity from '../assets/components/singleactivitypage/AlTourCity'
export const ActivityDetails = () => {
  return (
    <>
        <ActivityHead/>
        <AlTourCity/>
        <Frequently/>
        <Reviews/>
        <ExploreOther/>
    </>
  )
}
