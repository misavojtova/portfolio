import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage.js";
function App() {
  return (
    <Routes>
      <Route path='/resume-2021' element={<MainPage />} />
      <Route path='/profile-page' element={<MainPage />} />
    </Routes>
  );
}

export default App;
