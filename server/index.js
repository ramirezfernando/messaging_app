const express = require('express');
const app = express();

const rooms = ['general', 'tech'];
const cors = require('cors');

// Used to recieve data from the front end
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

const server = require('http').createServer(app);
const PORT = 5001;
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

server.listen(PORT, ()=> {
    console.log('listening to port', PORT)
})