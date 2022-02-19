import MainMenu from "../../components/Elements/MainMenu/MainMenu";
import LeftTextwBtn from "../../components/Elements/LeftTextwBtn/LeftTextwBtn";
import SignupCard from "../../components/VendorSignup/SignupCard/SignupCard";
import OrderTracking from "../OrderTracking/OrderTracking";

export default function VendorSignup(){
    return(
        <div className="flex flex-col bg-red-50">
            {/* <MainMenu /> */}
            <div className="grid grid-cols-2 my-8">
                <div className="flex flex-col mx-36 my-auto">
                    <LeftTextwBtn 
                        heading="Join the Largest Courier Network"
                        text="The most important part of the joining Shipit is the easiness. There are more than 25 courier providers linked with Shipit catering to more than 1L+ registered users."
                        button="Learn more"
                    />
                </div>
                <div className="mx-24 mb-8">
                    <SignupCard />
                </div>
            </div>  
        </div>
    );
}