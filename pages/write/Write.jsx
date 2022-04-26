import "./write.css";
import React from "react";

export default function Write() {
    return (
        <div className="write">
            <img src="http://cdn.shopify.com/s/files/1/0277/3070/6514/articles/rDBGA-9A_1024x1024.jpg?v=1619590672" 
            alt="" 
            className="writeImg" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput" >
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input id="fileInput" type="file" style= {{ display: "none" }} />
                    <input 
                    className="writeInput"
                    placeholder="Title"
                    type="text"
                    autoFocus={true}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea className="writenInput writeText"
                    placeholder="Tell your Story..."
                    type="text"
                    autoFocus={true} 
                    />
                </div>
                <button className="writeSubmit" type="submit">
                    Publish
                </button>
            </form>
        </div>
    )
}
