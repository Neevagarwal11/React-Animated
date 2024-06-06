import React from 'react';
import Navbar from './components/navbar';
import Landing from './components/landing';
import Marquee from './components/marquee';
import About from './components/about';
import Eyes from './components/eyes';
import Feature from './components/feature';
import Cards from './components/cards';
import Footer from './components/footer';
import LocomotiveScroll from 'locomotive-scroll';
import { Helmet } from 'react-helmet';        {/* Helmet is required for manipulating the meta tags in react */}


function App() {

const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className='w-full min-h-screen bg-[#F3F3F3] text-black '>
      <Navbar></Navbar>
      <Landing></Landing>
      <Marquee></Marquee>
      <About></About>
      <Eyes></Eyes>
      <Feature></Feature>
      <Cards></Cards>
      <Footer></Footer>
      {/* Helmet is required for manipulating the meta tags in react */}
      <Helmet>
      <meta charSet="utf-8" />
      <title>React Animated-Neev</title>
      <link rel="icon" href="https://ochi.design/wp-content/uploads/2022/04/logo003.png" />
      </Helmet>
    </div>

  )
}


export default App