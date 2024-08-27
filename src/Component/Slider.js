import React, { useState, useEffect, useRef } from 'react';
import './styles/Slider.css';
import gsap from 'gsap';
import SplitType from 'split-type';
import { useGSAP } from '@gsap/react';

const SliderComponent = () => {
  const [slides, setSlides] = useState(1);
  const slider1 = useRef();
  const slider2 = useRef();
  const slider3 = useRef(); // Added for the third slide
  const buttons=useRef();
  const textParagraph1=useRef();
  const textParagraph2=useRef();
  const textParagraph3=useRef();
  const headingText=useRef();
  const headingText2=useRef();
  const headingText3=useRef();
  useGSAP(()=>{
    if(slides==1){
      changeAnimation(slider1,buttons,textParagraph1,headingText);
    }else if(slides==2){
      changeAnimation(slider2,buttons,textParagraph2,headingText2);
    }else if(slides==3){
      changeAnimation(slider3,buttons,textParagraph3,headingText3);
    }

  },[slides])
  // Function to animate the slider text
  const changeAnimation = (sliderRef,buttonRef,textParaRef,headingTextRef) => {
    const split = new SplitType(sliderRef.current, { types: 'chars' });
    gsap.from(split.chars, {
      y: 100,
      duration: 0.5,
      stagger: 0.05,
      opacity: 0,
      ease: 'power2.out',
    });
    gsap.from(buttonRef.current,{
      scale:0,
      duration:1.5,
      opacity: 0,
    })
    gsap.from(textParaRef.current,{
      y:-100,
      duration:1,
      opacity:0
    })
    gsap.to(headingTextRef.current,{
      rotateX:360,
      duration:1,
      delay:0.5
    })
  };


  useEffect(() => {
    const timer = setTimeout(moveSlider, 5000);
    return () => clearTimeout(timer); // Clear the timer when the component unmounts or slides change
  }, [slides]);

 

  function moveSlider() {
    if (slides < 3) {
      setSlides(slides + 1);
    } else {
      setSlides(1);
    }
  }

  function HandleDots(x) {
    setSlides(x);
  }

  const imageData = {
    slides1: {
      backgroundImage: "radial-gradient(rgba(0,0,0,0.5),rgba(0,0,0,1)), url('https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    },
    slides2: {
      backgroundImage: "radial-gradient(rgba(0,0,0,0.5),rgba(0,0,0,1)), url('https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')",
    },
    slides3: {
      backgroundImage: "radial-gradient(rgba(0,0,0,0.5),rgba(0,0,0,1)), url('https://images.pexels.com/photos/10628468/pexels-photo-10628468.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')",
    },
  };

  return (
    <div className='sliderContainer'>
      <div className='dots'>
        <div onClick={() => HandleDots(1)}></div>
        <div className='ml-[10px]' onClick={() => HandleDots(2)}></div>
        <div className='ml-[10px]' onClick={() => HandleDots(3)}></div>
      </div>
      {slides === 1 && (
        <div className="slider1" style={imageData.slides1}>
          <div>
            <h2  ref={headingText}>THE CHOICE AROUND THE WORLD</h2>
            <h1 className="sliderHeading" ref={slider1}>Innovative <span>Modern</span> Design & Works</h1>
            <p ref={textParagraph1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div>
              <button  ref={buttons}>GET STARTED</button>
              <button>VIEW MORE</button>
            </div>
          </div>
        </div>
      )}
      {slides === 2 && (
        <div className="slider1" style={imageData.slides2}>
          <div>
            <h2 ref={headingText2}>THE CHOICE AROUND THE WORLD</h2>
            <h1 ref={slider2}>Innovative <span>Modern</span> Design & Works</h1>
            <p ref={textParagraph2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div>
              <button>GET STARTED</button>
              <button>VIEW MORE</button>
            </div>
          </div>
        </div>
      )}
      {slides === 3 && (
        <div className="slider1" style={imageData.slides3}>
          <div>
            <h2 ref={headingText3}>THE CHOICE AROUND THE WORLD</h2>
            <h1 ref={slider3}>Innovative <span>Modern</span> Design & Works</h1> {/* Added ref for the third slide */}
            <p ref={textParagraph3}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div>
              <button>GET STARTED</button>
              <button>VIEW MORE</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderComponent;
