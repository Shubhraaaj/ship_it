export default function TitleText({ title, text, small }){
    return (
        <div className="grid grid-cols-2 grid-rows-1 my-2">
            <p className="text-gray-500 text-left font-light">{title}</p>
            <p className={(small?"text-sm":"") + " font-medium text-gray-500 text-left"}>{text}</p>
        </div>
    );
}