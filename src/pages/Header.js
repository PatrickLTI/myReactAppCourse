
import React from "react"
// import { Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";



function Header() {
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
            </div>
        </div >

    );
}

export default Header;