import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
    
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000); // Adjust the timeout duration as needed
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15}/>
                </h1>
                <p>As a passionate Computer Science major at Temple University, I bring a unique blend of academic knowledge and practical experience to the field of technology. My journey through a rigorous curriculum has honed my skills in Python, MySQL, HTML, Java, C, and more, equipping me with the technical proficiency to tackle complex challenges. My education has not only been about coding; it's been a holistic approach to understanding the underpinnings of computer systems, programming logic, and the latest in web development trends.</p>
                <p>In the professional sphere, I co-founded Lead Emporium LLC, where I applied my technical skills to create innovative solutions that drove significant business success. By developing bots for data scraping and product tracking using Python, I was able to streamline operations and contribute to generating over $80,000 in revenue per month. My role required a deep understanding of market analysis, supplier negotiation, and strategic planning, showcasing my ability to blend technical expertise with business acumen.</p>
                <p>My journey in technology is not just about developing software; it's about my passion for creating solutions that impact lives and my dedication to lifelong learning in the ever-evolving tech landscape. This pursuit is deeply personal, reflecting my commitment to innovation and the joy I find in turning challenges into opportunities for growth.</p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color="#FFDE57"/>
                    </div>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About