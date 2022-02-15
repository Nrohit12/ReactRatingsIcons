import React from "react";
import "./assets/styles.css";
import Widgets from "./components/widgets";
import getDimensions from "./hooks/windowDimensions";

function App() {
  const [windowDimension, setWindowDimension] = React.useState(getDimensions());

  React.useLayoutEffect(() => {
    function updateSize() {
      setWindowDimension(getDimensions());
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

 

  return (
    <div className="App">
      <header className="header">
        <h2>Rate your love for samosa and Jalebi.</h2>
        <p>
          Rate your love for Samosa with Circular Label{" "}
          <span>
            {windowDimension.innerWidth > 900 ? "on the left" : "down"}{" "}
          </span>
          and for Jalebi with Triangular Label{" "}
          <span>
            {windowDimension.innerWidth > 900 ? "on the right" : "below"}
          </span>
        </p>
      </header>

      <div>
        <Widgets/>
      </div>
      
      <footer className="footer">
        <h3>
          Oops you have reached the end of the page. Scroll up to rate your love for the cusine
        </h3>
      </footer>
    </div>
  );
}

export default App;
