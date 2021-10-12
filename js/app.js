const navBar = document.querySelector('.nav')
const btn = document.querySelector('.toggle')

const janr = document.querySelector('.janr')
const janrList = document.querySelector('.janr_list')

const signUp = document.querySelector('.sign_up')
const logOut = document.querySelector('.logout-btn')

btn.addEventListener('click', function () {
    navBar.classList.toggle('show')
})


janr.addEventListener('click', function () {
    janrList.classList.toggle('down')
    janr.classList.toggle('height')
})



signUp.addEventListener('click', function () {
    logOut.classList.toggle('show2')
})

