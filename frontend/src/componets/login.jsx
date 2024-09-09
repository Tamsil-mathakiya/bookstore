import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const navigate = useNavigate();


        const handleChange = (e) => {
          const {name ,value} = e.target;
          setData({...data, [name]: value});
        }
    
    const handleBtn = async () => {
        if (data.email.length > 3 && data.password.length > 3) {
            const response = await fetch("http://localhost:3000/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Login successful");
                navigate('/product'); // Redirect to product page
            } else {
                alert("Invalid email or password. Please register first.");
                navigate('/register'); // Redirect to registration page
            }
        } else {
            alert("Email and password must be at least 4 characters long");
        }
    };

    return (
        <div className="login">
            <h1>Login Page</h1>
            <label htmlFor='email'>Email</label>
            <input onChange={handleChange} value={data.email} id='email' type='text' name='email' />
            <label htmlFor='password'>Password</label>
            <input onChange={handleChange} value={data.password} name='password' id='password' type='password' />
            <button onClick={handleBtn} className='button' type='button'>LOGIN</button>
        </div>
    );
};

export default Login;
