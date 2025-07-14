import { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../../apis.js';
import './style.css'

const HeroSection = () => {
    const sampleHeading = `Hyper boost your <span>Revenue Management, Marketing</span> and Commercial Functions with Business Ready AI`;
    const [heading, setHeading] = useState(sampleHeading);

    useEffect(() => {
        const fetchHeading = async () => {
            try {
                const resp = await axios.get(apiUrl);
                console.log(resp);
                setHeading(resp);
            } catch (e) {
                console.log("Error in Api")
                // console.error(e);
                setHeading(sampleHeading)
            }
        }
        fetchHeading();
    }, [])

    return (
        <section className="hero-section">
            <div className='content-box'>
                <h1 dangerouslySetInnerHTML={{ __html: heading }}></h1>
                <p>Powerful AI solutions that go beyond mere data sorting and exploration. Use our array of AI enabled solutions that understand your business and recommend the optimal way forward.</p>
                <button type='button' className='get-started-btn'>Get Started</button>
            </div>
        </section>
    )
}

export default HeroSection;
