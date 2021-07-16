import React, {useState} from 'react';
import APIService from "./APIService";

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginBtn = () => {
        APIService.LoginUser({username, password})
            .then(resp => console.log(resp))
            .catch(error => console.log(error))
    }

    return (
        <div>
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