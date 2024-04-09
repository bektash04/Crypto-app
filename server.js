const express = require('express')
const app = express()
const port = 80
app.use(express.static('CRYPTO/dist'))

app.listen(port, () => console.log('server ben started on port 80'))