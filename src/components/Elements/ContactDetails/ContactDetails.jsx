export default function ContactDetails(){
    return(
        <div className='grid grid-cols-3 grid-rows-1 mx-20 my-8'>
            <p className='text-xl text-gray-600 font-medium'>Talk with us</p>
            <div className='flex justify-center'>
                <p className='font-medium text-lg text-red-400'>+91-860-386-2085</p>
            </div>
            <div className='flex justify-center'>
                <p className='font-medium text-lg text-red-400'>care@shipit.com</p>
            </div>
        </div>
    );
}