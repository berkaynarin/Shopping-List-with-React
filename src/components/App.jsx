import React, { useState } from "react";
import Counter from "./Counter";

function App() {
  const [items, setItems] = useState([
    { id: 1, value: 5 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ]);

  return (
    <div>
      {items.map((counter) => {
        return <Counter key={counter.id} value={counter.value} />;
      })}
    </div>
  );
}

export default App;
