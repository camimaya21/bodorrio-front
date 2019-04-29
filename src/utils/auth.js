import axios from 'axios'

const request = axios.create({
    baseURL: process.env.NODE_ENV == "production" ? "":'http://localhost:3001',
    withCredentials: true,
})

export class AuthAPI {

    static errorHandle(e){
        console.log('Auth Api error');
        console.error(e)
        throw e
    }

    static currentUser(){
        return request.get('/auth/currentuser')
        .then(res => res.data.user)
        .catch(AuthAPI.errorHandle)
    }

    static login(username, password){
        return request.post('/auth/login', {username, password})
        .then(res => res.data)
        .catch(AuthAPI.errorHandle)
    }

    static logout(){
        return request.get('/auth/logout')
        .then(() => console.log('logout'))
        .catch(AuthAPI.errorHandle)
    }
}
