import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      Test:
      <p></p>
      <button onClick={increment}>Click</button>
      {counter}
    </div>
  );
};

export default App;