import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Participate from "./pages/participate";
import ScrollToTop from "./pages/scrol-top";
import CyberSport from "./pages/cyber-sport";
import ReaderHabit from "./pages/reader-habit";

const App = () => {
  return (
    <>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/participate" element={<Participate />} />
        <Route path="/cyber-sport" element={<CyberSport />} />
        <Route path="/reader-habit" element={<ReaderHabit />} />
      </Routes>
    </>
  );
};

export default App;
