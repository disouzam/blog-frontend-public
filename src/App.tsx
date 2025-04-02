import About from "./components/About";
import Footer from "./components/Footer";

import Clarity from "@microsoft/clarity";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  const workInProgressIcon = "./work-in-progress-color.png";

  // Make sure to add your actual project id instead of "yourProjectId".
  const projectId = "qwk7whav75";

  Clarity.init(projectId);

  return (
    <>
      <main className="container">
        <Header />
        <NavBar />
        <div className="text-center">
          <img
            src={workInProgressIcon}
            className="rounded"
            height="100px"
            alt="Icon of a board saying Work in progress"
          />
          <p>
            <u>Website in construction</u>
          </p>
        </div>
        <About />
        <Footer />
      </main>
    </>
  );
}

export default App;
