import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { USER_OTP } from "../../../graphql/mutations";
import { FETCH_ORDER_BY_TID, VERIFY_OTP } from "../../../graphql/queries";
import loadingStore from "../../../store/loading";
import orderStore from "../../../store/order";

// OTP input autoshift
document.addEventListener("DOMContentLoaded", (event) => {
    const inputs = document.querySelectorAll('#otp > *[id]');
    for (let i = 0; i < inputs.length; i++) { 
        inputs[i].addEventListener('keydown', (event) => { 
            if (event.key==="Backspace" ) { 
                inputs[i].value='' ; 
                if (i !==0) inputs[i - 1].focus(); 
            } else { 
                if (i===inputs.length - 1 && inputs[i].value !=='' ) { 
                    return true; 
                } else if (event.keyCode> 47 && event.keyCode < 58) { 
                    inputs[i].value=event.key; 
                    if (i !==inputs.length - 1) inputs[i + 1].focus(); 
                    event.preventDefault(); 
                } else if (event.keyCode> 64 && event.keyCode < 91) { 
                    inputs[i].value=String.fromCharCode(event.keyCode); 
                    if (i !==inputs.length - 1) inputs[i + 1].focus(); 
                    event.preventDefault(); 
                } 
            } 
        }); 
    } 
});

export default function PhoneLogin(){
    const [otpView, setOtpView] = useState(false);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState({});
    const [floatOtp, setFloatOtp]=useState("");
    const navigate = useNavigate();
    const [err, setErr] = useState("");
    const [ userLogin, {data, loading, error}] = useMutation(USER_OTP);

    const [order, setOrder] = useState(orderStore.initialState);

    useLayoutEffect(()=>{
        orderStore.subscribe(setOrder);
        orderStore.init();
    },[]);

    const loginText = {
        heading: "Please enter your Email",
        placeholder: "Email ID",
        button: "SEND OTP"
    };

    const otpText = {
        heading: `Please enter the OTP sent to ${email}`,
        placeholder: "6-digit OTP",
        button: "VERIFY OTP"
    };

    const [verifyOtp, {datas, loadings, errors}] = useLazyQuery(VERIFY_OTP, {
        variables: {
            otp: parseFloat(floatOtp),
            email: email
        }
    });

    const [trackOrderByTrackId, {datat, loadingt, errort}] = useLazyQuery(FETCH_ORDER_BY_TID, {
        variables: {
            id: order.tracking_id
        }
    });

    useEffect(()=>{
        if(floatOtp.length===6){
            verifyOtp().then(res => {
                if(res!==undefined&&res?.data!==null){
                    fetchOrder();
                }else{
                    setErr("Invalid OTP");
                }
            }).catch((errors)=>{
                setErr(errors.message);
            }).finally(()=>{
                loadingStore.setLoading({loading: false});
            });
        }
        else
            loadingStore.setLoading({loading: false});
    },[floatOtp]);

    const handleOtp = (e) => {
        const {name, value} = e.target;
        switch(name){
            case 'first': setOtp({...otp, first: value});
                            break;
            case 'second': setOtp({...otp, second: value});
                            break;
            case 'third': setOtp({...otp, third: value});
                            break;
            case 'fourth': setOtp({...otp, fourth: value});
                            break;
            case 'fifth': setOtp({...otp, fifth: value});
                            break;
            case 'sixth': setOtp({...otp, sixth: value});
                            break;
            default: break;
        }
    };

    const handleButtonClick = () => {
        loadingStore.setLoading({loading: true});
        if(!otpView){
            const emailInput = {
                email: email
            };
            userLogin({ 
                variables: {
                    userLoginInput: emailInput
                } 
            }).then(res=>{
                const otp = res.data.userLogin.otp;
                setOtpView(true);
                console.log(otp);
            }).catch(err=>{
                console.log(err);
            }).finally(()=>{
                loadingStore.setLoading({loading: false});
            });
        }
        else{
            let x = "";
            for(const [key, value] of Object.entries(otp)){
                x=x.concat(value);
            }
            setFloatOtp(x);
        }
    };

    const fetchOrder = () =>{
        trackOrderByTrackId().then(res=>{
            let ord = res.data.trackOrderByTrackId;
            // ord.name = ord.vendor_id;
            const trackingPath = '/order_tracking';
            orderStore.setOrder(ord, navigate(trackingPath));
        }).catch(err=>{
            setErr(err.message);
        }).finally(()=>{
            loadingStore.setLoading({loading: false});
        });
    };

    return(
        <div>
            <div className="w-full px-12 py-8 bg-red-100 rounded-3xl shadow-lg">
                <h3 className="font-medium mb-4 text-xl">{otpView?otpText.heading:loginText.heading}{otpView && <button className="text-sm font-light underline ml-4" onClick={()=>setOtpView(false)}>Change</button>}</h3>
                {err?.length>0 && <p className="text-sm text-red-500">{err}</p>}
                <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} className="mt-4 form-control w-full px-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none disabled:opacity-80" disabled={otpView} placeholder={loginText.placeholder} />
                <div id="otp" className={(otpView?"visible":"hidden") + " flex flex-row justify-center text-center px-2 mt-5"}> 
                    <input onBlur={handleOtp} className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="first" name="first" maxLength="1" /> 
                    <input onBlur={handleOtp} className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="second" name="second" maxLength="1" /> 
                    <input onBlur={handleOtp} className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="third" name="third" maxLength="1" /> 
                    <input onBlur={handleOtp} className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fourth" name="fourth" maxLength="1" /> 
                    <input onBlur={handleOtp} className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fifth" name="fifth" maxLength="1" /> 
                    <input onBlur={handleOtp} className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="sixth" name="sixth" maxLength="1" /> 
                </div>
                {otpView && <div className="flex justify-center text-center mt-5"> <a className="flex items-center text-red-400 hover:text-red-600 cursor-pointer"><span className="font-bold">Resend OTP</span><i className='bx bx-caret-right ml-1'></i></a> </div>}
                <button type="button" className="btn btn-primary bg-red-500 w-full rounded-3xl font-medium text-white py-3 mt-8" onClick={handleButtonClick}>{otpView?otpText.button:loginText.button}</button>
            </div>
        </div>
    );
}