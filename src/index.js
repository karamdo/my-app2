import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Star from "./Star";

function App() {
  const [sw, setSw] = useState({});
  const [count, setCount] = useState(0);
  console.log("rerender");
  React.useEffect(() => {
    console.log("useEffect");
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setSw(data));
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>++</button>
      <pre>{JSON.stringify(sw, null, 4)}</pre>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
