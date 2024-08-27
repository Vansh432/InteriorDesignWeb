import { useRef, useState } from 'react';
import './styles/Portfolio.css';
import PortfolioCard from './PortfolioCard';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import gsap from 'gsap';

const Portfolio = () => {
    const [currentCategory, setCurrentCategory] = useState('All');

    const portfolioData = {
        All: [
            { id: 1, image: 'https://wpbim.themescamp.com/wp-content/uploads/2019/05/port-5-1.jpg', alt: 'Project 1' },
            { id: 2, image: 'https://wpbim.themescamp.com/wp-content/uploads/2020/05/eng-1.jpg', alt: 'Project 2' },
            { id: 3, image: 'https://wpbim.themescamp.com/wp-content/uploads/2019/06/port-06-1.jpg', alt: 'Project 3' },
            { id: 4, image: 'https://wpbim.themescamp.com/wp-content/uploads/2019/05/port-4-1-1.jpg', alt: 'Project 4' },
            { id: 5, image: 'https://wpbim.themescamp.com/wp-content/uploads/2019/05/port-03-1.jpg', alt: 'Project 5' },
            { id: 6, image: 'https://wpbim.themescamp.com/wp-content/uploads/2020/06/02-1-1.jpg', alt: 'Project 6' },
        ],
        Hospitality: [
            { id: 1, image: 'https://wpbim.themescamp.com/wp-content/uploads/2019/05/port-5-1.jpg', alt: 'Project 1' },
            { id: 2, image: 'https://wpbim.themescamp.com/wp-content/uploads/2019/05/port-5-1.jpg', alt: 'Project 2' },
            { id: 3, image: 'https://wpbim.themescamp.com/wp-content/uploads/2019/05/port-5-1.jpg', alt: 'Project 3' },
        ],
        INTERIOR: [
            { id: 1, image: 'https://wpbim.themescamp.com/wp-content/uploads/2019/05/port-5-1.jpg', alt: 'Project 1' },
            { id: 2, image: 'https://wpbim.themescamp.com/wp-content/uploads/2019/05/port-5-1.jpg', alt: 'Project 2' },
            { id: 3, image: 'https://wpbim.themescamp.com/wp-content/uploads/2019/05/port-5-1.jpg', alt: 'Project 3' },
        ]
    };

    const handleCategoryClick = (category) => {
        setCurrentCategory(category);
    };
    const AwesomePortfo=useRef();
   useGSAP(()=>{
     const spliteText=new SplitType(AwesomePortfo.current,{types:"chars"})
     gsap.from(spliteText.chars,{
      y:50,
      duration:0.5,
      delay:0.2,
      stagger:0.05,
      opacity:0,
      scrollTrigger:{
        trigger:AwesomePortfo.current,
        start: 'top bottom',
        end: 'top 80%',
      }
     })
   })
    return (
        <div className="portfolio-container">
            <h2 className="text-[#0cc0d1] mb-[15px]">Recent Work</h2>
            <h1  ref={AwesomePortfo} className="portfolio-title headingSection">AWESOME PORTFOLIO</h1>
            <div className="portfolio-categories">
                {Object.keys(portfolioData).map(category => (
                    <span
                        key={category}
                        className={currentCategory === category ? 'active' : ''}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category.toUpperCase()}
                    </span>
                ))}
            </div>
            <div className="portfolio-grid">
                {portfolioData[currentCategory].map(project => (
                    <PortfolioCard key={project.id} image={project.image} alt={project.alt} />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
