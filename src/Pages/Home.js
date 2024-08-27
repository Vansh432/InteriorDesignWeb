import Slider from '../Component/Slider'
import Card1 from '../Component/Card1';
import image1 from '../Images/Home/image-1.png'
import image2 from '../Images/Home/image-2.png'
import WorkProcess from '../Component/Workprocess';
import Service from '../Component/Service';
import Portfolio from '../Component/Portfolio';
import Blog from '../Component/Blog';
import Statics from '../Component/Statics'
import Contact from '../Component/Contact'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';



const Home = () => {

    const cardContainer = useRef();
    const cardContainer2 = useRef();
    const cardContainer3 = useRef();
    useGSAP(() => {
        gsap.from(cardContainer.current,{
            x:100,
            duration:1,
            delay:0.05,
            scrollTrigger:{
               trigger:cardContainer.current,
               markers:true,
               start:"top 100%",
               end:"end 100%"
            }
        })
    })
    return <>
        <Slider />
        <div className='py-[95px] flex justify-center items-center font-[Poppins", sans-serif]  flex-wrap'>
            <div className='w-fit flex p-[10px]'>
                <Card1 ref={cardContainer} className="secondLevelCard1" backgroundColor="rgba(214,214,214,0.38)" color="black"
                    url="https://wpbim.themescamp.com/wp-content/uploads/2020/07/bg-6.jpg" image={image1} width="50%" imageBox="imageBox1"
                />
                <Card1 className="secondLevelCard2" backgroundColor="rgba(0,0,0,0.56)" color="white" url="https://wpbim.themescamp.com/wp-content/uploads/2020/07/bg-4.jpg" image={image2} width="100%" imageBox="imageBox2" />
                <Card1 className="secondLevelCard3" backgroundColor="#0cc0d1" color="white" url="https://wpbim.themescamp.com/wp-content/uploads/2020/07/bg-7.png" image={image2} width="100%" imageBox="imageBox3" />
            </div>
        </div>

        <WorkProcess />
        <Service />
        <Portfolio />
        <Statics />
        <Blog />
        <Contact />

    </>
}
// Slider.defaultProps = {
//     backgroundColor:"white"
// }


export default Home;