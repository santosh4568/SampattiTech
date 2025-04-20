import React, { useState } from 'react';
import api from '../services/api';

const RegisterForm = () => {
    const [form, setForm] = useState({ fullName: '', email: '', password: '' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/users/register', form);
            alert('Registered successfully!');
        } catch (err) {
            alert('Error registering: ' + err.response?.data?.message);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <form className="p-4 border rounded shadow bg-white col-12 col-md-6" onSubmit={handleSubmit}>
                <h2 className="text-center mb-4 text-success">Register</h2>

                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input name="fullName" className="form-control" onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input name="email" className="form-control" onChange={handleChange} required />
                </div>

                <div className="mb-4">
                    <label className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" onChange={handleChange} required />
                </div>

                <button className="btn btn-success w-100" type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
