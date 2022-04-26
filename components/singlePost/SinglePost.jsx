import "./singlePost.css";
import React from "react";

export default function Singlepost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQnaXtaaPzktRy2xapzzlOl3XTsUGB95d4Lg&usqp=CAU" 
                     alt=""
                     className="singlePostImg"
                />
                <h1 className="singlePostTitle">
                Well organized and easy to understand Web building tutorials.
                <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:
                     <b> Prabhavin</b>
                     </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <div className="singlePostDesc">
                <p>
                    I'm the editor of the team and this site.I'm the editor of the team and this site.I'm the editor of the team and this site.I'm the editor of the team and this site.I'm the editor of the team and this site.I'm the editor of the team and this site.I'm the editor of the team and this site.I'm the editor of the team and this site.I'm the editor of the team and this site.I'm the editor of the team and this site.I'm the editor of the team and this site.I'm the editor of the team and this site.I'm the editor of the team and this site.I'm the editor of the team and this site.I'm the editor of the team and this site.I'm the editor of the team and this site.I'm the editor of the team and this site.I'm the editor of the team and this site.I'm the editor of the team and this site.
                </p>
                </div>
            
            </div>
        </div>
    )
}
