import React, { useState } from 'react';
import api, { setAuthToken } from '../services/api';

const LoginForm = ({ onLogin }) => {
    const [form, setForm] = useState({ email: '', password: '' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/users/login', form, {
                headers: { 'Content-Type': 'application/json' }
            });
            const { token, role } = res.data;
            localStorage.setItem('token', token);
            setAuthToken(token);
            onLogin(role);
        } catch (err) {
            alert('Login failed: ' + err.response?.data?.message);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <form className="p-4 border rounded shadow bg-white col-12 col-md-6" onSubmit={handleSubmit}>
                <h2 className="text-center mb-4 text-success">Login</h2>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input name="email" className="form-control" onChange={handleChange} required />
                </div>

                <div className="mb-4">
                    <label className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" onChange={handleChange} required />
                </div>

                <button className="btn btn-success w-100" type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
