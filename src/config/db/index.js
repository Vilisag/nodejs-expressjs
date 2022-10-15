const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://developer:XzvMZnPtuPIPnBrv@cluster0.e6l8th0.mongodb.net/blog');
        console.log('Connect successfully');
    } catch (error) {
        console.log('Connect failure!');
    }
}

module.exports = {connect};