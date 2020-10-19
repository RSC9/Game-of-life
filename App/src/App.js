import React, { Component } from 'react';
import Universe from './Components/Universe/universe';

class App extends Component {

  render() {
    return (
      <div>
        Game of Life
        <Universe />
      </div>
    );
  }
}

export default App;