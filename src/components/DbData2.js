import React from "react"
import Button from "@mui/material/Button";


function DbData2() {
    return (
        <div className="create--button">
            <Button onClick={callPostBody} variant='contained' color='success'>Create Users</Button>
        </div>
    )
}
export default DbData2;

// Function that will create a user (hard coded) ++++++++++++++++++++++++++++++++
function callPostBody() {
    fetch("http://localhost:3001/users", {
        method: "POST",
        body: JSON.stringify({
            username: "John",
            password: "The BRAN NEW WICK ",
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((data) => data.json())
        .then((json) => alert(JSON.stringify(json)));
}

//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++