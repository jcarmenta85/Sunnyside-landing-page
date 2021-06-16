const menuBtn = document.querySelector('.menu-btn')
const burger = document.querySelector('.burger')
const navItems = document.querySelector('.nav-items')
const nav = document.querySelector('nav')

let showMenu = false

menuBtn.addEventListener('click', () => {
    if(!showMenu){
        burger.classList.add('open')
        navItems.classList.add('visible')

        showMenu =true
    }else{
        burger.classList.remove('open')
        navItems.classList.remove('visible')


        showMenu = false
    }
})

nav.addEventListener('mouseleave', () => {
    burger.classList.remove('open')
    navItems.classList.remove('visible')

    showMenu = false
})