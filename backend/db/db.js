const mongoose = require('mongoose');

const db = async () => {
    try {
    console.log(process.env.MONGO_URL)
       mongoose.set('strictQuery', false) 
       await mongoose.connect(process.env.MONGO_URL)
       console.log('DB is connected successfully');
    } catch (error) {
        console.log('DB connection Error');
        console.log(error);
    }
}

module.exports = {db}