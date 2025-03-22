import "./App.css";
import Footer from "./components/Footer";

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
        <p>Website in construction</p>
      </div>
      <Footer />
    </>
  );
}

export default App;
