const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const config = require('../config/config.js')

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies (for form data)
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/products', require('./routes/products-route.js'));


mongoose.Promise = global.Promise

mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    //useCreateIndex: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the database!"); }
)

mongoose.connection.on('error', () =>{
    throw new Error(`unable to connect to database: ${config.mongoUri}`);
})

app.get('/', (req, res) => {
    res.json({ message: "Welcome to DressStore application." });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});