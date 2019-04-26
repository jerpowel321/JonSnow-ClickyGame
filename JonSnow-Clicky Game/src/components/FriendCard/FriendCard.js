import React from "react";
import "./style.css";

const FriendCard = props => (
    <div className="col-md-3 col-4">
        <div className="card my-2" onClick={() => props.selectCard(props.id)}>
            <div className="card-img-top center-cropped hvr-grow">
                <img className="w-100 image" alt={`JonSnow ${props.id}`} src={props.image} />
            </div>
        </div>
    </div>
)

export default FriendCard;