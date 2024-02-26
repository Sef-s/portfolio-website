import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()


    useEffect(() => {
    
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000); // Adjust the timeout duration as needed
        return () => clearTimeout(timer);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_yk9solg', 'template_8b76ha8', form.current, 'mGuPUUCA6HW-DxmZ2')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            (error) => {
              console.log('Failed to send the message:', error);
              alert('Failed to send the message, please try again')
            }
          )
          
      }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15}/>
                    </h1>
                    <p>Feel free to reach out if you're interested in discussing innovative tech solutions or potential collaborations. With my experience in Python, Java, and web development, I'm always eager to explore new opportunities and contribute to exciting projects.</p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required/>
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <div className='button-wrapper'>
                                            <button type="submit" className='flat-button'>SEND</button>
                                    </div>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='card'>
                    <h2>Yusef Tohamy <br/>
                        1801 N Broad St,<br/>
                        Philadelphia, PA 19122<br/>
                        yuseftohamyy@gmail.com
                    </h2>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[39.98165190585044, -75.15540913178684]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[39.98165190585044, -75.15540913178684]}/>
                    </MapContainer>
                </div>
            </div>
            <Loader type="ball-pulse" active />
        </>
    )
}

export default Contact