import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import api from './services/api';

function App() {
    const [user, setUser] = useState(null);

    const handleLogin = (role) => {
        // Decode JWT or make /me API call to fetch user
        const token = localStorage.getItem('token');
        if (!token) return;

        const base64Url = token.split('.')[1];
        const payload = JSON.parse(atob(base64Url));
        setUser({ email: payload.sub, role });
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token && !user) handleLogin('CITIZEN'); // fallback role, or fetch from API
    }, []);

    return (
        <Router>
            <Header user={user} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
                <Route path="/dashboard" element={<Dashboard role={user?.role} />} />
            </Routes>
        </Router>
    );
}

export default App;
