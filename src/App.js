import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import Contact from "./components/Contact";
import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <div>
          <Navbar
            toggleMode={toggleMode}
            title="Text Mod"
            aboutText="About"
            contactText="Contact"
            homeText="Home"
            mode={mode}
          />
        </div>
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              {/* put "exact" beacause react do partial rendering and we don't want that */}
              <About />
            </Route>
            <Route exact path="/contact">
              {/* put "exact" beacause react do partial rendering and we don't want that */}
              <Contact />
            </Route>
            <Route exact path="/">
              {/* put "exact" beacause react do partial rendering and we don't want that */}
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analize below"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* <div>
          <Navbar
            toggleMode={toggleMode}
            title="Text Mod"
            aboutText="About"
            contactText="Contact"
            homeText="Home"
            mode={mode}
          />
        </div>
        <Alert alert={alert} />
      <TextForm
        showAlert={showAlert}
        heading="Enter the text to analize below"
        mode={mode}
      />
      <About /> */}
    </>
  );
}

export default App;
