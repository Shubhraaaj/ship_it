export default function Filters(){
    return(
        <div className="mx-20 flex flex-row-reverse mt-8">
            <div className="flex space-x-4">
                <p className="font-medium self-center">Filter Price</p>
                <input className="rounded-xl shadow-lg w-24 p-1 pl-4" placeholder="Min price"/>
                <p className="font-medium self-center">to</p>
                <input className="rounded-xl shadow-lg w-24 p-1 pl-4" placeholder="Max price"/>
            </div>
        </div>
    );
};