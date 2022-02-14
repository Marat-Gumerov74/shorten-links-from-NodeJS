const mongoose = require('mongoose');
const link = `mongodb+srv://user:qwer123@cluster0.ux5oj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectDb = () => {
    return mongoose.connect(link, {useNewUrlParser: true});
};

module.exports = connectDb;