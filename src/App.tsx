import Clarity from "@microsoft/clarity";
import { Route, Routes } from "react-router-dom";

import Main from "./components/Main";
import Metallurgy from "./components/Metallurgy";
import Technology from "./components/Technology";
import Photography from "./components/Photography";
import Cycling from "./components/Cycling";

function App() {
  // Make sure to add your actual project id instead of "yourProjectId".
  const projectId = "qwk7whav75";

  Clarity.init(projectId);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/metallurgy" element={<Metallurgy />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/cycling" element={<Cycling />} />
    </Routes>
  );
}

export default App;
