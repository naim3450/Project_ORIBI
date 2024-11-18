import React from 'react'
import Bennar from '../components/Bennar'
import bennarImg from '../assets/bennarImg.jpg'
import Ads from '../assets/Ads.jpg'
import ThreeImg from '../components/layouts/ThreeImg'
import Arrivals from '../components/Arrivals'
import Spoffer from '../components/Spoffer'

const Home = () => {
  return (
    <>
      <Bennar src={bennarImg} />
      <ThreeImg />
      <Arrivals />
      <Bennar src={Ads} />
      <Spoffer />
    </>
  )
}

export default Home