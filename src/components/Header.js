
import React from "react"
import HomeButton from "./HomeButton";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { LoggedInContext } from "../App";
import LogoutButton from "./LogoutButton";





function Header() {

    const [isLoggedIn, setIsLoggedIn] = React.useContext(LoggedInContext);

    // const buttonStyle = {
    //     backgroundColor: "green",
    //     border: "none",
    //     color: "white",
    //     padding: "15px 32px",
    //     textAlign: "center",
    //     textDecoration: "none",
    //     display: "inline-block",
    //     fontSize: "16px",
    // };

    return (


        <div>

            <div>
                {isLoggedIn ? <LogoutButton /> : "Please login"}
                <HomeButton />
            </div>

            <div>

                <ul className="nav">

                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "link-active" : "link-inactive"}
                            to="/" > Home
                        </NavLink>

                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "link-active" : "link-inactive"}
                            to="/about" > About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "link-active" : "link-inactive"}
                            to="/contact" > Contact
                        </NavLink>
                    </li>

                </ul>

                {/* <NavLink to="/">
                    <button style={buttonStyle}><p>Home</p></button>
                </NavLink>  */}
            </div>

        </div >

    );
}

export default Header;