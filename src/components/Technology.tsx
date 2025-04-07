import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

function Technology() {
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
        <h2 className="display-4 link-body-emphasis mb-5">
          Here you will find content about technology
        </h2>
      </div>
      <Footer />
    </main>
  );
}

export default Technology;
