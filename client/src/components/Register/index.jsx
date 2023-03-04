import React, { useState } from 'react'
import axiosClient from '../../api/axiosClient';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (ev) => {
        ev.preventDefault();

        try {
            await axiosClient.post('/user/register', {
                firstName, lastName, mobile, email, password
            });
            alert('Register Successfully');

        } catch (error) {
            alert('Register failed');
        }

    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text"
                    placeholder='First name'
                    name='firstName'
                    onChange={ev => setFirstName(ev.target.value)}
                />
                <input type="text"
                    placeholder='Last name'
                    name='lastName'
                    onChange={ev => setLastName(ev.target.value)}
                />
                <input type="email"
                    placeholder='Email...'
                    name='email'
                    onChange={ev => setEmail(ev.target.value)}
                />
                <input type="password"
                    placeholder='Password...'
                    name='password'
                    onChange={ev => setPassword(ev.target.value)}
                />
                <input type="number"
                    placeholder='Phone number'
                    name='mobile'
                    onChange={ev => setMobile(ev.target.value)}
                />
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register