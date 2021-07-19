import React, {useState, useEffect} from 'react';
import APIService from "./APIService";
import {useCookies} from "react-cookie";
import {useHistory} from 'react-router-dom'

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['my_token'])
    const [isLogin, setLogin] = useState(true)
    let history = useHistory()

    useEffect(() => {
        if(token['my_token']) {
            history.push('/articles/')
        }
    }, [history, token])

    const loginBtn = () => {
        APIService.LoginUser({username, password})
            .then(resp => setToken('my_token', resp.token))
            .catch(error => console.log(error))
    }

    const registerBtn = () => {
        APIService.RegisterUser({username, password})
            .then(() => loginBtn())
            .catch(error => console.log(error))
    }

    return (
        <div className="App">
            <br/><br/><br/>
            {isLogin ? <h1>Login</h1> : <h1>Register</h1>}
            <br/><br/><br/>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Enter your username"
                       value={username} onChange={e => setUsername(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter your password"
                       value={password} onChange={e => setPassword(e.target.value)}/>
            </div>

            {isLogin ? <button className="btn btn-primary" onClick={loginBtn}>Login</button>:
                <button className="btn btn-primary" onClick={registerBtn}>Register</button>}<br/>

            {isLogin ? <h5>Don't have an account?    <button className="btn btn-primary"
            onClick={() => setLogin(false)}>Register</button></h5> :
                <h5>Already have an account?    <button className="btn btn-primary"
                                                      onClick={() => setLogin(true)}>Login</button></h5>}

        </div>
    );
};