import React,{useRef} from 'react';
import './styles/Blog.css';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import gsap from 'gsap';

const BlogSection = () => {
    const blogTitle=useRef();
    useGSAP(() => {
     const splitText = new SplitType(blogTitle.current, { types: 'chars' });
     gsap.from(splitText.chars, {
       y: 50,
       duration: 0.7,
       delay: 0.2,
       stagger: 0.08,
       opacity: 0,
       scrollTrigger:{
         trigger:blogTitle.current,
         start:"top 80%"
       }
     });});
    const posts = [
        {
            date: 'February 26, 2020',
            category: 'Home Style',
            title: 'Five Things You Should Know About Modern Furniture.',
            description: 'Council are celebrating the incredible achievement of the Companies and Stakeholders. Due to BIM’s fast invasion...',
            image: 'https://wpbim.themescamp.com/wp-content/uploads/2020/06/03-2.jpg', // Replace with actual image path
            author: 'Andres Alfaro',
            categoryTags: ['Interior', 'Modern'],
            comments: '2 Comments',
            readMore: 'Read More',
        },
        {
            date: 'August 28, 2019',
            category: 'Design, Home Style',
            title: 'In Good Taste: Mark Finlay Architects and Interiors',
            description: 'Council are celebrating the incredible achievement of the Companies and Stakeholders. Due to BIM’s fast invasion...',
            image: 'https://wpbim.themescamp.com/wp-content/uploads/2019/08/02.jpg',
            readMore: 'Read More',
        },  {
            date: 'August 28, 2019',
            category: 'Design, Home Style',
            title: 'In Good Taste: Mark Finlay Architects and Interiors',
            description: 'Council are celebrating the incredible achievement of the Companies and Stakeholders. Due to BIM’s fast invasion...',
            image: 'https://wpbim.themescamp.com/wp-content/uploads/2020/06/03-2.jpg',
            readMore: 'Read More',
        },
        {
            date: 'August 28, 2019',
            category: 'Design, Home Style',
            title: 'In Good Taste: Mark Finlay Architects and Interiors',
            description: 'Council are celebrating the incredible achievement of the Companies and Stakeholders. Due to BIM’s fast invasion...',
            image: 'https://wpbim.themescamp.com/wp-content/uploads/2020/06/03-2.jpg',
            readMore: 'Read More',
        },
        {
            date: 'August 28, 2019',
            category: 'Design, Home Style',
            title: 'In Good Taste: Mark Finlay Architects and Interiors',
            description: 'Council are celebrating the incredible achievement of the Companies and Stakeholders. Due to BIM’s fast invasion...',
            image: 'https://wpbim.themescamp.com/wp-content/uploads/2020/06/03-2.jpg',
            readMore: 'Read More',
        },
        {
            date: 'August 28, 2019',
            category: 'Design, Home Style',
            title: 'In Good Taste: Mark Finlay Architects and Interiors',
            description: 'Council are celebrating the incredible achievement of the Companies and Stakeholders. Due to BIM’s fast invasion...',
            image: 'https://wpbim.themescamp.com/wp-content/uploads/2020/06/03-2.jpg',
            readMore: 'Read More',
        },
        // Add more posts as needed
    ];

    return (
        <div className="blog-section">
            <h2 className="section-title" ref={blogTitle}>LATEST OUR BLOG</h2>
            <div className="blog-posts">
                {posts.map((post, index) => (
                    <div key={index} className="blog-post">
                        <div className="blog-image-container">
                            <img src={post.image} alt={post.title} className="blog-image" />
                            <div className="blog-date">{post.date}</div>
                        </div>
                        <div className="blog-content">
                            <div className="blog-category">{post.category}</div>
                            <h3 className="blog-title">{post.title}</h3>
                            <p className="blog-description">{post.description}</p>
                            <div className="blog-meta">
                                <span>{post.readMore}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogSection;
