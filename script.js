const formLogin = document.querySelector('.trybewarts-login');
const agreement = document.querySelector('#agreement');

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

validaLogin();
verifyAgreement();
