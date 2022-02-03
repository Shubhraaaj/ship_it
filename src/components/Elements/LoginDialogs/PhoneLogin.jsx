import { useState } from "react";

export default function PhoneLogin(){
    const [otpView, setOtpView] = useState(false);
    const [email, setEmail] = useState("test@otp.com");

    const loginText = {
        heading: "Please enter your Email",
        placeholder: "Email ID",
        button: "SEND OTP"
    };

    const otpText = {
        heading: `Please enter the OTP sent to ${email}`,
        placeholder: "6-digit OTP",
        button: "VERIFY OTP"
    };

    return(
        <div>
            <div className="w-1/2 px-12 py-8 bg-red-100 rounded-3xl shadow-lg">
                <h3 className="font-medium text-xl">{otpView?otpText.heading:loginText.heading}</h3>
                <input type="text" class="mt-8 form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder={otpView?otpText.placeholder:loginText.placeholder} />
                {otpView && <button className="btn btn-primary text-center font-medium underline text-red-500 mt-4">Resend OTP</button>}
                <button type="button" class="btn btn-primary bg-red-500 w-full rounded-3xl font-medium text-white py-3 mt-8">{otpView?otpText.button:loginText.button}</button>
            </div>
        </div>
    );
}