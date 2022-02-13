import { Link } from "react-router-dom";
import MainMenu from "../../Elements/MainMenu/MainMenu";

export default function HeroSection() {
    return (
        <div>
            {/* <MainMenu /> */}
            <div class="relative bg-white overflow-hidden">
                <div className="absolute">
                    <main class="mt-10 mx-12 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-16 xl:mt-28">
                        <div class="sm:text-center lg:text-left">
                            <h1 class="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-4xl">
                                <span class="block xl:block">Your trusted </span>
                                <span class="block xl:inline">Shipping Partner</span>
                            </h1>
                            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                <span class="block xl:block">We ship happiness,</span>
                                <span class="block xl:inline">Delivering up on time always.</span>
                            </p>
                            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div class="rounded-md shadow">
                                    <Link to='/search'><a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 md:py-4 md:text-lg md:px-10">
                                        I want to ship now
                                    </a></Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div className="-mt-20">
                    <img class="w-full object-cover" src="https://i.ibb.co/Dpx1YBN/Untitled-design-1.png" alt="" />
                </div>
            </div>
        </div>
    );
}