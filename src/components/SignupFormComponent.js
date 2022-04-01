import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import * as actions from "../actions/actions";

function SignupFormComponent(props) {

    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    const signup = (e) => {
        e.preventDefault();
        const response = actions.signup(usernameInputRef.current.value, passwordInputRef.current.value);
        response.then(r => {
            if (r === "OK") props.changeToSignin();
            else props.setError(r);
        });
    }

    return (
        <>
            <Form onSubmit={signup}>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" ref={usernameInputRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" ref={passwordInputRef} />
                </Form.Group>
                <Button variant="primary" type="submit">Signup!</Button>
            </Form>
        </>
    );

}

export default SignupFormComponent;
