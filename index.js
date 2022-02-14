const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const connectDb = require('./config/db')


const indexRoutes = require('./routes/index');
const linkRoutes = require('./routes/links')

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


