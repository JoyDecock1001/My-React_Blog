import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import React from "react";

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitles">
                    <span className="settingsTitleUpdate">Update your Account</span>
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
                <form  className="settingsForm">
                    <lable>Profile Picture</lable>
                    <div className="settingsPP">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZG3LHYWT3CR4HYPcnjxAGOICnkdoH_bovg&usqp=CAU" 
                        alt="" 
                        />
                        <label htmlFor= "fineInput">
                        <i className="settingsPPIcon fas fa-user"> </i>
                        </label>
                        <input
                        id="fileInput"
                        type="file"
                        style={{ display: "none" }}
                        className="settingPPInput"
                        />
                                                
                    </div>
                    <label>UserName</label> 
                    <input type="text"  placeholder="Name" name="name" />
                    <label>Email</label> 
                    <input type="email"  placeholder="abcd@gmail.com" name="email"/>
                    <label>Password</label> 
                    <input type="password"  placeholder="*********" name="password"/>
                    <button className="settingsSubmitButton" type="submit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
