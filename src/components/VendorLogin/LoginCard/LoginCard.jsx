import { useMutation, useQuery } from "@apollo/client";
import { useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SIGNIN_VENDOR } from "../../../graphql/mutations";
import vendorStore from "../../../store/vendor";

export default function LoginCard(){
    const [user, setUser] = useState({});

    const [vendorState, setVendorState] = useState(vendorStore.initialState);

    const [login, { data, loading, error }] = useMutation(SIGNIN_VENDOR);
    const navigate = useNavigate();
    const profilePath = '/vendor_profile';

    // useLayoutEffect(()=>{
    //     vendorStore.subscribe(setVendorState);
    //     vendorStore.init();
    // },[]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'email':
                setUser({ ...user, email: value });
                break;
            case 'password':
                setUser({ ...user, password: value });
                break;
            default:
                break;
        }
    }; 

    

    const handleSubmit = () =>{
        const loginInput = {
            user_email:user.email,
            password:user.password
        };
        login({
            variables: { 
                loginInput: loginInput
            }
        }).then(res=>{
            const vendorDetails = {
                user_email: res.data.login.user_email,
                auth_token: res.data.login.auth_token,
                id: res.data.login.id,
                vendor_id: res.data.login.vendor_id
            };
            vendorStore.setVendorDetails(vendorDetails);
            // vendorStore.clearVendorDetails();
            navigate(profilePath);
        }).catch(err=>console.log(err));
    };

    return(
        <div className="rounded-lg shadow-lg bg-white max-w-sm p-12">
            <h1 className="text-xl tracking-tight text-center font-medium text-gray-900 sm:text-5xl md:text-4xl">Login Now</h1>
            <form noValidate>
                <input type="email" onBlur={handleChange} name="email" className=" mx-auto mt-8 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your email" />
                <input type="password" onBlur={handleChange} name="password" className=" mx-auto my-8 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your password" />
                <label className="block">
                    <input type="checkbox" id="termsCheckbox" className="text-xl border-red-200 align-middle"/>
                    <span className="text-gray-400 ml-2 text-sm" >I agree to the Terms of service</span>
                </label>
                <button type="button" onClick={handleSubmit} className="btn btn-primary bg-red-500 text-white font-medium w-full rounded-3xl py-2 my-4">SIGN IN</button>
                <div className="flex my-2">
                    <div className="h-0.5 bg-gray-200 flex-1 place-self-center	" />
                    <p className="text-sm text-gray-200 mx-2">or</p>
                    <div className="h-0.5 bg-gray-200 flex-1 place-self-center	" />
                </div>
                <Link to="/vendor_signup">
                    <button type="button" className="btn btn-primary bg-gray-800 font-medium text-white w-full rounded-3xl py-2 my-2">SIGN UP</button>
                </Link>
            </form>
            <p className="mt-2"><span className="text-gray-400 font-medium">Forgot your password?</span><button type="button" className="text-green-500 font-medium ml-2">Click here</button></p>
        </div>
    );
}