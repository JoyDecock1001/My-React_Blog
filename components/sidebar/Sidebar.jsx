import "./sidebar.css"
import { Link } from "react-router-dom";
import React from "react";


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About ME</span>
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk6BOWKuHoXnE7GaT__PpiWn2ds6BdIVFRPg&usqp=CAU" 
                  alt="" 
                /> 
                <p>
                  I am a hard working, honest individual. I am a good timekeeper, always willing to learn new skills. 
                  I am friendly, helpful and polite, have a good sense of humour. 
                  I am able to work independently in busy environments and also within a team setting.
                </p> 
             </div>
             <div className="sidebarItem">
                 <span className="sidebarTitle">CATEGORIES</span>
                 <ul className="sidebarList">
                     <li className="sidebarListItem">
                        <Link className="Link" to="/posts?categ=Life">
                          Life 
                        </Link>
                     </li>
                     <li className="sidebarListItem">
                     <Link className="Link" to="/posts?categ=Music">
                         Music
                     </Link>
                     </li>
                     <li className="sidebarListItem">
                     <Link className="Link" to="/posts?categ=Tech">
                         Tech
                     </Link>
                     </li>
                     <li className="sidebarListItem">
                     <Link className="Link" to="/posts?categ=Education">
                         Education
                         </Link>
                     </li>
                 </ul>
                 <div className="sidebarItem">
                 <span className="sidebarTitle">Follow Me</span>
                 <div className="sidebarSocial">
                 <i className="sidebarIcon fab fa-facebook"></i>
                 <i className="sidebarIcon fab fa-twitter"></i>
                 <i className="sidebarIcon fab fa-youtube"></i>
                 </div>

                 </div>
             </div>

        </div>
    )
}
