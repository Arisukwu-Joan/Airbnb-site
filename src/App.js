import "./App.css";
import Contact from "./components/Contact";
// import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

function App(props) {
  return (
    <div className="body-container">
      <div className="container">
        <div className="App">
          <Navbar />
          {/* <MainContent /> */}
          <div className="section">
            <Contact
              img="swim.png"
              place="5.0 (6).USA"
              title="life lessons with katie zaferes"
              review="From $136 / person"
            />
            <Contact
              img="wedding.png"
              place="5.0 (30).USA"
              title="learning wedding photograph"
              review="From $125 / person"
            />
            <Contact
              img="mountain.png"
              place="5.0 (30).USA"
              title="Group mountain bike"
              review="From $50 / person"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
