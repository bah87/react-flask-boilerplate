import React from 'react';
import { observer } from 'mobx-react';

import { AppViewmodel } from './app-viewmodel';

import './app.css';

@observer
class App extends React.Component {
  constructor() {
    super();
    this.viewmodel = new AppViewmodel();
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">{this.viewmodel.welcomeMessage}</header>
      </div>
    );
  }
}

export default App;
