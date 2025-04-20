import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        onLogout();
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
            <div className="container">
                <Link to="/" className="navbar-brand fw-bold">SampattiTech</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>

                        {user ? (
                            <>
                                <li className="nav-item">
                                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <button onClick={handleLogout} className="btn btn-sm btn-outline-light ms-3">
                                        Logout
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link text-white fw-bold">| {user.email} ({user.role})</span>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
