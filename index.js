const express = require('express')
const app = express()
const path = require('path')
const octokit = require('./my_modules/octokit')
const createIframe = require('./my_modules/create-iframe/create-iframe')

const port = 3000
const publicRoot = path.join(__dirname, 'public')

app.use(express.static(publicRoot))
app.use(express.json())

app.get('/', function(req, res) {
    res.sendFile(path.join(publicRoot, 'html/index.html'))
    res.send('Conntected to ` / ` route')
})

app.get('/gh/:user/:repo', function (req, res) {
    const url = 'https://github.com/' + req.params.user + '/' + req.params.repo
    const userParam = req.params.user
    const repoParam = req.params.repo;

    (async () => {
        const data = await octokit(userParam, repoParam)

        res.send(createIframe(data.user, data.repo, data.description, data.avatar, data.starsCounter, data.forksCounter, data.language))
    }) ();
})

app.listen(port, (err) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log('Server is runnig on http://localhost:' + port)
    }
})