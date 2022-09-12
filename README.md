**Project still in development**

# Repo Share

A NodeJS app generating an iframe based on information about your repository, so you can show off your portfolio in an elegant way.

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