import Contactus from "../../components/LandingPage/Contactus/Contactus";
import Footer from "../../components/LandingPage/Footer/Footer";
import HeroSection from "../../components/LandingPage/HeroSection/HeroSection";
import OfficialPartners from "../../components/LandingPage/OfficialPartners/OfficialPartners";
import OurStats from "../../components/LandingPage/OurStats/OurStats";
import TrackOrder from "../../components/LandingPage/TrackOrder/TrackOrder";
import WhyUs from "../../components/LandingPage/WhyUs/WhyUs";

export default function LandingPage () {
    return (<div>
        <HeroSection />
        <OfficialPartners />
        <OurStats />
        <WhyUs />
        <TrackOrder />
        <Contactus />
        <Footer />
    </div>);
};