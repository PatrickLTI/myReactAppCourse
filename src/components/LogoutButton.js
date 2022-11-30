import React, {useContext} from "react";
import { LoggedInContext } from "../App"; 

function LogoutButton () {
    const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
    const handleSubmit = () =>{setIsLoggedIn(false)}
    return <button onClick={handleSubmit} >Logout</button>;
}

export default LogoutButton;