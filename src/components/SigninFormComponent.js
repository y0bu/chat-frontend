import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as actions from "../actions/actions";

function SigninFormComponent(props) {

    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    const navigate = useNavigate();

    const signin = (e) => {
        e.preventDefault();
        const response = actions.signin(usernameInputRef.current.value, passwordInputRef.current.value);
        response.then(r => {
            if (r === "OK") navigate("/chat", { replace: true });
            else props.setError(r);
        });
    }

    return (
        <>
            <Form onSubmit={signin}>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" ref={usernameInputRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" ref={passwordInputRef} />
                </Form.Group>
                <Button variant="primary" type="submit">Signin!</Button>
            </Form>
        </>
    );

}

export default SigninFormComponent;
