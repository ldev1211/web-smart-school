import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./features/login/LoginPage";
import HomePage from "./features/home/HomePage";
import { useEffect } from "react";
import SplashPage from "./features/splash/SplashPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SplashPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
