import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AnimeDetail from "../pages/AnimeDetail";
import Trending from "../pages/Trending";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/Profile"; 
import Setting from "../pages/Setting";
import Membership from "../pages/Membership";
import FaqHelp from "../pages/FaqHelp"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/anime/:id" element={<AnimeDetail />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/profile" element={<Profile />} /> 
      <Route path="/setting" element={<Setting />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/faq" element={<FaqHelp />} />
    </Routes>
  );
};

export default AppRoutes;
