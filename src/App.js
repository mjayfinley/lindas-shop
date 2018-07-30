import React, { Component } from 'react';
import {Menu} from './components/Menu';
import {Footer} from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
