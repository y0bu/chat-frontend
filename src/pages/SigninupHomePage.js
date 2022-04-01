import SigninFormComponent from "../components/SigninFormComponent";
import SignupFormComponent from "../components/SignupFormComponent";
import { Alert } from "react-bootstrap";
import { useState } from "react";

function SigninupHomePage() {

    const [error, setError] = useState();
    const [isSignin, setIsSignin] = useState();

    const changeState = () => {
        setError(null);
        setIsSignin(!isSignin);
    }

    const setErrorOnPage = (errorStr) => {
        setError(errorStr);
    }

    return (
        <>
            {isSignin ? <h1>Signin Page:</h1> : <h1>Signup Page:</h1>}
            {isSignin ? <SigninFormComponent setError={setErrorOnPage} /> : <SignupFormComponent changeToSignin={changeState} setError={setErrorOnPage} />}
            <br />
            <Alert.Link onClick={changeState}>{isSignin ? "If you don't have an account click me!" : "Are you already have an account? click me!"}</Alert.Link>
            <br />
            {error && <Alert variant="danger">{error}</Alert>}
        </>
    );

}

export default SigninupHomePage;
