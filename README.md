**Project still in development**

# Repo Share

A NodeJS app generating an iframe based on information about your repository, so you can show off your portfolio in an elegant way.

# License

This repository is licensed under MIT License

# Technologies used

  * Languages:
    * JavaScript
    * HTML
    * CSS
    * Pug
  * NodeJS Libraries:
    * Express
    * Octokit
    * Pug

# API Reference

  * `/gh/:user/:repo` - Send a request to this route in order to generate an iframe based on `:user` and `:repo` parameters.  
  **Example:**  
  `/gh/Cimlah/Repo-Share` will send you:
  
  <iframe src="https://repo-share.herokuapp.com/gh/Cimlah/Repo-Share", frameborder="0", width="100%"></iframe>

  but not in a form of an *iframe*. The goal here is to only generate an HTML. Iframe customisation is up to end-user.
  * `/iframe-css` - Get source code of the *iframe* CSS
  * `/icon/:icon` - Get icon files used in the *iframe*. Possible values:
    * `star`
    * `gitfork`
    * `script`
  * `/` - Display HTML of the main page

## Directory structure

### ***data***
Here is only one file, an encrypted JSON with my GitHub API key. Delete it if you want to clone this repo, since in encrypted state, it won't work properly

### ***my_modules***
#### **create-iframe**
Here are files needed to create an HTML for the *iframe*. It consists of:
  * `icons` directory
  * `create-iframe.js`, which passes data to a function generating an HTML out of Pug file
  * `iframe.css` - a design for the generated HTML
  * `iframe.pug` - a Pug file, which takes arguments from `create-iframe.js` in order to generate an HTML with proper data

**octokit.js** - connect to the *GitHub API* and get needed data, which is:
  * Owner of a repository
  * Name of a repository
  * Link to a repository
  * Description of a repository
  * Owner's avatar
  * Count of stargazers
  * Count of forks
  * Main language of a repository

### ***public*** - Frontend files
#### **css**
CSS files for the frontend

#### **html**
*Actually* Pug files for the frontend

#### **images**
Images used in HTML files on the frontend

#### **js**
JavaScript files used for the frontend

### ***/ (root directory of the repository)***
  * `.gitattributes`
  * `.gitignore`
  * `index.js` - HTTP server code with all the routes in API
  * `LICENSE` - a MIT LICENSE file
  * `package-lock.json` - information about this Node package
  * `package.json` - information about this Node package
  * `README.md` - a README file (the file you're reading right now)