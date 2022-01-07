import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.js/index.js";
import ProfilePage from "./pages/ProfilePage.js/index.js";
import Background from "../src/components/Background";
function App() {
  return (
    <>
      <Background />
      <Routes>
        <Route path='/resume-2021' element={<MainPage />} />
        <Route path='/profile-page' element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
