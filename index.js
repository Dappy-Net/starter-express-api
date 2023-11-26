const express = require('express')
const app = express()

app.all('/', (req, res) => {
    res.send('hello!')
})

app.use('/static',express.static('./static'))

app.listen(process.env.PORT || 3000)
