import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

function Main() {
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
      <About />
      <Footer />
    </main>
  );
}

export default Main;
