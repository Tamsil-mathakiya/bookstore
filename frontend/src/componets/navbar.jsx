import React from 'react';
import { useLocation, useNavigate,} from 'react-router-dom';

function Navbar() {
    const location = useLocation(); // Get the current route location
    const navigate = useNavigate(); // Get the navigate function

    const handleClick = () => {
        if (window.confirm("Are you sure you want to Logout?")) {
            navigate('/login'); // Redirect to the login page
        }
    };

    return (
        <nav className='navbar'>
            <h2>@Tamsil mathakiya</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
            {location.pathname === '/product' && (
                <button onClick={handleClick} className='logout-button'>
                    Logout
                </button>
            )}
        </nav>
    );
}

export default Navbar;
