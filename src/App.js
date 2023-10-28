import React from "react";
import Card from "./Card";
import heritageData from "./heritageData.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Heritage Sites in India</h1>
      <div className="card-container">
        {heritageData.items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
