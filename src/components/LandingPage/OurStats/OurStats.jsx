export default function OurStats(){
    return(
        <div class="relative bg-white overflow-hidden my-20">
            <div class="max-w-7xl mx-auto">
                <p className="text-3xl font-medium">Our Stats</p>
                <div className="bg-black w-24 h-0.5 mx-auto my-4" />
                <div className="mt-8 grid grid-cols-4 grid-rows-1">
                    <img class="h-8 w-auto mx-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />
                    <img class="h-8 w-auto mx-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />
                    <img class="h-8 w-auto mx-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />
                    <img class="h-8 w-auto mx-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />
                </div>
            </div>
        </div>
    );
}