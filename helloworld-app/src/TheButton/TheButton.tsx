import React from "react";

function TheButton() {
  function sayHello() {
    console.log("Hello");
  }
  return (
    <>
      <h2>TheButton</h2>
      <button onClick={sayHello}>Click</button>

    </>
  );
}

export default TheButton;
