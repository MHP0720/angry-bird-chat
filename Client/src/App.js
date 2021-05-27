import React from 'react';

import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Link
  } from "react-router-dom";
  import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';



const App = () => {
    return(
        <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
    </Router>
    );
};

export default App;