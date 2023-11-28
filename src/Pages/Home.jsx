import React from 'react'
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import Feature from '../Components/Feature'
import Discount from '../Components/Discount'
import Health from '../Components/Health'
import About from '../Components/About'
import Client from '../Components/Client'
import Contact from '../Components/Contact'



const Home = () => {

  return (
    <>
    
      {/* <div className="hero_area">
        <Header />
        <Slider />
      </div> */}

    <Feature />

    <Discount />

    <Health />

    <About />

    <Client />

    <Contact />

    {/* <Info />

    <Footer /> */}

    
  
    </>
  )
}

export default Home