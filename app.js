const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})