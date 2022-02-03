// import CallIcon from '@material-ui/icons/Call';
// import MailIcon from '@material-ui/icons/Mail';

export default function Contactus(){
    return(
        <div class="relative bg-white overflow-hidden my-20">
            <div class="max-w-7xl mx-auto">
                <p className="text-3xl font-medium">Contact us</p>
                <div className="bg-black w-24 h-0.5 mx-auto my-4" />
                <p className="text-gray-500">We are available 24x7 for you</p>
            </div>
            <div className='grid grid-cols-3 grid-rows-1 mx-20 my-8'>
                <p className='text-xl font-medium'>Talk with us</p>
                <div className='flex justify-center'>
                    {/* <CallIcon className='mr-2'/> */}
                    <p className='font-medium'>+91-860-386-2085</p>
                </div>
                <div className='flex justify-center'>
                    {/* <MailIcon className='mr-2'/> */}
                    <p className='font-medium'>care@shipit.com</p>
                </div>
            </div>
        </div>
    );
}