import React, { Component } from 'react';
import { getUniverse } from './Services/UniverseService';

class App extends Component {

  async getUniverse() {
    const universe = await getUniverse();
    console.log('+universe+', universe);
  }

  componentDidMount() {
      this.getUniverse();
  }

  render() {
    return (
      <div>
        Game of Life
      </div>
    );
  }
}

export default App;
