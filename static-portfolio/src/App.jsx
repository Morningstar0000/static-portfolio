import React from 'react'
import "./App.scss"
import { Heading, Text, Box, Section, Grid } from "@radix-ui/themes"
import '@radix-ui/themes/styles.css';

import Hero from "./sections/Hero"
import About from "./sections/About"
import Portfolio from './sections/portfolio/Portfolio';
import Features from './sections/Features';
import Videoplayer from './sections/Videoplayer';
import Logo from './sections/Logo';
import Testimonial from './sections/Testimonial';
import News from './sections/news/News';
import Contact from './sections/Contact';
import Footer from './sections/Footer';




function App() {


  return (
    <>
    
        <Hero/>
        <About/>
        <Portfolio/>
        <Features/>
          <Videoplayer/>
          <Logo/>
            <Testimonial/>
               <News/>
          <Contact/>
          <Footer/>
         
     
    </>
  )
}

export default App