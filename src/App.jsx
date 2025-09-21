import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Participate from "./pages/participate";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/participate" element={<Participate />} />
      </Routes>
    </>
  );
};

export default App;
