import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar sticky-top d-flex navbar-expand-lg pt-2 pb-2">
        <div className="col-md-5">
            <h4>Jon Snow Memory Game</h4>
        </div>
        <div className="col-md-4">
            <h4>{props.message}</h4>
        </div>
        <div className="col-md-3">
            <h4>Score : {props.score} | Top Score: {props.topScore}</h4>
        </div>
        </nav>
    );
}

export default Nav;