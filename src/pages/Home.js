import Main from "../components/Main"
import DbData from "../components/DbData";
import React, { useContext } from "react";
import DbData2 from "../components/DbData2";
import Register from "../components/Register";
import Login from "../components/Login";
import LoginForm from "../components/LoginForm";
import { LoggedInContext } from "../App";

function Home() {
    const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);
    return (
        <div>
            <DbData />
            <DbData2 />
            <Register />
            <Login />
            <div>
                {isLoggedIn ? "Welcome!" : <LoginForm />}
                
            </div>

            <Main />
        </div>
    )
}
export default Home;