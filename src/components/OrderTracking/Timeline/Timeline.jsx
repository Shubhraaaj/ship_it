import { format } from 'date-fns';
export default function Timeline({ date, status }){
    return(           
        <li class="mb-10 ml-6">
            <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-red-200 rounded-full" />
            <div className='relative -top-1'>
                <p class="ml-4 text-left text-base font-normal text-gray-800">{status}</p>
                <time class="ml-4 text-left block mb-4 text-sm font-light leading-none text-gray-400 dark:text-gray-500">{format(new Date(date), 'dd/MM/yyyy hh:mm a')}</time>
            </div>
        </li>
    );
}