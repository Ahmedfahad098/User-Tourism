import React from 'react'
import PackagesHeader from '../assets/components/packages/PackagesHeader'
import SearchPackages from '../assets/components/packages/SearchPacka'
import CardsMain from '../assets/components/packages/CardsMain'
import ExploreOther from '../assets/components/Adventure/ExploreOther'
export const Packages = () => {
  return (
    <>
        <PackagesHeader/>
        <SearchPackages/>
        <CardsMain/>
        <ExploreOther/>
    </>
  )
}
