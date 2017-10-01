import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Comparison from './components/Comparison'


class App extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: 80 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/compare/:ids" component={Comparison}/>
        </Switch>
      </div>
    )
  }
}

export default App
