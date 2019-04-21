import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './views/Home'
import Login from './views/Login'
import Place from './views/Place'
import Form from './views/Form'
import Header from './components/Header'

import './App.css'

class App extends Component {
  state = {
    open: false
  }

  toggleMenu = forced => {
    const { open } = this.state
    this.setState({
      open: forced != null ? forced : !open
    })
  }

  render() {
    const { open } = this.state
    return (
      <Router>
        <Header isOpen={open} toggleMenu={this.toggleMenu} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/place" component={Place} />
          <Route path="/form" component={Form} />
        </Switch>
      </Router>
    )
  }
}

export default App
