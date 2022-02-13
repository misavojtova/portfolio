import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/index.js";
import ProfilePage from "./pages/ProfilePage/index.js";

function App() {
  return (
    <Routes>
      <Route path='/portfolio' element={<MainPage />} />
      <Route path='/profile-page' element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
