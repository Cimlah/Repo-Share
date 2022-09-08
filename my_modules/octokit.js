const { Octokit, App } = require("octokit");
const octokitAuth = require('../data/octokit-auth.json')
const octokit = new Octokit(octokitAuth);

module.exports = async function (userParam, repositoryParam) {
    try {
        const response = await octokit.request("GET /repos/{owner}/{repo}", {
            owner: userParam,
            repo: repositoryParam,
        });

        return({
            user: response.data.owner.login,
            repo: response.data.name,
            description: response.data.description,
            avatar: response.data.owner.avatar_url,
            starsCounter: response.data.stargazers_count,
            forksCounter: response.data.forks_count,
            language: response.data.language,
        })
    } catch(err) {console.log(err)}
}