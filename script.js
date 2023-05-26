const formLogin = document.querySelector('.trybewarts-login');

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

validaLogin();
