// import CallIcon from '@material-ui/icons/Call';
// import MailIcon from '@material-ui/icons/Mail';

import ContactDetails from "../../Elements/ContactDetails/ContactDetails";

export default function Contactus(){
    return(
        <div class="relative bg-white overflow-hidden my-20">
            <div class="max-w-7xl mx-auto">
                <p className="text-3xl font-medium">Contact us</p>
                <div className="bg-black w-24 h-0.5 mx-auto my-4" />
                <p className="text-gray-500">We are available 24x7 for you</p>
            </div>
            <ContactDetails />
        </div>
    );
}