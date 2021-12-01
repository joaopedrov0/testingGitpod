const express = require('express')
const app = express()

// Settings
    // Setting the static files from "public" folder
        app.use(express.static('public'))

    // Setting the view engine to pug
        app.set('views', './views')
        app.set('view engine', 'pug')



app.get('/', (req, res) => {
    res.render('home')
})

app.get('/secondary', (req, res) => {
    res.send('The secondary page')
})

app.listen(3000, console.log('the server is running'))


//dependences

/*
express --save
pug --save
*/