const signUpBtnMobile = document.querySelector(".sign-up-btn-js")
const modalOpenBtn = document.querySelector(".auth__modal-open");
const modalCloseBtn = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");

const registrationForm = document.querySelector('.registration_form');
const registrationLink = document.querySelector('.registration_link'); 

const loginForm = document.querySelector('.login_form'); 
const loginLink = document.querySelector('.login_link');

const btnChangeTheme= document.querySelector('.switch');
const modalSignUp= document.querySelector('.container_forms');
const signUpInput= document.querySelector('.sign_up_input');
const signUpBtn= document.querySelector('.sing_up_btn');
const iconEmail= document.querySelector('.icon-email');
const iconLock= document.querySelector('.icon-lock');
const iconCross= document.querySelector('.icon-cross');
const modalCross= document.querySelector('.modal_cross');



signUpBtnMobile.addEventListener('click', toggleModal);
modalOpenBtn.addEventListener('click', toggleModal);
modalCloseBtn.addEventListener('click', toggleModal);


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

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


if (localStorage.getItem('theme') === Theme.DARK) {
  modalSignUp.classList.add(Theme.DARK);
  signUpInput.classList.add(Theme.DARK);
  signUpBtn.classList.add(Theme.DARK);
  iconEmail.classList.add(Theme.DARK);
  iconLock.classList.add(Theme.DARK);
  iconCross.classList.add(Theme.DARK);
  modalCross.classList.add(Theme.DARK);
  localStorage.setItem('theme', Theme.DARK);
  btnChangeTheme.checked = true;
}

function onInputChangeTheme(e) {
  if (btnChangeTheme.checked) {
    modalSignUp.classList.add(Theme.DARK);
    signUpInput.classList.add(Theme.DARK);
    signUpBtn.classList.add(Theme.DARK);
    iconEmail.classList.add(Theme.DARK);
    iconLock.classList.add(Theme.DARK);
    iconCross.classList.add(Theme.DARK);
    modalCross.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    modalSignUp.classList.remove(Theme.DARK);
    signUpInput.classList.remove(Theme.DARK);
    signUpBtn.classList.remove(Theme.DARK);
    iconEmail.classList.remove(Theme.DARK);
    iconLock.classList.remove(Theme.DARK);
    iconCross.classList.remove(Theme.DARK);
    modalCross.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

btnChangeTheme.addEventListener('change', onInputChangeTheme);