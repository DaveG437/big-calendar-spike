import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './App.css';
import Calendar from './Calendar.js';
import Dialogue from './Dialogue';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          {/*<Calendar></Calendar>*/}
          <Dialogue/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
