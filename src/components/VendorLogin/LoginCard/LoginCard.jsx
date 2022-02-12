import { Link } from "react-router-dom";

export default function LoginCard(){
    return(
        <div class="rounded-lg shadow-lg bg-white max-w-sm p-12">
            <h1 className="text-xl tracking-tight text-center font-medium text-gray-900 sm:text-5xl md:text-4xl">Login Now</h1>
            <input type="email" class=" mx-auto mt-8 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your email" />
            <input type="password" class=" mx-auto my-8 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your password" />
            <label className="block">
                <input type="checkbox" id="termsCheckbox" className="text-xl border-red-200 align-middle"/>
                <span className="text-gray-400 ml-2 text-sm" >I agree to the Terms of service</span>
            </label>
            <Link to='/vendor_profile'>
                <button type="button" class="btn btn-primary bg-red-500 text-white font-medium w-full rounded-3xl py-2 my-4">SIGN IN</button>
            </Link>
            <div className="flex my-2">
                <div className="h-0.5 bg-gray-200 flex-1 place-self-center	" />
                <p className="text-sm text-gray-200 mx-2">or</p>
                <div className="h-0.5 bg-gray-200 flex-1 place-self-center	" />
            </div>
            <Link to='/vendor_signup'>
                <button type="button" class="btn btn-primary bg-gray-800 font-medium text-white w-full rounded-3xl py-2 my-2">SIGN UP</button>
            </Link>
            <p className="mt-2"><span className="text-gray-400 font-medium">Forgot your password?</span><button type="button" className="text-green-500 font-medium ml-2">Click here</button></p>
        </div>
    );
}