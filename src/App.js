import React from 'react';
import './App.css';
import Sidebar from './Sidebar.js';
import Chat from './Chat.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App__Body">
        <Router>
          <Sidebar/>
          <Switch>
            <Route path="/rooms/:roomID">
              <Chat />
            </Route>
            <Route path="/">
              
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
