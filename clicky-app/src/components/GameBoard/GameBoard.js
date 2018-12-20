import React, { Component } from 'react';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
//import { Button } from 'reactstrap';//UPDATE
import './GameBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Intro />
      </div>
    );
  }
}

export default App;