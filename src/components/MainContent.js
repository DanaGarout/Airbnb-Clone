import React from "react";
import "./MainContent.css"

function MainContent(){
    return (
        <div className="main-content">
             <img src="/images/photo-grid.png" className="photo-grid"></img>
             <div className="text">
                <h1 className="title">Online Experiences</h1>
                <p className="paragraph">Join unique interactive activities
                 led<br></br> by one-of-a-kind hosts--all without<br></br> leaving home</p>
             </div>
        </div>
    )
}
export default MainContent;