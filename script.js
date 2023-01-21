const btnBurger = document.querySelector('.menu__burger')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__btn_close')
const AboutMe = document.querySelector('.AboutMe')
const services = document.querySelector('.services')
const contacts = document.querySelector('.contacts')
const modalForm = document.querySelector('.modal__form')
const headerBtn = document.querySelector('.header__btn')
const closeModal = document.querySelector('.close')
const servicesBtn = document.querySelector('.services__btn')
function modalOpen(mod){
    mod.classList.remove('modal__close')
    mod.classList.add('modal__open')
}

function modalCloses(mod){
    mod.classList.remove('modal__open')
    mod.classList.add('modal__close')
}

headerBtn.addEventListener('click', function(){
    modalOpen(modalForm)
})

servicesBtn.addEventListener('click', function(){
    modalOpen(modalForm)
})


closeModal.addEventListener('click', function(){
    modalCloses(modalForm)
})



btnBurger.addEventListener('click', function(){
    modalOpen(modal)
})


modalClose.addEventListener('click', function(){
    modalCloses(modal)
})

AboutMe.addEventListener('click', function(){
    modalCloses(modal)
})

contacts.addEventListener('click', function(){
    modalCloses(modal)
})

services.addEventListener('click', function(){
    modalCloses(modal)
})

