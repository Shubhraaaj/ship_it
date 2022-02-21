import { format } from 'date-fns';
export default function Timeline({ date, status, isCurrent }){

    const dateTime = (date) =>{
        try{
            return format(new Date(date), 'dd/MM/yyyy hh:mm a');
        }catch(err){
            return "NA";
        }
    }

    const colorCodes = () => {
        if(isCurrent)
            return "bg-green-300";
        if(date!=='')
            return "bg-red-300"
        return "bg-gray-200";
    };

    return(           
        <li className="mb-10 ml-6">
            <span className={(colorCodes(date)) + " flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full"} />
            <div className='relative -top-1'>
                <p className="ml-4 text-left text-base font-normal text-gray-800">{status}</p>
                <time className="ml-4 text-left block mb-4 text-sm font-light leading-none text-gray-400 dark:text-gray-500">{dateTime(date)}</time>
            </div>
        </li>
    );
}