import Main from "../components/Main"
import DbData from "../components/DbData";
import React from "react";
import DbData2 from "../components/DbData2";
import Register from "../components/Register";
import Login from "../components/Login";
import LoginForm from "../components/LoginForm";

function Home() {
    return (
        <div>
            <DbData />
            <DbData2 />
            <Register />
            <Login />
            <LoginForm />
            <Main />
        </div>
    )
}
export default Home;