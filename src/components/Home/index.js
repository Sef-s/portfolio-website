import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Resume from '../../assets/Files/YusefTohamy-Resume.pdf'

const Home = () => {
const [letterClass, setLetterClass] = useState('text-animate')
const nameArray = ['y', 'u', 's', 'e', 'f']
const jobArray = ['a', ' ', 's', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']
const aboutMeLines = [
    'Passionate software engineer with a knack for problem-solving.'.split(''),
    'Co-founder of Lead Emporium, leveraging Python and Selenium.'.split(''),
    'Enjoy tackling complex coding challenges.'.split(''),
    'Equipped with a diverse technical toolkit, ready to build robust, scalable applications.'.split('')
  ];
  

  
  

useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 4000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
}, []);


    return (
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
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                <a href={Resume} className='flat-button2' download="YusefTohamy-Resume.pdf">RESUME</a>
            </div>
            <div class="card">
                <div class="card__content">
                    <h3>About me</h3>
                </div>
            </div>
        </div>
    );
}

export default Home