const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/dist/fullstk'));

//backend route
app.get('/', (req, res) => res.sendFile(path.join(_dirname+'/dist/fullstk/index.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))