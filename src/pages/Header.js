
import React from "react"
import { Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";

function Header() {
    return (
        <div>
            <div>
                <HomeButton />
            </div>
            <div>
                <Link to="/">Visit Home</Link><br />
                <Link to="/about">About</Link><br />
                <Link to="/contact">Contact</Link>
            </div>
        </div >

    );
}

export default Header;