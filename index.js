const express = require('express')
const app = express()
const path = require('path')
const { Octokit, App } = require("octokit");
const octokitAuth = require('./data/octokit-auth.json')
const octokit = new Octokit(octokitAuth);

const port = 3000
const publicRoot = path.join(__dirname, 'public')

app.use(express.static(publicRoot))

app.get('/', function(req, res) {
    res.sendFile(path.join(publicRoot, 'html/index.html'))
    res.send('Conntected to ` / ` route')
})

app.listen(port, (err) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log('Server is runnig on http://localhost:' + port)
    }
})