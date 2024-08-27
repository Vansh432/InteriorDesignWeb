import React, { useRef } from 'react';
import './styles/Workprocess.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger)
const WorkProcess = () => {
 
   const workSpaceSubHeading =useRef();
    useGSAP(() => {
      const splitText = new SplitType(workSpaceSubHeading.current, { types: 'chars' });
      gsap.from(splitText.chars, {
        y: 100,
        duration: 0.4,
        delay: 0.2,
        stagger: 0.05,
        opacity: 0,
        scrollTrigger:{
          trigger:"#subHeading",
          start:"top 60%"
        }
      });});


  return (
    <div className="work-process">
      <h2>Smart planning of <span className="highlight">Work process</span></h2>
      <p id='subHeading' ref={workSpaceSubHeading}>This including consulting multi disciplinary consulting work with design and engineering,  our <br/> world branches giving full support for executing professional work</p>
      <div className="process-steps">
        <div className="step">
          <div className="circle">
            <div className="number">01</div>
          </div>
          <h3>CONCEPTUAL</h3>
          <p >Providing proposals to the client for the preliminary with the full models and rendering the reality.</p>
        </div>
        <div className="step">
          <div className="circle">

            <div className="number">02</div>
          </div>
          <h3>SCHEMATIC</h3>
          <p>Enhancement proposals to the client for the preliminary with the full models and rendering the approved.</p>
        </div>
        <div className="step">
          <div className="circle">

            <div className="number">03</div>
          </div>
          <h3>DEVELOPMENT</h3>
          <p>Finalized proposals to the client for the preliminary with the full models and changes are sufficient.</p>
        </div>
      </div>
    </div>
  );
}

export default WorkProcess;
