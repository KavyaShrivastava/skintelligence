import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './pages';
import SkinExpertsPage from './pages/skinexperts';
import Resources from './pages/resources';
import CommunityPage from './pages/community';
import Login from './pages/Login';
import Profile from './components/Profile';
import ProfilePage from './pages/profilepage';
import React, { useCallback, useContext, useState } from 'react';

function App() {
  return (
  <Router>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route element = {<ProfilePage/>} path = "/profile" exact/>
        <Route path="/skinexperts" element = {<SkinExpertsPage />}/>
        <Route path="/community" element = {<CommunityPage />}/>
        <Route path="/resources" element = {<Resources />}/>
        <Route path="/login" element = {<Login />}/>
      </Routes>
    </Router>

      );
}

export default App;
