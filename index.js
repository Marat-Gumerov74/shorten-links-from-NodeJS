const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const connectDb = require('./config/db');
const bodyParser = require('body-parser');
const path = require('path')
//Routes
const indexRoutes = require('./routes/index');
const linkRoutes = require('./routes/links');

app.use(express.static(path.join(__dirname, 'public')));
//set setting bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(indexRoutes);
app.use('/links', linkRoutes);

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is working on ${PORT}`)
    });
}).catch((err) => {
    console.log('Error', JSON.stringify(err))
})


