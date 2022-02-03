export default function SignupCard(){
    return(
        <div class="rounded-lg shadow-lg bg-white max-w-sm px-12 py-8">
            <h1 className="text-4xl tracking-tight font-medium text-gray-900 sm:text-5xl md:text-3xl">Create Account</h1>
            <input type="email" class=" mx-auto mt-6 form-control block w-full px-4 py-2 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Name of Organization" />
            <input type="email" class=" mx-auto mt-6 form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter Email ID" />
            <input type="email" class=" mx-auto mt-6 form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter Mobile Number" />
            <input type="password" class=" mx-auto mt-6 form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter password" />
            <input type="password" class=" mx-auto mt-6 form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Re-enter password" />
            <label className="block my-4">
                <input type="checkbox" id="termsCheckbox" className="text-xl border-red-200 align-middle"/>
                <span className="text-gray-400 ml-2 text-sm" >I agree to the Terms of service</span>
            </label>
            <button type="button" class="btn btn-primary font-medium bg-slate-600 w-full rounded-3xl py-2">Create Account</button>
        </div>
    );
}