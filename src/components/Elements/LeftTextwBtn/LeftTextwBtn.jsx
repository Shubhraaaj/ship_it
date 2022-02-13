export default function LeftTextwBtn({ heading="Great! Your Order has been placed.", text="The most important part of the joining Shipit is the easiness. There are more than 25 courier providers linked with Shipit catering to more than 1L+ registered users.", button="Final Amount - Rs.2880.00" }){
    return(
        <div>
            <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-4xl text-left">
                {heading}
            </h1>
            <p className="mt-3 text-base text-gray-500 text-left sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto">
                {text}
            </p>
            <button href="#" className="flex mt-5 sm:mt-8 items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 md:py-4 md:text-lg md:px-10">
                {button}
            </button>
        </div>
    );
}