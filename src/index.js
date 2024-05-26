import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [sw, setSw] = useState({});
  const [count, setCount] = useState(0);
  console.log("rerender");
  React.useEffect(() => {
    fetch(`https://codeforces.com/api/user.rating?handle=karamdo`)
      .then((res) => res.json())
      .then((data) =>
        setSw({
          handle: data.result[count].handle,
          rank: data.result[count].rank,
          oldrating: data.result[count].oldRating,
          newRating: data.result[count].newRating,
          change: data.result[count].newRating - data.result[count].oldRating,
        })
      );
    fetch(`https://codeforces.com/api/user.info?handles=karamdo`)
      .then((res) => res.json())
      .then((data) =>
        setSw((old) => {
          return {
            ...old,
            ranking: data.result[0].rank,
            // data: data,
          };
        })
      );
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>++</button>
      <pre>{JSON.stringify(sw, null, 2)}</pre>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
