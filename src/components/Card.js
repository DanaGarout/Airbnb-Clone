import React from "react";
import "./Card.css"

function Card(props){
    let badgeText
    if (props.data.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.data.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        
        <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={`../images/${props.data.coverImg}`} className="card--image" />
        <div className="card--stats">
            <img src="../images/star.png" className="card--star" />
            <span>{props.data.rating}</span>
            <span className="gray">({props.data.reviewCount}) • </span>
            <span className="gray">{props.data.location}</span>
        </div>
        <p className="card--title">{props.data.title}</p>
        <p className="card--price"><span className="bold">From ${props.data.price}</span> / person</p>
    </div>
            
        
    )
}
export default Card;