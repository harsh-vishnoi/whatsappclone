import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar.js';
import Chat from './Chat.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Login.js';

function App() {

  const [user, setUser] = useState(null);

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
