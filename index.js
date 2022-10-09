const express = require('express')
const app = express()
const path = require('path')
const pug = require('pug')
const octokit = require('./my_modules/octokit')
const createIframe = require('./my_modules/create-iframe/create-iframe')

const port = 3000
const publicRoot = path.join(__dirname, 'public')

app.use(express.static(publicRoot))
app.use(express.json())

app.get('/', function(req, res) {
    pug.renderFile(path.join(publicRoot, 'html/index.pug'), (err, html) => {
        if(err) {console.log(err)}
        res.send(html)
    })
})

app.get('/about', function(req, res) {
    pug.renderFile(path.join(publicRoot, 'html/about.pug'), (err, html) => {
        if(err) { console.log(err) }
        res.send(html)
    })
})

app.get('/share-repo', function(req, res) {
    pug.renderFile(path.join(publicRoot, 'html/share-repo.pug'), (err, html) => {
        if(err) {console.log(err)}
        res.send(html)
    })
})

app.get('/gh/:user/:repo', function (req, res) {
    const userParam = req.params.user
    const repoParam = req.params.repo;

    (async () => {
        const data = await octokit(userParam, repoParam)

        res.send(createIframe(data.user, data.repo, data.repoUrl, data.description, data.avatar, data.starsCounter, data.forksCounter, data.language))
    }) ();
})

app.get('/raw/:user/:repo', function (req, res) {
    const userParam = req.params.user
    const repoParam = req.params.repo;

    (async () => {
        const data = await octokit(userParam, repoParam)

        res.set('Content-Type', 'text/plain')
        res.send(createIframe(data.user, data.repo, data.repoUrl, data.description, data.avatar, data.starsCounter, data.forksCounter, data.language))
    }) ();
})

app.get('/iframe-css', function(req, res) {
    res.sendFile(path.join(__dirname, 'my_modules/create-iframe/iframe.css'))
})

app.get('/icon/:icon', function(req, res) {
    if(req.params.icon == 'star') {res.sendFile(path.join(__dirname, 'my_modules/create-iframe/icons/star.svg'))}
        else if(req.params.icon == 'gitfork') {res.sendFile(path.join(__dirname, 'my_modules/create-iframe/icons/gitfork.svg'))}
    else {res.sendFile(path.join(__dirname, 'my_modules/create-iframe/icons/script.svg'))}
})

app.listen(process.env.PORT || port, (err) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log('Server is runnig on http://localhost:' + port)
    }
})