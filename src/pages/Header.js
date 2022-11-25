
import React from "react"
// import { Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import { Link, NavLink } from "react-router-dom";



function Header() {
    return (
        <div>
            <div>
                <HomeButton />
            </div>
            <div>
                <NavLink
                    style={({ isActive }) =>
                        isActive ? { color: "orange" } : { color: "blue" }
                    }
                    to="/"  >  Home
                </NavLink><br/>

                <NavLink
                    style={({ isActive }) =>
                        isActive ? { color: "orange" } : { color: "blue" }
                    }
                    to="/about"  >  About
                </NavLink><br/>

                <NavLink
                    style={({ isActive }) =>
                        isActive ? { color: "orange" } : { color: "blue" }
                    }
                    to="/contact"  >  Contact
                </NavLink><br/>
            </div>
        </div >

    );
}

export default Header;