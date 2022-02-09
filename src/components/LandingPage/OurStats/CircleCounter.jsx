export default function CircleCounter({ number, title }){
    return(
        <p className="h-40 w-40 rounded-full bg-gray-700 py-8 mx-auto">
            <span className="text-white text-4xl font-medium block">{number}</span>
            <span className="text-white font-light mx-8 block mt-1">{title}</span>
        </p>
    );
}