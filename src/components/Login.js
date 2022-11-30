import React from "react"
import Button from "@mui/material/Button";

function Login() {
    return (

        <div >
            <Button onClick={signin} variant='contained' color='success'>Login Users</Button>
        </div>
    );
}
export default Login;

function signin() {

    fetch("http://localhost:3001/users/login", {
        method: "POST",
        body: JSON.stringify({
            username: "Benny2022",
            password: "Rocks100@@",
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((data) => data.json())
        .then((json) => alert(JSON.stringify(json)));
}