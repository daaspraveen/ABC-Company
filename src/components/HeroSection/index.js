import { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../../apis.js';
import './style.css'

const HeroSection = () => {
    const sampleHeading = `Hyper boost your Revenue Management, Marketing and Commercial Functions with Business Ready AI`;
    
    const [heading, setHeading] = useState(sampleHeading);

    useEffect(() => {
        const fetchHeading = async () => {
            try {
                const resp = await axios.get(apiUrl);
                if (resp.data && resp.data.text){
                    const newData = resp.data.text;
                    // console.log(newData);
                    if (resp.data.text.split(' ').length >6){
                        const updatedText = newData.split(' ').slice(0,3).join(' ')+' <span>'+
                            newData.split(' ').slice(3, 6).join(' ')+'</span> '+
                            newData.split(' ').splice(6).join(' ');
                        setHeading(updatedText);
                        // console.log(updatedText);
                    } else {
                        setHeading(resp.data.text);
                    }
                }
            } catch (e) {
                console.log("Error in Api")
                // console.error(e);
                setHeading(sampleHeading)
            }
        }
        fetchHeading();
    }, [heading, sampleHeading])

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
