import '../index.css'
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

import { heroVideo, smallHeroVideo} from "../utils/index.js";

import {useState , useEffect} from "react";

function HeroSection() {
    const [ videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    const handleVideoWidthSet = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
        } else {
            setVideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoWidthSet)
        return () => {
            window.removeEventListener('resize', handleVideoWidthSet)
        };
    }, []);


    useGSAP(() => {
        gsap.to('#myhero', {opacity:1, delay:2, duration:2.7})
        gsap.to('#cta', { opacity:1, delay:2, y:50, direction:-1})
    }, [])


    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p id="myhero" className="hero-title">iPhone 15 Pro</p>
                <div className="md:w-10/12 w-9/12">
                    <video autoPlay loop playsInline muted className="pointer-events-none" key={videoSrc}>
                        <source src={videoSrc} />
                    </video>
                </div>
            </div>
            <div id="cta" className="flex flex-col items-center opacity-0 translate-y-[-2] mt-[-15vh]">
                <a href="#highlights" className="btn">Buy</a>
                <p>From 199$/Month or 999$</p>
            </div>
        </section>
    )
}

export default HeroSection;