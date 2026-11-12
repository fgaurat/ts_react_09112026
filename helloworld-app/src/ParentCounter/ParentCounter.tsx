import React, { useState } from "react";
import ShowCounter from "../ShowCounter/ShowCounter";
import UpdateCounter from "../UpdateCounter/UpdateCounter";

function ParentCounter() {
  const [cpt, setCpt] = useState<number>(0);

  return (
    <>
      <h2>ParentCounter</h2>
      <br />
      <ShowCounter value={cpt} />
      <br />
      <UpdateCounter />
    </>
  );
}

export default ParentCounter;
