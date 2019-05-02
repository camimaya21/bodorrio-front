import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import AuthAPI from '../utils/auth'

import { USER_UPDATED } from '../actions'
class LoginForm extends Component {

    constructor(){
        super()
        this.state = {
            username:'',
            password:'',
            error: null
        }
    }

    handleLogin(){
        const { username, password } = this.state
        const { updateUser, history, isLogged } = this.props

        AuthAPI.login(username, password)
        .then( user =>{
            updateUser(user)
            isLogged()
            history.push("/")
        })
        .catch( e => {
            this.setState({error: e})
        })
        
    }

    render() {
        const {username, password} = this.state
        return (
            <div>
                <h2>Login</h2>
                <label>Username</label>
                <input value={username} onChange={e => this.setState({username:e.target.value})}/>
                <label>Password</label>
                <input value={password} type="password" onChange={e => this.setState({password:e.target.value})}/>
                <button onClick={() => this.handleLogin()}>Login</button>
            </div>
        )
    }
}

const mapState = ({user}) => {
    return {
        user
    }
}

const mapDispatch = dispatch => {
    return {
        updateUser: payload => {
            dispatch({
              type: USER_UPDATED,
              payload
            })
          }
    }
}
export default connect(mapState, mapDispatch)(withRouter(LoginForm))