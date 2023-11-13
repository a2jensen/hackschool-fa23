const express = require ('express');
const cors = require('cors');
const config = require('./config');
const router = require('./routes/gameRoutes');
const { default: mongoose } = require('mongoose');


// Create an Express server
const server = express();

server.use(cors());
server.use(express.json());

// Mount /api onto our server
server.use('/api', router);

mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch ((err) => console.error('Error connecting to MongoDB: ', err));