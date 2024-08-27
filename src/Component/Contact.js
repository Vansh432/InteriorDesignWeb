import Card from  './Card3';
import { useRef } from 'react';
import { FaPhone,FaEnvelope,FaMapMarkerAlt } from 'react-icons/fa';
import Contactform from './Contactform'
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import gsap from 'gsap';
function Contact(){
    const contactTitle=useRef();
    useGSAP(() => {
     const splitText = new SplitType(contactTitle.current, { types: 'chars' });
     gsap.from(splitText.chars, {
       y: 50,
       duration: 0.7,
       delay: 0.2,
       stagger: 0.08,
       opacity: 0,
       scrollTrigger:{
         trigger:contactTitle.current,
         start:"top 80%"
       }
     });});
    const contactDetails=[
        {
         icon:<FaPhone/>,
         title:"Call Us",
         subtitle1:"+91 123456789",
         subtitle2:"+91 098765432",
        },
        {
            icon:<FaEnvelope/>,
         title:"Email Us",
         subtitle1:"info@Kalpana.com",
         subtitle2:"help@Kalpana.com",
        },{
            icon:<FaMapMarkerAlt/>,
         title:"Address",
         subtitle1:"C-62,durga nagar",
         subtitle2:"bareilly, Uttar Pardesh",
        }

    ]
    return <>
        <div className="text-center bg-[#fff] py-[95px]">
            <div>
            <h2 className="text-[#0cc0d1] mb-[15px]">Recent Work</h2>
            <h1 className="contact-title headingSection"  ref={contactTitle}>KEEP IN TOUCH</h1>
            <div className='flex w-fit m-auto flex-wrap'>
                {contactDetails.map((Element,index)=>{
                    return <Card key={index} {...Element}/>
                })}
            </div>
            <Contactform/>
            </div>
        </div>

    </>
}

export default Contact;