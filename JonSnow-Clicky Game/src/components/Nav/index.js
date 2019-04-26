import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar fixed-top navbar-expand-lg pt-2 pb-2">
            <h1 className= "text-white">Clicky Game</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li>
                        <div className= "text-white">{props.message}</div>
                    </li>
                    <li>
                        <div className= "text-white mr-2">Score: {props.score} | Best Score: {props.topScore}</div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;