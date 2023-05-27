const formLogin = document.querySelector('.trybewarts-login');
const agreement = document.querySelector('#agreement');
const comments = document.querySelector('.form-inputs textarea');
const counter = document.querySelector('#counter');

const validaLogin = () => {
  formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputEmail = document.querySelector('.trybewarts-login #email');
    const inputPass = document.querySelector('.trybewarts-login #password');
    if (inputEmail.value === 'tryber@teste.com' && inputPass.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
};

const verifyAgreement = () => {
  agreement.addEventListener('click', (event) => {
    const btnSubmit = document.querySelector('#submit-btn');
    if (event.target.checked) {
      btnSubmit.removeAttribute('disabled');
    } else {
      btnSubmit.setAttribute('disabled', false);
    }
  });
};

const countCaractere = () => {
  comments.addEventListener('keyup', (event) => {
    const lengthComments = event.target.value.length;
    counter.innerHTML = `${500 - lengthComments}`;
  });
};

validaLogin();
verifyAgreement();
countCaractere();
