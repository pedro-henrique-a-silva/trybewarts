const formLogin = document.querySelector('.trybewarts-login');
const agreement = document.querySelector('#agreement');
const comments = document.querySelector('.form-inputs textarea');
const counter = document.querySelector('#counter');
const formStudent = document.querySelector('#evaluation-form');
const formData = document.querySelector('#form-data');

const getMaterias = (elements) => {
  const checkedMisterios = [];
  for (let i = 0; i < elements.length; i += 1) {
    if (elements[i].checked) {
      checkedMisterios.push(elements[i].value);
    }
  }
  return checkedMisterios;
};

const getHouse = (element) => element.options[element.selectedIndex].value;

const getRadio = (elements) => {
  for (let i = 0; i < elements.length; i += 1) {
    if (elements[i].checked) {
      return elements[i].value;
    }
  }
};

const getStudentData = () => {
  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const house = getHouse(document.querySelector('#house'));
  const family = getRadio(document.querySelectorAll('.radio-familia input'));
  const materias = getMaterias(document.querySelectorAll('.checkbox-content input'));
  const rate = getRadio(document.querySelectorAll('.radio-rate'));
  const commentsValue = comments.value;

  return [`Nome: ${name} ${lastName}`,
    `Email: ${email}`,
    `Casa: ${house}`,
    `Família: ${family}`,
    `Matérias: ${String(materias).replaceAll(',', ', ')}`,
    `Avaliação: ${rate}`,
    `Observações: ${commentsValue}`];
};

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

const studentSubmit = () => {
  formStudent.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = getStudentData();

    for (let index = 0; index < data.length; index += 1) {
      const paragraph = document.createElement('p');
      paragraph.innerText = data[index];
      formData.appendChild(paragraph);
    }

    formStudent.style.display = 'none';
    formData.style.display = 'flex';
  });
};

validaLogin();
verifyAgreement();
countCaractere();
studentSubmit();
