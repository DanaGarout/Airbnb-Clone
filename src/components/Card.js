import React from "react";
import "./Card.css"

function Card(props){
    return (
        <div className="card-content">
                <div className="card">
                    <img src={`../images/${props.img}`} className="card-image"></img>
                <div className="card-stats">
                    <img src="/images/star.png" className="card-star"></img>
                    <span>{props.rating}</span>
                    <span className="gray">({props.reviewCount}) • </span>
                    <span className="gray">{props.country}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
                

                </div>
            </div>
        
    )
}
export default Card;