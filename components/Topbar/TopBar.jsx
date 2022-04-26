import "./topbar.css";
import React from "react";

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook"></i>
            <i className="topIcon fab fa-twitter"></i>
            <i className="topIcon fab fa-youtube"></i></div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img
                className="topImg"
                src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4K_1Bnf_xBemPSF0ViEC6lk52KXI4SvvYcQ&usqp=CAU"
                alt=""
                />
                <i className="topSearchIcon fas fa-search"></i>
            </div>

        </div>
    )
}
