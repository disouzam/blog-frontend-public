import "./App.css";

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
      <footer>
        <p>© 2025 Dickson Souza</p>
        <p>
          <a
            href="https://www.flaticon.com/free-icons/under-construction"
            title="under-construction icons"
          >
            Under-construction icons created by Freepik - Flaticon
          </a>
        </p>
        <p>
          <a
            href="https://www.flaticon.com/free-icons/excavation"
            title="excavation icons"
          >
            Excavation icons created by IconBaandar - Flaticon
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
