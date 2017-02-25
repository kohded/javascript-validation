/**
 * @author Arnold Koh <arnold@kohded.com>
 * @author Chris Knoll <>
 * Developed: 2/23/2017
 * File: validation.js
 */

const el = {
  colorForm: document.getElementById('color-form'),
  colorInput: document.getElementById('color-input'),
  colorMessage: document.getElementById('color-message'),
  dateForm: document.getElementById('date-form'),
  dateInput: document.getElementById('date-input'),
  dateMessage: document.getElementById('date-message'),
  datetimeLocalForm: document.getElementById('datetime-local-form'),
  datetimeLocalInput: document.getElementById('datetime-local-input'),
  datetimeLocalMessage: document.getElementById('datetime-local-message'),
  emailForm: document.getElementById('email-form'),
  emailInput: document.getElementById('email-input'),
  emailMessage: document.getElementById('email-message'),
  formTags: document.getElementsByTagName('form'),
  fileForm: document.getElementById('file-form'),
  fileInput: document.getElementById('file-input'),
  fileMessage: document.getElementById('file-message'),
  monthForm: document.getElementById('month-form'),
  monthInput: document.getElementById('month-input'),
  monthMessage: document.getElementById('month-message'),
  numberForm: document.getElementById('number-form'),
  numberInput: document.getElementById('number-input'),
  numberMessage: document.getElementById('number-message'),
  passwordForm: document.getElementById('password-form'),
  passwordInput: document.getElementById('password-input'),
  passwordMessage: document.getElementById('password-message'),
  rangeForm: document.getElementById('range-form'),
  rangeInput: document.getElementById('range-input'),
  rangeMessage: document.getElementById('range-message'),
  telForm: document.getElementById('tel-form'),
  telInput: document.getElementById('tel-input'),
  telMessage: document.getElementById('tel-message'),
  textForm: document.getElementById('text-form'),
  textInput: document.getElementById('text-input'),
  textMessage: document.getElementById('text-message'),
  timeForm: document.getElementById('time-form'),
  timeInput: document.getElementById('time-input'),
  timeMessage: document.getElementById('time-message'),
  urlForm: document.getElementById('url-form'),
  urlInput: document.getElementById('url-input'),
  urlMessage: document.getElementById('url-message'),
  weekForm: document.getElementById('week-form'),
  weekInput: document.getElementById('week-input'),
  weekMessage: document.getElementById('week-message')
};

const email = {
  keyUp() {
    let isEventListener = false;

    el.emailInput.addEventListener('keyup', (event) => {
      const emailInput = event.target.value;
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (emailInput.match(emailRegex)) {
        el.emailMessage.innerHTML = 'Email valid';
        el.emailMessage.style.color = 'blue';

        if (!isEventListener) {
          el.emailForm.addEventListener('submit', email.submit, false);
          isEventListener = true;
        }
      }
      else {
        el.emailMessage.innerHTML = 'Email invalid';
        el.emailMessage.style.color = 'red';

        if (isEventListener) {
          el.emailForm.removeEventListener('submit', email.submit, false);
          isEventListener = false;
        }
      }
    });
  },
  submit() {
    el.emailMessage.innerHTML = 'Email submitted';
    el.emailInput.value = '';
  }
};

const validation = {
  preventDefaultOnAllForms() {
    for (let i = 0; i < el.formTags.length; i++) {
      el.formTags[i].addEventListener('submit', (event) => {
        event.preventDefault();
      });
    }
  },
  init() {
    validation.preventDefaultOnAllForms();
    email.keyUp();
  }
};

document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    validation.init();
  }
};
