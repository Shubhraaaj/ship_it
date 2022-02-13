import { useMutation } from "@apollo/client";
import { useState } from "react";
import { SIGNUP_VENDOR } from "../../../graphql/mutations";

export default function SignupCard(){
    const [user, setUser] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [signup, { data, loading, error }] = useMutation(SIGNUP_VENDOR);

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setUser({ ...user, name: value });
                break;
            case 'email':
                setUser({ ...user, email: value });
                break;
            case 'phone':
                setUser({ ...user, phone: value });
                break;
            case 'password':
                setUser({ ...user, password: value });
                break;
            case 'confirmPassword':
                setUser({ ...user, confirmPassword: value });
                break;
            default:
                break;
        }
    };

    const handleSubmit = () =>{
        const vendorInput = {
            name:user.name,
            email:user.email,
            phone_number:user.phone,
            password:user.password
        };
        console.log(user);
        signup({
            variables: { 
                vendorInput: vendorInput
            }
        }).then(res=>console.log(res)).catch(err=>console.log(err));
    };

    return(
        <div className="rounded-lg shadow-lg bg-white max-w-sm px-12 py-8">
            <h1 className="text-4xl tracking-tight font-medium text-center text-gray-900 sm:text-5xl md:text-3xl">Create Account</h1>
            <form noValidate>
                <input type="text" noValidate onBlur={handleChange} name="name" className="mx-auto mt-6 form-control block w-full px-4 py-2 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name of Organisation" />
                <input type="email" noValidate onBlur={handleChange} name="email" className=" mx-auto mt-6 form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter Email ID" />
                <input type="text" noValidate onBlur={handleChange} name="phone" maxLength="10" className=" mx-auto mt-6 form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter Mobile Number" />
                <input type="password" noValidate onBlur={handleChange} name="password" className=" mx-auto mt-6 form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter password" />
                <input type="password" noValidate onBlur={handleChange} name="confirmPassword" className=" mx-auto mt-6 form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Re-enter password" />
                <label className="block my-6 text-left">
                    <input type="checkbox" name="terms" className="form-control align-middle w-4 h-4"/>
                    <span className="text-gray-400 ml-2 text-sm" >I agree to the Terms of service</span>
                </label>
                <button type="button" onClick={handleSubmit} className="btn btn-primary font-medium bg-red-500 text-white w-full rounded-3xl py-3">CREATE ACCOUNT</button>
            </form>
        </div>
    );
}