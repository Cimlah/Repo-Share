const pug = require('pug')
const path = require('path')

module.exports = function (user, repo, repoUrl, description, avatar, starsCounter, forksCounter, language) {
    const pugCompile = pug.compileFile(path.join(__dirname, 'iframe.pug'))

    return(pugCompile({
        userPug: user,
        repoPug: repo,
        repoUrlPug: repoUrl,
        descriptionPug: description,
        avatarPug: avatar,
        starsCounterPug: starsCounter,
        forksCounterPug: forksCounter,
        languagePug: language,
    }))
}