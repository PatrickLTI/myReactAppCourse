
import React from "react"
// import { Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";



function Header() {
    const buttonStyle = {
        backgroundColor: "green",
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
    };

    return (
        <div>
            <div>
                <HomeButton />
            </div>
            <div>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "link-active" : "link-inactive"}
                    to="/" > Home
                </NavLink>
                <br />

                <NavLink
                    className={({ isActive }) =>
                        isActive ? "link-active" : "link-inactive"}
                    to="/about" > About
                </NavLink>
                <br />

                <NavLink
                    className={({ isActive }) =>
                        isActive ? "link-active" : "link-inactive"}
                    to="/contact" > Contact
                </NavLink>
                <br />


                <NavLink to="/">
                    <button style={buttonStyle}><p>Home</p></button>
                </NavLink>
            </div>
        </div >

    );
}

export default Header;