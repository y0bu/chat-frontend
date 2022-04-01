import { useEffect, useRef, useState } from "react";
import MessageContainer from "../components/MessageContainer";
import MessageWritingBar from "../components/MessageWritingBar";
import classes from "./ChatPage.module.css"
import * as actions from "../actions/actions";
import { useNavigate } from 'react-router-dom';

function ChatPage() {

    const container = useRef();

    const [messages, setMessages] = useState([]);
    const [timer, setTimer] = useState(null);
    const [isMounted, setIsMounted] = useState(false);

    const navigate = useNavigate();

    async function update() {
        const response = actions.getMessages();
        response.then(r => {
            if (r === "BAD") navigate("/", { replace: true });
            else {
                let shouldScroll = true;
                setMessages(pre => {
                    if (JSON.stringify(pre) === JSON.stringify(r)) shouldScroll = false;
                    return r;
                });
                if (shouldScroll) container.current.scrollIntoView({ behavior: "smooth" });
            }
        });
        clearTimeout(timer);
        setTimer(setTimeout(update, 200));
    }

    useEffect(() => {
        if (!isMounted) {
            update();
            setIsMounted(true);
        }
    });

    return (
        <>

            {messages.map(message => { return (<div key={message._id}><MessageContainer obj={message} refreshMessages={update} /></div>); })}
            <br />
            <br />
            <br />
            <div ref={container} />
            <div className={classes.messagebar}><MessageWritingBar refreshMessages={update} /></div>
        </>
    );

}

export default ChatPage;
