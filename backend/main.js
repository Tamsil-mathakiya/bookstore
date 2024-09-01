const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Register = require('./regiter'); // Adjust the path as necessary
const Order = require('./order');
const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
    
mongoose.connect('mongodb://localhost:27017/timedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
const login = new mongoose.model('login',loginSchema)
// Registration route
app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await Register.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }
        const newUser = new Register({
            name,
            email,
            password,
        });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Register.findOne({ email, password });
        if (user) {
            const existingLogin = await login.findOne({ email });
            if (existingLogin) {
                res.status(200).json({ message: 'Login successful' });
            }else{
            const { email, password } = req.body;    
            const newLogin = new login({
            email,
            password,
        });
        await newLogin.save();
        res.status(200).json({ message: 'Login successful' });
    }
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.post('/order', async (req, res) => {
        const { name, number, bookName, price } = req.body
        const newOrder = new Order({
            name,
            number,
            bookName,
            price
        });
        await newOrder.save();
        res.status(200).json({ message: 'Order successful', order: newOrder });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 
