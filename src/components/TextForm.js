import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here...");

  const handleUpClick = () => {
    // console.log("Upercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Successfully converted to uppercase","success");
  };

  const handleDownClick = () => {
    // console.log("Upercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Successfully converted to lowercase","success");
  };

  const handleOnChange = (event) => {
    // console.log("On changed");
    setText(event.target.value);
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared","success");
  };

  const copyText = () => {
    let ct = document.getElementById("myBox");
    navigator.clipboard.writeText(ct.value);
    props.showAlert("Text copied to clipboard","success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Successfully removed extra spaces","success");
  };

  return (
    <div
      className="container"
      style={{ backgroundColor: props.mode === "dark" ? "#042743" : "white", color: props.mode === "dark"?"white":"black" }}
    >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{ backgroundColor: props.mode === "dark" ? "#042743" : "white", color: props.mode==="dark"?"white":"black" }}
        ></textarea>
      </div>
      <div className="container">
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={clearText}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={copyText}>
          Copy text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
        <div className="container my-5" style={{ backgroundColor: props.mode === "dark" ? "#042743" : "white", color: props.mode === "dark"?"white":"black" }}>
          <h2>Your text summary</h2>
          <p>
            Words: {text.split(" ").filter((element)=>{return element.length!==0}).length} and Characters: {text.length}
          </p>
          <p>
            Hey user, It will take {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} seconds to
            read this sentence.
          </p>
          <h2>Preview of your text:</h2>
          <p>{text.length>0?text:"Nothing to preview."}</p>
        </div>
      </div>
    </div>
  );
}
