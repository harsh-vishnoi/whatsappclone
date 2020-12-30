import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar.js';
import Chat from './Chat.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Login.js';
import { useStateValue } from './StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
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
      )}
    </div>
  );
}

export default App;
