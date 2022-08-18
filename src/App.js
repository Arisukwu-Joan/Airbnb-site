import "./App.css";
import Contact from "./components/Contact";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="body-container">
      <div className="container">
        <div className="App">
          <Navbar />
          <MainContent />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
