import Topbar from "./components/Topbar/TopBar";
import Homepage from "./pages/hompage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { Routes, Route  } from "react-router-dom";
import React from 'react';



function App() {
  const currentUser = true;
  return (
      
      <Routes>
        <Route path="/" element={<Topbar />} />
        <Route path="home" element={<Homepage />} />
        <Route path="posts" element={<Homepage />} />
        <Route path="register" element={ currentUser ? <Homepage /> : <Register />} />
        <Route path="login" element={ currentUser ? <Homepage /> : <Login /> } />
        <Route path="post/:id" element={<Single />} />
        <Route path="write" element={ currentUser ? <Write /> : <Login /> } />
        <Route path="settings" element={ currentUser ? <Settings /> : <Login /> } />

      </Routes>
  );
}

export default App;
