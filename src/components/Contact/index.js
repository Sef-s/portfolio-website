import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
    
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000); // Adjust the timeout duration as needed
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15}/>
                    </h1>
                    <p>Feel free to reach out if you're interested in discussing innovative tech solutions or potential collaborations. With my experience in Python, Java, and web development, I'm always eager to explore new opportunities and contribute to exciting projects.</p>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="ball-pulse" active />
        </>
    )
}

export default Contact