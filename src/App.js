import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ListBoard from "./component/Board/ListBoard";
import AddBoard from './component/Board/AddBoard';
import EditBoard from './component/Board/EditBoard';

function App() {
  return (
    <div className="container">
      <Router>
        <div className="col-md-6">
          <h1>Board Application</h1>
          <Switch>
            <Route path="/" exact component={ListBoard}/>
            <Route path="/boards" component={ListBoard}/>
            <Route path="/add-boards" component={AddBoard}/>
            <Route path="/edit-board" component={EditBoard}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;