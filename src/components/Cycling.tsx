import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

function Cycling() {
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
      <Footer />
    </main>
  );
}

export default Cycling;
