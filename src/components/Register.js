import React from "react"
import Button from "@mui/material/Button";

function Register() {
    return (

        <div className="create--button">
            <Button onClick={registering} variant='contained' color='success'>Register Users</Button>
        </div>
    );
}
export default Register;

function registering() {

    fetch("http://localhost:3001/users/register", {
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

