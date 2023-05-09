const modalOpen = document.querySelector(".auth__modal-open");
const modalClose = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");

const registrationForm = document.querySelector('.registration_form');
const registrationLink = document.querySelector('.registration_link'); 

const loginForm = document.querySelector('.login_form'); 
const loginLink = document.querySelector('.login_link');

modalOpen.addEventListener('click', toggleModal);
modalClose.addEventListener('click', toggleModal);

function toggleModal() {
    document.body.classList.toggle("modal-open");
    modal.classList.toggle('is-hidden');
}

function toRegister() {
registrationForm.classList.remove('hidden'); 
  loginForm.classList.add('hidden');
  registrationLink.classList.add('active'); 
  loginLink.classList.remove('active'); 
}

registrationLink.addEventListener("click", toRegister)

function toLogin() {
    loginForm.classList.remove('hidden'); 
    registrationForm.classList.add('hidden'); 
    loginLink.classList.add('active'); 
    registrationLink.classList.remove('active'); 
}

loginLink.addEventListener("click", toLogin)
