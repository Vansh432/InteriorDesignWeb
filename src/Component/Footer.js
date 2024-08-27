import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheck } from 'react-icons/fa';
import './styles/Footer.css';


const Connect = () => (
  <div style={styles.section}>
    <h3>LET'S CONNECT</h3>
    <div className='footerDetails'>
    <p><FaMapMarkerAlt className='mr-[10px] text-[#3bc0d1]'/> 2659 Autostrad St, London, UK</p>
    <p><FaPhone className='mr-[10px] text-[#3bc0d1]'/> +12 3 1462 2249, 2248</p>
    <p><FaEnvelope className='mr-[10px] text-[#3bc0d1]' /> Support@company.com</p>
    <p><FaClock className='mr-[10px] text-[#3bc0d1]'/> Mon - Fri / 9:00 AM - 6:00 PM</p>
    </div>
  </div>
);

const RecentPosts = () => (
  <div style={styles.section}>
    <h3>RECENT POSTS</h3>
    <div className='footerDetails'> 
    <div className='flex '>
    <div  className='w-[130px] h-[70px] '>
      <img src="https://wpbim.themescamp.com/wp-content/uploads/2020/06/03-2.jpg" alt="loading.." style={{objectFit:"cover"}} />
    </div>
    <div className='ml-[10px]'>
      <p className='pb-[5px]'>In Good Taste: Mark Finlay Architects and Interiors</p>
      <span>February 26, 2020</span>
      </div>
    </div>
    <div className='flex '>
    <div  className='w-[130px] h-[70px] '>
      <img src="https://wpbim.themescamp.com/wp-content/uploads/2020/06/03-2.jpg" alt="loading.."  style={{objectFit:"cover"}} />
    </div>
    <div className='ml-[10px]'>
      <p className='mb-[5px]'>Five Things You Should Know About Modern Furniture.</p>
      <span>August 28, 2019</span>
    </div>
    </div>
    </div>
  </div>
);

const OurServices = () => (
  <div style={styles.section}>
    <h3>OUR SERVICES</h3>
    <div className='footerDetails'>
    <p> <span className='border-1 p-1 rounded-[50%] bg-[#dcdcdc] text-[#000] flex justify-center items-center mr-[10px]'><FaCheck  /> </span>Interior Design</p>
    <p> <span className='border-1 p-1 rounded-[50%] bg-[#dcdcdc] text-[#000] flex justify-center items-center mr-[10px]'><FaCheck /></span> Architecture Modeling</p>
    <p> <span className='border-1 p-1 rounded-[50%] bg-[#dcdcdc] text-[#000] flex justify-center items-center mr-[10px]'><FaCheck/></span> Rendering Buildings</p>
    <p> <span className='border-1 p-1 rounded-[50%] bg-[#dcdcdc] text-[#000] flex justify-center items-center mr-[10px]'><FaCheck/></span> Landscape works</p>
    </div>
  </div>
);

const OurGallery = () => (
  <div style={styles.section}>
    <h3>OUR GALLERY</h3>
    <div className='footerDetails'>
    <div style={styles.gallery} className='galleryFooter'>
      <img src="https://wpbim.themescamp.com/wp-content/uploads/2020/06/03-1-150x150.jpg" alt="Gallery 1" />
      <img src="https://wpbim.themescamp.com/wp-content/uploads/2020/06/01-1-150x150.jpg" alt="Gallery 2" />
      <img src="https://wpbim.themescamp.com/wp-content/uploads/2020/05/slide-4-150x150.jpg" alt="Gallery 3" />
      <img src="https://wpbim.themescamp.com/wp-content/uploads/2020/06/01-150x150.jpg" alt="Gallery 4" />
    </div>
    </div>
  </div>
);

function FooterTag(){
  return <>
  <div className='h-[50px] text-center leading-[50px] bg-[#000] text-[#fff]'>
    <p className=''>
    © 2024 Vansh. Design by Vansh deep arya
    </p>
  </div>
  </>
}

const Footer = () => (<>
  <div className='max-sm:pl-[10px]' style={styles.footer}>
    <Connect />
    <RecentPosts />
    <OurServices />
    <OurGallery />
  </div>
  <FooterTag/>
  </>
);

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '50px 140px',
    paddingTop:"95px",
    backgroundColor: '#1c1c1c',
    color: '#ffffff',
  },
  section: {
    flex: 1,
    margin: '0 20px',
  },
  gallery: {
    display: 'flex',
    flexWrap: 'wrap', 
    gap: '5px',
  },
};

export default Footer;
