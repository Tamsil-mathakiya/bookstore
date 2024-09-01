import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Order() {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const bookName = state?.bookName || '';
    const bookPrice = state?.bookPrice || '';

    const [formData, setFormData] = useState({
        name: '',
        number: '',
        bookName: bookName,
        price: bookPrice
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({...prevState,[name]: value}));
    };

    const clickOrder = async () => {
            const response = await fetch("http://localhost:3000/order", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // const responseData = await response.json();
                alert("Order successful!");
                navigate('/product');
            } 
    //         else {
    //             const errorData = await response.json();
    //             alert(`Order failed: ${errorData.message || 'Unknown error'}`);
    };

    return (
        <div className='main'>
            <h1>Ordering</h1>
            <label htmlFor='name'>Name</label>
            <input id='name' type='text' name='name' value={formData.name} onChange={handleChange} />
            <label htmlFor='number'>Number</label>
            <input id='number' type='tel' name='number' value={formData.number} onChange={handleChange} />
            <label htmlFor='book'>Book Name</label>
            <input id='book' type='text' name='bookName' value={formData.bookName} readOnly />
            <label htmlFor='price'>Price</label>
            <input id='price' type='text' name='price' value={formData.price} readOnly />
            <button onClick={clickOrder} className='order' type='button'>ORDER</button>
        </div>
    );
}

export default Order;
