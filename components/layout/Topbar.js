import React from 'react';
import './Topbar.css'; // Make sure this file exists and is correctly linked
import Link from 'next/link';

export const Topbar = () => {
    const navLinks = [
        { label: 'Contact Us', path: '/contact' },
        { label: 'Live Darshan', path: '/live-darshan' },
        { label: 'Daily Darshan', path: '/daily-darshan' },
    ];

    return (
        <div className='topbar-container'>
            <div className='container topbar-wrapper'>
                <div>
                    <ul className='top-links'>
                        {navLinks.map((item, index) => (
                            <li key={index}>
                                <Link className='link' href={item.path}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='top-temple-timing'>
                    <span className='btn-timing'>Temple open Timing</span>
                    <ul>
                        <li>04am-07am </li>
                        <li>08am-12pm </li>
                        <li>03pm-04pm </li>
                        <li>05pm-08pm </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};
