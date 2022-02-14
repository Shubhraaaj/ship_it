import { useLayoutEffect, useState } from "react";
import chatStore from "../../../store/chat";
import vendorStore from "../../../store/vendor";
import './Dummy2.css';

export default function Dummy2(){
    const [chatState, setChatState] = useState(chatStore.initialState);
    const [vendorState, setVendorState] = useState(vendorStore.initialState);

    useLayoutEffect(()=> {
        chatStore.subscribe(setChatState);
        chatStore.init();
        vendorStore.subscribe(setVendorState);
        vendorStore.init();
    },[]);

    const onFormSubmit = e => {
        e.preventDefault();
        const messageObject = {
        person: 'second-person',
        text: e.target.elements.messageInput.value.trim(),
        };
        chatStore.sendMessage(messageObject);
        document.getElementById('messageForm').reset();

        const vendorDetails = {
            user_email: "dtest@vendor.com",
            auth_token: "auth123",
            id: "1234"
        };
        vendorStore.setVendorDetails(vendorDetails);
    };

    return (
        <div className="container">
        <h2 style={{float: 'right'}}>Cortana</h2>
        <div className="chat-box">
            {chatState.data.map(message => (
            <div>
                <p className={message.person}>{message.text}</p>
                <div className="clear"></div>
            </div>
            ))}
        </div>
        <form id="messageForm" onSubmit={onFormSubmit}>
            <input
            type="text"
            id="messageInput"
            name="messageInput"
            required
            />
            <button type="submit">Send</button> <br />
        </form>
        <button className="clear-button" onClick={() => chatStore.clearChat()}>
            Clear Chat
        </button>
        </div>
    );
}