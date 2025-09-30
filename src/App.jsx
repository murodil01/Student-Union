import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Participate from "./pages/participate";
import ScrollToTop from "./pages/scrol-top";
import CyberSport from "./pages/cyber-sport";

const App = () => {
  return (
    <>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/participate" element={<Participate />} />
        <Route path="/cyber-sport" element={<CyberSport />} />
      </Routes>
    </>
  );
};

export default App;
