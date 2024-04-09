const express = require('express')
const app = express()
const port = 80



app.use(express.static('CRYPTO/build'))

app.listen(port, () => console.log('Server hav ben started on post 800... '))
