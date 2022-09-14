const cookieDisplay = document.querySelector('.cookie-display')
const acceptButton = document.querySelector('.accept')
const declineButton = document.querySelector('.decline')

const navs = document.querySelectorAll('nav')
const contentAnimations = document.querySelectorAll('.content-animation')
const introAnimationLine1 = document.querySelector('.secondary-description-line1-anim')
const introAnimationLine2 = document.querySelector('.secondary-description-line2-anim')
const introAnimationTitle = document.querySelector('.title-anim')
const introAnimationMainDescription = document.querySelector('.main-description-anim')

acceptButton.addEventListener('click', () => {
    document.cookie = 'accept=yes; max-age=86400'
    cookieDisplay.style.display = 'none'
})

declineButton.addEventListener('click', () => {
    document.cookie = 'accept=no; max-age=86400'
    cookieDisplay.style.display = 'none'
})

if(document.cookie.search('accept=yes') != -1) {
    navs.forEach((nav) => {
        nav.classList.remove('nav-animation')
        nav.style.opacity = '1'
    })

    contentAnimations.forEach((contentAnimation) => {
        contentAnimation.classList.remove('content-animation')
    })

    cookieDisplay.classList.remove('cookie-animation')
    cookieDisplay.style.display = 'none'

    introAnimationLine1.style.display = 'none'
    introAnimationLine1.classList.remove('secondary-description-line1-anim')

    introAnimationLine2.style.display = 'none'
    introAnimationLine2.classList.remove('secondary-description-line2-anim')

    introAnimationTitle.style.opacity = '1'
    introAnimationTitle.classList.remove('title-anim')
    introAnimationTitle.style.transform = 'translateX(0)'
    // transform: translateX(50px)

    introAnimationMainDescription.style.opacity = '1'
    introAnimationMainDescription.classList.remove('main-description-anim')
    introAnimationMainDescription.style.transform = 'translateX(0)'
    setTimeout(() => {
        mainDescription.style.display = 'block'
    }, 0)

    document.querySelector('main').classList.add('normal-animation')
}
    else if(document.cookie.search('accept=no') != -1) {
        cookieDisplay.style.display = 'none'
    }