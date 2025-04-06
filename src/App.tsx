import Clarity from "@microsoft/clarity";
import { Route, Routes } from "react-router-dom";

import Main from "./components/Main";
import ScrapBucketOptimization from "./components/ScrapBucketOptimization";

function App() {
  // Make sure to add your actual project id instead of "yourProjectId".
  const projectId = "qwk7whav75";

  Clarity.init(projectId);

  return (
    <Routes>
      <Route
        path="/scrap-bucket-optimization"
        element={<ScrapBucketOptimization />}
      />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
