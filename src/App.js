import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import StagePatterns from './StagePatterns/StagePatterns'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        <header className="App-header">
          <h1 className="App-title">Stage Pattern Console View</h1>
        </header>
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/stagePatternlist"/>
                )}/>
                 <Route exact path='/stagePatternlist' component={StagePatterns} />
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
