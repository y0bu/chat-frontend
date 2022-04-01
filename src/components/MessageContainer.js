import { Card, Button } from "react-bootstrap";
import classes from "./MessageContainer.module.css";
import * as actions from "../actions/actions";

function MessageContainer(props) {

    const { _id: id, message, creator, date, user  } = props.obj;

    let classMessage;
    if (user === "") classMessage = classes.usermessages;
    else classMessage = classes.othersmessages;

    const deleteMessage = async (e) => {
        e.preventDefault();
        await actions.deleteMessage(id);
        props.refreshMessages();
    }

    return (
        <>
            <Card className={classMessage}>
                <Card.Subtitle className="mb-2 text-muted">{creator}</Card.Subtitle>
                <Card.Text>
                    {message}
                    {user === "" && " "}
                    {user === "" && <Button onClick={deleteMessage} size="sm" variant="danger" className={classes.trashbtn}><i className="fa fa-trash-o" /></Button>}
                </Card.Text>
            </Card>
        </>
    );
}

export default MessageContainer;
