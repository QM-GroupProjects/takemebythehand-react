import React, { Component } from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Carousels from "./Carousels";
import Mood from './Mood';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<HashRouter>
        <div>
            <Route exact path="/" component={Mood}/>
            <Route path="/stuff" component={Carousels}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
