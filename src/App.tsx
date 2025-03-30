import About from "./components/About";
import Footer from "./components/Footer";

// import "./App.css";

function App() {
  const workInProgressIcon = "./work-in-progress-color.png";

  return (
    <>
      <div className="banner-content">
        <p className="work-in-progress-icon">
          <img
            src={workInProgressIcon}
            alt="Icon of a board saying Work in progress"
          ></img>
        </p>
        <p><u>Website in construction</u></p>
      </div>
      <About />
      <Footer />
    </>
  );
}

export default App;
