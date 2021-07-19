import React, {useState, useEffect} from 'react';
import APIService from "./APIService";
import {useCookies} from "react-cookie";
import {useHistory} from 'react-router-dom'

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['my_token'])
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

    return (
        <div className="App">
            <br/><br/><br/><h1>Login</h1><br/><br/><br/>
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

            <button className="btn btn-primary" onClick={loginBtn}>Login</button>

        </div>
    );
};