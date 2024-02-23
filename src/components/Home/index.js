import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Resume from '../../assets/Files/YusefTohamy-Resume.pdf'
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['y', 'u', 's', 'e', 'f']
    const jobArray = ['a', ' ', 's', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']

    useEffect(() => {
    
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000); // Adjust the timeout duration as needed
        return () => clearTimeout(timer);
    }, []);


    return (
        <>
        <div className="container home-page"> 
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <span className={`${letterClass} _13`}>,</span>
                <br />
                <span className={`${letterClass} _14`}>I</span>
                <span className={`${letterClass} _15`}>'</span>
                <span className={`${letterClass} _16 text-animate-m`}>m</span>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={17} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={18} />
                </h1>
                <h2>Backend Developer / Python Engineer / Entrepreneur</h2>
                <Link to="/contact" className="contact-link" role="button">
                    <span class="text">CONTACT ME</span>
                </Link>
                <a href={Resume} className="resume-link" download="YusefTohamy-Resume.pdf" role="button">
                    <span class="text">RESUME</span>
                </a>
            </div>
            <div className="iframe-container">
                <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/0Kdjb5J2fFZWtKnCx2cBQb?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
            </div>
        </div>
        <Loader type="ball-pulse" />
        </>
    );
}

export default Home