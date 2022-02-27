import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Contactus from "../../components/LandingPage/Contactus/Contactus";
import Footer from "../../components/LandingPage/Footer/Footer";
import HeroSection from "../../components/LandingPage/HeroSection/HeroSection";
import OfficialPartners from "../../components/LandingPage/OfficialPartners/OfficialPartners";
import OurStats from "../../components/LandingPage/OurStats/OurStats";
import TrackOrder from "../../components/LandingPage/TrackOrder/TrackOrder";
import WhyUs from "../../components/LandingPage/WhyUs/WhyUs";
import navigationStore from "../../store/navigation";

export default function LandingPage () {
    const trackRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    // trackRef.current.scrollIntoView();
    const [nav,setNav] = useState(navigationStore.initialState);

    useEffect(()=>{
        console.log('scroll', nav);
        if(nav.navigate==="about"){
            aboutRef.current.scrollIntoView();
        }
        else if(nav.navigate==="track"){
            trackRef.current.scrollIntoView();
        }
        else if(nav.navigate==="contact"){
            contactRef.current.scrollIntoView();
        }
    },[nav]);

    useLayoutEffect(()=>{
        navigationStore.subscribe(setNav);
        navigationStore.init();
    },[]);

    return (
    <div>
        <HeroSection />
        <OfficialPartners />
        <OurStats />
        <div ref={aboutRef}><WhyUs /></div>
        <div ref={trackRef}><TrackOrder /></div>
        <div ref={contactRef}><Contactus /></div>
    </div>);
};