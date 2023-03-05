import axios from 'axios';
import React, { useContext, useState } from 'react';
import axiosClient from '../../api/axiosClient';
import { UserContext } from '../../pages/UserContext';
import './index.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);
    const handleLoginSubmit = async (ev) => {
        ev.preventDefault();
        try {
            const { data } = await axios.post('/user/login', { email, password });
            alert('Login successfully');
            setUser(data);

        } catch (error) {
            alert('Login failed');
        }
    }

    return (
        <div className='container_login'>
            <h2>Login Page</h2>
            <form onSubmit={handleLoginSubmit}>
                <input type="email"
                    placeholder='Your...@email.com'
                    name='email'
                    onChange={ev => setEmail(ev.target.value)}
                />
                <input type="password"
                    placeholder='Password'
                    name='password'
                    onChange={ev => setPassword(ev.target.value)}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
