import "./header.css";
import React from "react";

export default function Header() {
    return (
            <div className="header">
                <div className="headerTitles">
                    <span className="headerTitlesSmall">Praneeth Sharma's</span>
                    <span className="headerTitlesBig">React Blog</span>
                </div>
                <img 
                className="headerImage" src="https://img.wallpapersafari.com/desktop/1024/576/22/18/KUuOxl.jpg" 
                alt="" 
                />
            </div>
    );
}
