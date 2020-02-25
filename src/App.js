import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Canvas from './components/Canvas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.message}</h1>
        <Canvas />
      </div>
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;