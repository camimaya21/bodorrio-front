import React, { Component } from 'react'
import { AuthAPI } from '../utils/auth'

class LoginForm extends Component {

    constructor(){
        super()
        this.state = {
            username:"",
            password:""
        }
    }

    handleLogin(){
        const {username, password} = this.state
        const {history, dispatch} = this.props
        AuthAPI.login(username, password)
        .then( user =>{
            console.log(user)
            // dispatch(clearMessages())
            // dispatch(login(user))
            // history.push('/')
        })
        .catch( e => {
            console.log(e)
            // dispatch(errorMessageAction("Invalid login credentials"))
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

export default LoginForm