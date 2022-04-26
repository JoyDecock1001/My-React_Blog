import Post from "../post/Post";
import "./posts.css";
import React from "react";

export default function Posts() {
    return (
        <div className="posts">
            <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLbexelm1ige_m4FXzfJp6JATE1Cv7yLeAQ&usqp=CAU"/>
            <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjbEhb46Q7dxSAI4Wd1KsuILcyKIjqNJ92A&usqp=CAU"/>
            <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY1kYfoNQWIVgH22AOahEj8puGJf5AJtfc3g&usqp=CAU" />
            <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKyHiVujK_Frf_-c2d8_Rfbt0nI3uauSfUeA&usqp=CAU&reload=on" />
            <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg-5b8Gp7nQUZ0nCDo4-rUQgtfat2O08zHrw&usqp=CAU" />
        </div>
    );
}

