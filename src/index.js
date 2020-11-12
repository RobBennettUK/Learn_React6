import React from "react";
import ReactDOM from "react-dom";

// You cannot write: style="color: red" inside of the JSX File. It is not HTML!
// In JSON, it wants this string as a javascript Object. These would be separated with commas (not semi-colons)
// Again, remember that this will also need to be within {} as it is JS and needs to be interpreted

// ReactDOM.render(
//   <h1 style={{ color: "red" }}>Hello World!</h1>,
//   document.getElementById("root")
// );

// There are times when you may want to update style inline
// This is usually when you want the code to update on the Float32Array
// See the JS object we have created below. Note that we use "" around the value

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
  opacity: "0.5"
};

// But we can alter the JS obect and therefore alter to styling on the go!
customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
