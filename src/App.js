import React, { useLayoutEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Service from './Pages/Service';
import Gallery from './Pages/Gallery';
import Contactus from './Pages/Contactus';
import Aboutus from './Pages/Aboutus';
import Topbar from './Component/Topbar';
import Footer from './Component/Footer';
import './App.css';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const main = useRef();
  const smoother = useRef();

  useLayoutEffect(() => {
    smoother.current = ScrollSmoother.create({
      smooth: 1, // seconds it takes to "catch up" to native scroll position
      effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <div id="smooth-wrapper" ref={main}>
          <div id="smooth-content">
            <Topbar />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/service" element={<Service />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/aboutus" element={<Aboutus />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
