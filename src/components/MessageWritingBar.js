import { Form, FormControl, Button } from "react-bootstrap";
import { useRef } from 'react';
import * as actions from "../actions/actions";
import { useNavigate } from 'react-router-dom';

function MessageWritingBar(props) {

    const messageInputRef = useRef();

    const navigate = useNavigate();

    const sendMessage = (e) => {
        e.preventDefault();
        const response = actions.createMessage(messageInputRef.current.value);
        e.target.reset();
        response.then(r => {
            if (r === "OK") props.refreshMessages();
            else navigate("/", { replace: true });
        });
    }

    return (
        <>
            <Form className="d-flex" onSubmit={sendMessage}>
                <FormControl
                    type="search"
                    placeholder="write some message"
                    className="me-2"
                    aria-label="Search"
                    ref={messageInputRef}
                />
                <Button variant="primary" type="submit">Send</Button>
            </Form>
        </>
    );
}

export default MessageWritingBar;
