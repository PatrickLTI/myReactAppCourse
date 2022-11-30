import React from "react";
import Button from "@mui/material/Button";

function DbData() {
    return (
        <div>
            {/* Find All Button */}
            <div className="read--button">
                <Button onClick={callGetAll} variant='contained' color='success'>Get All Users</Button>
            </div>

            {/* Create Button */}
            {/* <div className="create--button">
                <Button onClick={callPostBody} variant='contained' color='success'>Create Users</Button>
            </div> */}

            {/* Query Find Button */}
            <div className="getquery--button">
                <Button onClick={callGetQuery} variant='contained' color='success'>Query Button</Button>
            </div>

            {/* Path Find Button */}
            <div className="getpathquery--button">
                <Button onClick={callGetParams} variant='contained' color='success'>Path Button</Button>
            </div>

            {/* POST Find Button */}
            <div className="getpostquery--button">
                <Button onClick={callGetBody} variant='contained' color='success'>BODY Button</Button>
            </div>

            {/* PUT Button */}
            <div className="put--button">
                <Button onClick={callPutBody} variant='contained' color='success'>PUT Button</Button>
            </div>

            {/* PUT Button */}
            <div className="partial--button">
                <Button onClick={callPatchBodyUsername} variant='contained' color='success'>Partial Button</Button>
            </div>

            {/* PUT Button */}
            <div className="error--button">
                <Button onClick={callDeleteParams} variant='contained' color='error'>Delete Button</Button>
            </div>

        </div>
    )
}

export default DbData;

/* Function that will make an API call to get all users, and then pop-up an alert with the results. */
function callGetAll() {
    fetch("http://localhost:3001/users", { method: "GET" })
        .then((data) => data.json())
        .then((json) => alert(JSON.stringify(json)));
}

// Function that will create a user (hard coded) ++++++++++++++++++++++++++++++++
function callPostBody() {
    fetch("http://localhost:3001/users", {
        method: "POST",
        body: JSON.stringify({
            username: "John",
            password: "Wick1001",
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((data) => data.json())
        .then((json) => alert(JSON.stringify(json)));
}

//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Find one user (GET)
function callGetQuery() {
    fetch("http://localhost:3001/user?username=Timmy", { method: "GET" })
        .then((data) => data.json())
        .then((json) => alert(JSON.stringify(json)));
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Finding Read-Single using Path parameter
function callGetParams() {
    fetch("http://localhost:3001/users/elie", { method: "GET" })
        .then((data) => data.json())
        .then((json) => alert(JSON.stringify(json)));
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Read Single (POST) Body Params
function callGetBody() {
    fetch("http://localhost:3001/users/get", {
        method: "POST",
        body: JSON.stringify({
            username: "Timmy",
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((data) => data.json())
        .then((json) => alert(JSON.stringify(json)));
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Update - Full (PUT)

function callPutBody() {
    fetch("http://localhost:3001/users", {
        method: "PUT",
        body: JSON.stringify({
            username: "Timmy",
            password: "New Password"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((data) => data.json())
        .then((json) => alert(JSON.stringify(json)));
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Update Partial PATCH
// http://localhost:3001/users/Timmy/password
function callPatchBodyUsername() {
    fetch("http://localhost:3001/users/Timmy/password", {
        method: "PATCH",
        body: JSON.stringify({
            password: "Hello World!"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((data) => data.json())
        .then((json) => alert(JSON.stringify(json)));
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Delete
function callDeleteParams() {
    fetch("http://localhost:3001/users/John", { method: "DELETE" })
        .then((data) => data.json())
        .then((json) => alert(JSON.stringify(json)));
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



