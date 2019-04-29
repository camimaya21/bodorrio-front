import React, { Component } from 'react'
import { AuthAPI } from '../utils/auth'
import { Link } from 'react-router-dom'
class Home extends Component {

  logoutAccount(){ 
    AuthAPI.logout()
  }

  render() {
    return (
        <div>
          <h1>this is home</h1>
          <button onClick={this.logoutAccount}>salir</button>
          <Link to="/login">Login</Link>
        </div>
    )
  }
}

export default Home
