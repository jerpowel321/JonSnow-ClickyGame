import React from "react";
import "./style.css";


function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid">
           
                <h1 className="display-4 align-text-bottom text-center">Clicky Game!</h1>
                <b><p className="lead align-text-bottom text-center">Click on an image to earn points, but don't click on any image more than once!</p></b>
           
        </div>
    );
}

export default Jumbotron;