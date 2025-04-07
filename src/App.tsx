import Clarity from "@microsoft/clarity";
import { Route, Routes } from "react-router-dom";

import Main from "./components/Main";
import Metallurgy from "./components/Metallurgy";

function App() {
  // Make sure to add your actual project id instead of "yourProjectId".
  const projectId = "qwk7whav75";

  Clarity.init(projectId);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/metallurgy" element={<Metallurgy />} />
    </Routes>
  );
}

export default App;
