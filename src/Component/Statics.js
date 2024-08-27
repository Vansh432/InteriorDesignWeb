import React from 'react';
import { FaCube, FaHandshake, FaDollarSign, FaAward } from 'react-icons/fa';
import './styles/Static.css'; // Assuming you'll add the CSS separately

const StatsSection = () => {
    const stats = [
        { icon: <FaCube />, number: '25K', label: 'Completed Projects' },
        { icon: <FaHandshake />, number: '100%', label: 'Satisfied Clients' },
        { icon: <FaDollarSign />, number: '656M', label: 'Monthly Revenue' },
        { icon: <FaAward />, number: '28+', label: 'Awards Won' },
    ];

    return (
        <div className='bg-[#fff]'>
        <div className="stats-section">
            {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default StatsSection;
