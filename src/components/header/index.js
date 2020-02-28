import React, {ReactDOM} from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import "./style.css"

function Header(){


    return(
        <div className="hContainer">
            <div className="linkBox">
            <Link to="/">Home</Link>
            </div>
            <div className="linkBox">
            <Link to="/contact">Contact</Link>
            </div>
            <div className="linkBox">
            <Link to="/projects">Projects</Link>
            </div>
        </div>
    )
}

export default Header;