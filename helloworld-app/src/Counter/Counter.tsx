import React, { useState } from "react";

function Counter() {
  const [cpt, setCpt] = useState<number>(0);

  function setTo10() {
    setCpt(10);
  }

  function inc() {
    setCpt(oldValue => oldValue+1);
  }

  return (
    <>
      <h2>Counter</h2>
      cpt: {cpt}
      <br />
      <button onClick={setTo10}>set to 10</button>
      <button onClick={inc}>+1</button>
      <br />
    </>
  );
}

export default Counter;
