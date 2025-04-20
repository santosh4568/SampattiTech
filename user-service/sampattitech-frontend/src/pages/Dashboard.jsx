import React from 'react';

const Dashboard = ({ role }) => {
    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h2 className="text-primary mb-3">Welcome to SampattiTech Dashboard</h2>
                <p>You are logged in as: <strong>{role}</strong></p>
            </div>
        </div>
    );
};

export default Dashboard;
