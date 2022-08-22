import "./App.css";
import Contact from "./components/Contact";
// import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import swim from "../src/images/swim.png";
import wedding from "../src/images/wedding.png";
import mountain from "../src/images/mountain.png";

function App(props) {
  return (
    <div className="body-container">
      <div className="container">
        <div className="App">
          <Navbar />
          {/* <MainContent /> */}
          <div className="section">
            <Contact
              img={swim}
              place="5.0 (6).USA"
              title="life lessons with katie zaferes"
              review="/ person"
            />
            <Contact
              img={wedding}
              place="5.0 (30).USA"
              title="learning wedding photograph"
              review=" / person"
            />
            <Contact
              img={mountain}
              place="5.0 (30).USA"
              title="Group mountain bike"
              review="/ person"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
