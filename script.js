const btnBurger = document.querySelector('.menu__burger')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__btn_close')
const AboutMe = document.querySelector('.AboutMe')
const services = document.querySelector('.services')
const contacts = document.querySelector('.contacts')
const modalForm = document.querySelector('.modal__form')
const headerBtn = document.querySelector('.header__btn')
const closeModal = document.querySelector('.close')
const telInput = document.querySelector('.footer__input_tel')
const telInputModal = document.querySelector('.modal__input_tel')
const servicesBtn = document.querySelector('.services__btn')
const applicationClose = document.querySelector('.application__close')
const btnSubmit = document.querySelector('.footer__btn')
const btnSubmitModal = document.querySelector('.modal__btn')
const textValid = document.querySelector('.footer__input_valid')
const textValidModal = document.querySelector('.footer__input_valid_modal')
const call = document.querySelector('.call')
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


btnSubmit.setAttribute("disabled", "true");
        btnSubmit.classList.add('btn__disabled')
telInput.addEventListener('input', function(){
    if(telInput.value.replace(/[^\d.]/g, '').length < 10){
       // btnSubmit.setAttribute("disabled", "true");
        btnSubmit.classList.add('btn__disabled')
        textValid.innerHTML = 'заполните поле'
    }
    else{
        btnSubmit.setAttribute("disabled", "false");
        btnSubmit.classList.remove('btn__disabled')
        textValid.innerHTML = ''
    }
})
btnSubmitModal.setAttribute("disabled", "true");
btnSubmitModal.classList.add('btn__disabled')
telInputModal.addEventListener('input', function(){
    if(telInputModal.value.replace(/[^\d.]/g, '').length < 10){
       // btnSubmitModal.setAttribute("disabled", "true");
       btnSubmitModal.classList.add('btn__disabled')
       textValidModal.innerHTML = 'заполните поле'
    }
    else{
        btnSubmitModal.setAttribute("disabled", "false");
        btnSubmitModal.classList.remove('btn__disabled')
        textValidModal.innerHTML = ''
    }
})

window.addEventListener('scroll', function() {
   console.log(window.pageYOffset)
   if(window.pageYOffset > 900){
    call.classList.add('callActive')
    }
    if(window.pageYOffset < 900){
        call.classList.remove('callActive')
    }
  });




