const express = require('express');
const { auth } = require('./auth');

const router = express.Router();

// This route is not needed as chat is handled via Socket.io
// But we can have a route to get chat history if needed

module.exports = router;
