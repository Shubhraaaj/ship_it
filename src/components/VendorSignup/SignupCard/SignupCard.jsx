import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { SIGNUP_VENDOR } from "../../../graphql/mutations";
import { minMaxLength, passwordStrength, userExists, validateConfirmPassword, validEmail } from "../../../utils/FormValidatins";

/**TODO
 * Form validations
 * Loading screens
 * Signup -> Login -> Vendor Profile
 * Store state
 */

export default function SignupCard(){
    const [user, setUser] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [signup, { data, loading, error }] = useMutation(SIGNUP_VENDOR);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let formerrors = formErrors;
        switch (name) {
            case 'name':
                if(minMaxLength(value, 3)){
                    formerrors[name] = `Name should have min 3 characters`;
                }else{
                    delete formerrors[name];
                    setUser({ ...user, name: value });
                }
                break;
            case 'email':
                if(!value || validEmail(value)){
                    formerrors[name] = `Email is invalid`;
                }else{
                    userExists(value).then((result)=>{
                        if(result){
                            formerrors[name]=`Email ID already registered. Please use different email`;
                        }else{
                            delete formerrors[name];
                            setUser({ ...user, email: value });
                        }
                    });
                }
                break;
            case 'phone':
                if(minMaxLength(value, 10)){
                    formerrors[name] = `Please enter valid phone number`;
                }else{
                    delete formerrors[name];
                    setUser({ ...user, phone: value });
                }
                break;
            case 'password':
                if(minMaxLength(value, 6)) {
                    formerrors[name] = 'Password should have minimum 6 characters';
                } else if (passwordStrength(value)) {
                    formerrors[name] =
                    'Password is not strong enough. Include an upper case letter, a number or a special character.';
                } else {
                    delete formerrors[name];
                    setUser({ ...user, password: value });
                    if (user.confirmPassword) {
                        validateConfirmPassword(
                            value,
                            user.confirmPassword,
                            formerrors
                        );
                    }
                }
                break;
            case 'confirmPassword':
                    let valid = validateConfirmPassword(
                        user.password,
                        value,
                        formerrors
                    );
                    if (valid) {
                        setUser({ ...user, confirmPassword: value });
                    }
                    break;
            default:
                break;
        }
        setFormErrors(formerrors);
    };


    const handleSubmit = () =>{
        const vendorInput = {
            name:user.name,
            email:user.email,
            phone_number:user.phone,
            password:user.password
        };
        signup({
            variables: { 
                vendorInput: vendorInput
            }
        }).then(res=>console.log(res)).catch(err=>console.log(err));
    };

    return(
        <div className="rounded-lg shadow-lg bg-white max-w-sm px-12 py-8">
            <h1 className="text-4xl tracking-tight font-medium text-center text-gray-900 sm:text-5xl md:text-3xl">Create Account</h1>
            <ul className="my-2">
                {Object.entries(formErrors || {}).map(([prop, value]) => {
                    return (
                    <li className='text-sm text-left text-red-500' key={prop}>
                        {value}
                    </li>
                    );
                })}
            </ul>
            <form noValidate>
                <input
                    type="text" 
                    noValidate 
                    onBlur={handleChange} 
                    name="name" 
                    className={(formErrors&&formErrors.name?"form-control border-2 border-red-600":"form-control") + " mx-auto mt-6 block w-full px-4 py-2 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"} 
                    placeholder="Name of Organisation" 
                />
                <input 
                    type="email" 
                    noValidate 
                    onBlur={handleChange} 
                    name="email" 
                    className={(formErrors&&formErrors.email?"form-control border-2 border-red-600":"form-control") + " mx-auto mt-6 block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" }
                    placeholder="Enter Email ID" 
                />
                <input 
                    type="text" 
                    noValidate 
                    onBlur={handleChange} 
                    name="phone" 
                    maxLength="10" 
                    className={(formErrors&&formErrors.phone?"form-control border-2 border-red-600":"form-control") + " mx-auto mt-6 form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"}
                    placeholder="Enter Mobile Number" 
                />
                <input 
                    type="password" 
                    noValidate 
                    onBlur={handleChange} 
                    name="password" 
                    className={(formErrors&&formErrors.password?"form-control border-2 border-red-600":"form-control") + " mx-auto mt-6 block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" }
                    placeholder="Enter password" 
                />
                <input 
                    type="password" 
                    noValidate 
                    onBlur={handleChange} 
                    name="confirmPassword" 
                    className={(formErrors&&formErrors.confirmPassword?"form-control border-2 border-red-600":"form-control") + " mx-auto mt-6 block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" }
                    placeholder="Re-enter password" />
                <label className="block my-6 text-left">
                    <input 
                        type="checkbox" 
                        name="terms" 
                        className="form-control align-middle w-4 h-4"
                    />
                    <span className="text-gray-400 ml-2 text-sm">
                        I agree to the Terms of service
                    </span>
                </label>
                <button 
                    type="button"
                    disabled={Object.entries(formErrors||{}).length > 0}
                    onClick={handleSubmit} 
                    className="btn btn-primary font-medium disabled:bg-gray-400 bg-red-500 text-white w-full rounded-3xl py-3"
                    >
                        CREATE ACCOUNT
                </button>
            </form>
        </div>
    );
}