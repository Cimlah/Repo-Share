const generateButton = document.querySelector('.button-generate')
const iframe = document.querySelector('.generated-iframe')
const pre = document.querySelector('.generated-pre')

generateButton.addEventListener('click', () => {
    const url = document.querySelector('.input-url').value

    if(url == '') {alert("Link can't be empty")}
        else if(!url.includes('github.com')) {alert('Not a GitHub link')}
    else {
        const ownerAndRepo = url.slice(19)
        iframe.setAttribute('src', '/gh/' + ownerAndRepo)
        iframe.classList.add('normal-animation')
        pre.classList.add('normal-animation')
        setTimeout(() => {
            iframe.style.opacity = '1'
            pre.style.opacity = '1'
            iframe.classList.remove('normal-animation')
            pre.classList.remove('normal-animation')
        }, 1600)

        pre.innerHTML = '&#160;&#60;iframe\n&#160;&#160;src="https://repo-share.herokuapp.com/gh/' + ownerAndRepo + '"' + '\n&#160;&#160;frameborder="0",\n&#160;&#160;style="border-radius: 15px;\n&#160;&#160;box-shadow: 0px 0px 8px 1px #393939;"&#62;\n&#160;&#60;/iframe&#62;'
    }
})