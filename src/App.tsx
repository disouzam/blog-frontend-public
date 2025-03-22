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
        <p>
          Developed by Dickson Souza @2025 | &nbsp;
          <a
            href="https://www.linkedin.com/in/disouzam"
            target="_blank"
            rel="noopener"
          >
            LinkedIn profile
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://github.com/disouzam"
            target="_blank"
            rel="noopener"
          >
            GitHub profile
          </a>
        </p>

        <p>
          <a
            href="https://www.flaticon.com/free-icons/under-construction"
            title="under-construction icons"
          >
            Under-construction icons created by Freepik - Flaticon
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
