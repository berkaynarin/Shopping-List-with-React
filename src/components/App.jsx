import React, { useState } from "react";
import Counter from "./Counter";

function App() {
  const [items, setItems] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ]);

  return (
    <div>
      {items.map((counter) => {
        return <Counter key={items.id} />;
      })}
    </div>
  );
}

export default App;
