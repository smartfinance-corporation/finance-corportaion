import React from 'react';
import Link from 'next/link';
// Import the CSS file where your styles are defined

export default function Navbar() {
    return (
        <div className="nav-container">
            <img className="logo" src="https://fcc-did.pages.dev/images/fcc%20logo%20high%20res.png" alt="Logo" />
            <nav className="nav-bar">
                <ul>
                    <li><Link href="../components/Home">Home</Link></li>
                    <li><Link href="../components/Horizon">Horizon</Link></li>
                    <li><Link href="../components/Schedule">Schedule</Link></li>
                    <li><Link href="../components/Sponsors">Sponsors</Link></li> {/* Corrected spelling of "Sponsors" */}
                    <li><Link href="../components/Terms">Terms</Link></li>
                </ul>
            </nav>
        </div>
    );
}
