import React from "react";
import "./style.css";


function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-white align-bottom text-center">Clicky Game!</h1>
                <p className="lead text-white align-bottom text-center">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        </div>
    );
}

export default Jumbotron;