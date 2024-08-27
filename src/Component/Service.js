// ServicesSection.js
import {useState} from  'react';
import ServiceCard from './Card2';
import { useRef } from 'react';
import { FaBuilding, FaLightbulb, FaCogs } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger)

const ServicesSection = () => {

  const [currentSlider,setCurrentSlider]=useState(2);
  const [directionSlider,setDirectionSlider]=useState(0);
  const services = [
    {
      icon: <FaBuilding />,
      title: 'Architecture Studio',
      description: 'We design spaces and ambiances to best meet Clients’ functional and reasonable standards.',
      backgroundImage: "url('https://wpbim.themescamp.com/wp-content/uploads/2020/07/sq-img-07-1.jpg')",
      classId: "archBox"
    },
    {
      icon: <FaLightbulb />,
      title: 'Interior Design',
      description: 'The interior dynamics of built spaces and reasonable standards to be greeting welcome.',
      backgroundImage: "url('https://wpbim.themescamp.com/wp-content/uploads/2020/07/img-01-1.jpg')",
      classId: "interBox"
    },
    {
      icon: <FaCogs />,
      title: 'Engineering works',
      description: 'To covering and reasonable standards structure, mechanical, electrical, and plumbing for (MEP).',
      backgroundImage: "url('https://wpbim.themescamp.com/wp-content/uploads/2020/07/sq-img-07-1.jpg')",
      classId: "enginBox"
    },
    {
      icon: <FaCogs />,
      title: 'Engineering works',
      description: 'To covering and reasonable standards structure, mechanical, electrical, and plumbing for (MEP).',
      backgroundImage: "url('https://wpbim.themescamp.com/wp-content/uploads/2020/07/sq-img-07-1.jpg')",
      classId: "enginBox"
    }
    ,
    {
      icon: <FaCogs />,
      title: 'Engineering works',
      description: 'To covering and reasonable standards structure, mechanical, electrical, and plumbing for (MEP).',
      backgroundImage: "url('https://wpbim.themescamp.com/wp-content/uploads/2020/07/sq-img-07-1.jpg')",
      classId: "enginBox"
    }
    ,
    {
      icon: <FaCogs />,
      title: 'Engineering works',
      description: 'To covering and reasonable standards structure, mechanical, electrical, and plumbing for (MEP).',
      backgroundImage: "url('https://wpbim.themescamp.com/wp-content/uploads/2020/07/sq-img-07-1.jpg')",
      classId: "enginBox"
    }
    ,
    {
      icon: <FaCogs />,
      title: 'Engineering works',
      description: 'To covering and reasonable standards structure, mechanical, electrical, and plumbing for (MEP).',
      backgroundImage: "url('https://wpbim.themescamp.com/wp-content/uploads/2020/07/sq-img-07-1.jpg')",
      classId: "enginBox"
    }
    // Add more services if needed
  ];

  const styles = {
    section: {
      padding: '50px 20px',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
    },
    heading: {
      textAlign: 'center',
      fontSize: '1.6rem',
      fontWeight: '700',
      margin: '10px 0 16px',
    },
    subheading: {
      textAlign: 'center',
      fontSize: '16px',
      lineHeight: "30px",
      color: '#616161',
      letterSpacing: "0.8px",
      marginBottom: '40px',
    },
    slide: {
      // padding: '0px', // Add some padding between slides
    },
    serviceBox:{
      position:"relative",
      width: "78.5%",
      overflow: "hidden",
      padding: "20px 0px",
    
    },
    serviceSlider:{
      position: "absolute",
      // left:"30px",
      top:"48%",
      fontSize:"3.5rem",
      cursor: "pointer",
    },
    seriveContainer:{
  transform:`translateX(${-directionSlider}px)`,
  transition:"all 1s"
    }
  };
   const backwordStep=()=>{
   setCurrentSlider((prev)=>{
    console.log(prev);
    if(prev==services.length-1){
      return prev;
    }else {
      setDirectionSlider(prev=>{
        return prev+385;
      });
      return prev+1;
    }
   });
   console.log('backword');
   }
   
   const forwordStep=()=>{
   console.log('forword');
   setCurrentSlider((prev)=>{
    console.log(prev);
    if(prev<=2){
      return prev;
    }else {
      setDirectionSlider(prev=>{
        return prev-385;
      });
      return prev-1;
    }
   });
   }
   const ourService=useRef();
   useGSAP(() => {
    const splitText = new SplitType(ourService.current, { types: 'chars' });
    gsap.from(splitText.chars, {
      y: 50,
      duration: 0.7,
      delay: 0.2,
      stagger: 0.08,
      opacity: 0,
      scrollTrigger:{
        trigger:"#ourService",
        start:"top 80%"
      }
    });});

  return (
    <div style={styles.section}>
      <span className='text-[#0cc0d1] mb-[15px]'>What We Do</span>
      <h2 ref={ourService} style={styles.heading} id="ourService">OUR SERVICES</h2>
      <p style={styles.subheading}>
        This includes consulting multidisciplinary consulting work with design and engineering, our <br /> world branches giving full support for executing professional work.
      </p>
      
      <div className='relative'>
      <div className='servicesBox flex items-center w-fit m-auto' style={styles.serviceBox}>
      <div className='flex items-center w-full m-auto' style={styles.seriveContainer}>
        {services.map((service, index) => (
          
          <div key={index} style={styles.slide}>
            <ServiceCard {...service} />
          </div>
        ))}
</div>
        
      </div>
      <div className='backword left-[30px] w-fit' style={styles.serviceSlider}>
        <ion-icon name="chevron-back-outline" onClick={backwordStep}></ion-icon>
    
        </div>
        <div className='forword serviceSlider right-[20px] w-fit' style={styles.serviceSlider}>
        <ion-icon name="chevron-forward-outline" onClick={forwordStep}></ion-icon>
        </div>
      </div>
    </div>
  );
};



export default ServicesSection;
