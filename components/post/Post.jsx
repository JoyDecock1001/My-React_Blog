import "./post.css"
import { Link } from "react-router-dom";
import React from "react";

export default function Post({img}) {
    return (
        <div className="post">
            <img 
            className="postImg"
            src={img} 
            alt=""
            />
            <div className="postinfo">
                <div className="postCategs">
                    <span className="postCateg">
                       <Link className="Link" to ="posts?categ=Music">
                          Music
                        </Link> 
                     </span>
                    <span className="postCateg">
                       <Link className="Link" to ="posts?categ=Music">
                        Life 
                       </Link>
                    </span>
                </div>
               <div className="postTitle">
                <span className="postTitle">
                Green, long hair almost fully covers a strong, radiant face.
                </span>
                </div>
                <hr />
                <div className="postDate">
                <span className="postDate">1 hour ago</span>
                </div>
                <div className="postDesc">
                    <p className="postDesc">
                    JavaScript is a text-based programming language used both on the client-side and server-side 
                    that allows you to make web pages interactive. Where HTML and CSS are languages that give 
                    structure and style to web pages, JavaScript gives web pages interactive elements that 
                    engage a user.JavaScript is a text-based programming language used both on the client-side and server-side 
                    that allows you to make web pages interactive. Where HTML and CSS are languages that give 
                    structure and style to web pages, JavaScript gives web pages interactive elements that 
                    engage a user.JavaScript is a text-based programming language used both on the client-side and server-side 
                    that allows you to make web pages interactive.
                    engage a user.
                    </p>
                </div>
            </div>
        </div>
    )
}
