import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import SigninupHomePage from "./pages/SigninupHomePage";
import ChatPage from "./pages/ChatPage";
import classes from "./App.module.css"

function App() {
    return (
        <>
            <div className={classes.outer}>
                <Container className={classes.inner}>
                    <Routes>
                        <Route path="/" element={<SigninupHomePage />} />
                        <Route path="/chat" element={<ChatPage />} />
                    </Routes>
                </Container>
            </div>
        </>
    );
}

export default App;
