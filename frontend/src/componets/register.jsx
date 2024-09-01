import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleBtn = async () => {
        if (user.name.length > 3 && user.email.length > 3 && user.password.length > 3) {
            const response = await fetch("http://localhost:3000/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                alert("Registration successful");
                navigate('/login'); // Redirect to login page
            } else {
                alert("Registration failed! Email might already be registered.");
                navigate('/login');
            }
        } else {
            alert("Name, email, and password must be at least 4 characters long");
        }
    };

    return (
        <div className="login flex">
            <h1>Register Page</h1>
            <label htmlFor='name'>Name</label>
            <input onChange={handleChange} value={user.name} id='name' type='text' name='name' />
            <label htmlFor='email'>Email</label>
            <input onChange={handleChange} value={user.email} id='email' type='text' name='email' />
            <label htmlFor='password'>Password</label>
            <input onChange={handleChange} value={user.password} name='password' id='password' type='password' />
            <button onClick={handleBtn} className='button' type='button'>Register</button>
        </div>
    );
}

export default Register;
