import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
            <h1 class= "text-white">Clicky Game</h1>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li>
                        <div class= "text-white">Click an Image to Begin!</div>
                    </li>
                    <li>
                        <div class= "text-white">Score</div>
                    </li>
                    <li>
                        <div class= "text-white">Top Score</div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;