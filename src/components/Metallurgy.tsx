import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

function Metallurgy() {
  const workInProgressIcon = "./work-in-progress-color.png";
  return (
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
      <div className="text-center">
        <h2 className="display-1 link-body-emphasis mb-1">
          Scrap Bucket Optimization
        </h2>
        <p className="text-center">
          <a
            href="https://colab.research.google.com/github/disouzam/ortools-tutorial/blob/colab-changes/eaf-steelmaking-optimization/eaf_optimization_undergrad_exercise.ipynb"
            target="_blank"
            rel="noopener"
          >
            Optimization of scrap bucket charging in an EAF (undergrad
            exercise)!
          </a>
        </p>
      </div>
      <Footer />
    </main>
  );
}

export default Metallurgy;
