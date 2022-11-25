
import React from "react"
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <Link to="/">Visit Home</Link><br/>
            <Link to="/about">About</Link><br/>
            <Link to="/contact">Contact</Link>
        </div>);
}

export default Header;