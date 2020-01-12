import React from 'react';
import './App.css';
import BoardApp from "./component/Board/BoardApp";
import ListBoard from "./component/Board/ListBoard";

function App() {
  return (
    <div className="container">
      <BoardApp />
      <ListBoard />
    </div>
  );
}

export default App;
