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

const color = {
  pick() {
    el.colorInput.addEventListener('change', () => {
      // Format: #000, #0000, #00000, #000000
      const colorRegex = /^#[0-9a-f]{3,6}$/i;

      if (colorRegex.test(el.colorInput.value)) {
        el.colorForm.addEventListener('submit', color.submit, false);
        el.colorMessage.innerHTML = 'Color valid';
        el.colorMessage.style.color = 'blue';
      }
      else {
        el.colorForm.removeEventListener('submit', color.submit, false);
        el.colorMessage.innerHTML = 'Color invalid';
        el.colorMessage.style.color = 'red';
      }
    });
  },
  submit() {
    el.colorMessage.innerHTML = 'Color submitted';
    el.colorMessage.style.color = 'blue';
    el.colorInput.value = '#000000';
  }
};

const date = {
  init() {
    // Event listener is for Chrome date picker if it's used first.
    el.dateForm.addEventListener('submit', date.submit, false);
    date.keyUp();
  },
  keyUp() {
    el.dateInput.addEventListener('keyup', () => {
      // Format: yyyy-mm-dd, Year range: 1900-2099
      const dateRegex = /^(19|20)\d\d(-)(0[1-9]|1[012])(-)(0[1-9]|[12][0-9]|3[01])$/;

      if (dateRegex.test(el.dateInput.value)) {
        el.dateForm.addEventListener('submit', date.submit, false);
        el.dateMessage.innerHTML = 'Date valid';
        el.dateMessage.style.color = 'blue';
      }
      else {
        el.dateForm.removeEventListener('submit', date.submit, false);
        el.dateMessage.innerHTML = 'Date invalid';
        el.dateMessage.style.color = 'red';
      }
    });
  },
  submit() {
    // Prevent form submission if date input is empty.
    if (!el.dateInput.value) {
      return false;
    }

    el.dateMessage.innerHTML = 'Date submitted';
    el.dateMessage.style.color = 'blue';
    el.dateInput.value = '';

    return true;
  }
};

const datetimeLocal = {
  init() {
    // Event listener is for Chrome date picker if it's used first.
    el.datetimeLocalForm.addEventListener('submit', datetimeLocal.submit, false);
    datetimeLocal.keyUp();
  },
  keyUp() {
    el.datetimeLocalInput.addEventListener('keyup', () => {
      // Format: yyyy-mm-ddThh:mm, Year range: 1900-2099
      const datetimeLocalRegex = /^(19|20)\d\d(-)(0[1-9]|1[012])(-)(0[1-9]|[12][0-9]|3[01])T(0[0-9]|1[0-9]|2[0123]??):(0[0-9]|[12345][0-9])$/;

      if (datetimeLocalRegex.test(el.datetimeLocalInput.value)) {
        el.datetimeLocalForm.addEventListener('submit', datetimeLocal.submit, false);
        el.datetimeLocalMessage.innerHTML = 'Datetime-local valid';
        el.datetimeLocalMessage.style.color = 'blue';
      }
      else {
        el.datetimeLocalForm.removeEventListener('submit', datetimeLocal.submit, false);
        el.datetimeLocalMessage.innerHTML = 'Datetime-local invalid';
        el.datetimeLocalMessage.style.color = 'red';
      }
    });
  },
  submit() {
    // Prevent form submission if datetime-local input is empty.
    if (!el.datetimeLocalInput.value) {
      return false;
    }

    el.datetimeLocalMessage.innerHTML = 'Datetime-local submitted';
    el.datetimeLocalMessage.style.color = 'blue';
    el.datetimeLocalInput.value = '';

    return true;
  }
};

const email = {
  keyUp() {
    el.emailInput.addEventListener('keyup', () => {
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (emailRegex.test(el.emailInput.value)) {
        el.emailForm.addEventListener('submit', email.submit, false);
        el.emailMessage.innerHTML = 'Email valid';
        el.emailMessage.style.color = 'blue';
      }
      else {
        el.emailForm.removeEventListener('submit', email.submit, false);
        el.emailMessage.innerHTML = 'Email invalid';
        el.emailMessage.style.color = 'red';
      }
    });
  },
  submit() {
    el.emailMessage.innerHTML = 'Email submitted';
    el.emailInput.value = '';
  }
};

const file = {
  upload() {
    el.fileInput.addEventListener('change', () => {
      // File: .png|.jpg|.gif
      const fileRegex = /^([a-zA-Z0-9\s_\\.\-:])+(.png|.jpg|.gif)$/;

      if (fileRegex.test(el.fileInput.files[0].name)) {
        el.fileForm.addEventListener('submit', file.submit, false);
        el.fileMessage.innerHTML = 'File valid';
        el.fileMessage.style.color = 'blue';
      }
      else {
        el.fileForm.removeEventListener('submit', file.submit, false);
        el.fileMessage.innerHTML = 'File invalid';
        el.fileMessage.style.color = 'red';
      }
    });
  },
  submit() {
    // Prevent form submission if file input is empty.
    if (!el.fileInput.value) {
      return false;
    }

    el.fileMessage.innerHTML = 'File submitted';
    el.fileMessage.style.color = 'blue';
    el.fileInput.value = '';

    return true;
  }
};

const month = {
  init() {
    // Event listener is for Chrome date picker if it's used first.
    el.monthForm.addEventListener('submit', month.submit, false);
    month.keyUp();
  },
  keyUp() {
    el.monthInput.addEventListener('keyup', () => {
      // Format: yyyy-mm, Year range: 1900-2099
      const monthRegex = /^(19|20)\d\d(-)(0[1-9]|1[012])$/;

      if (monthRegex.test(el.monthInput.value)) {
        el.monthForm.addEventListener('submit', month.submit, false);
        el.monthMessage.innerHTML = 'Month valid';
        el.monthMessage.style.color = 'blue';
      }
      else {
        el.monthForm.removeEventListener('submit', month.submit, false);
        el.monthMessage.innerHTML = 'Month invalid';
        el.monthMessage.style.color = 'red';
      }
    });
  },
  submit() {
    // Prevent form submission if month input is empty.
    if (!el.monthInput.value) {
      return false;
    }

    el.monthMessage.innerHTML = 'Month submitted';
    el.monthMessage.style.color = 'blue';
    el.monthInput.value = '';

    return true;
  }
};

const number = {
  keyUp() {
    el.numberInput.addEventListener('keyup', () => {
      const numberRegex = /^\d+$/;

      if (numberRegex.test(el.numberInput.value)) {
        el.numberForm.addEventListener('submit', number.submit, false);
        el.numberMessage.innerHTML = 'Number valid';
        el.numberMessage.style.color = 'blue';
      }
      else {
        el.numberForm.removeEventListener('submit', number.submit, false);
        el.numberMessage.innerHTML = 'Number invalid';
        el.numberMessage.style.color = 'red';
      }
    });
  },
  submit() {
    el.numberMessage.innerHTML = 'Number submitted';
    el.numberInput.value = '';
  }
};

const password = {
  keyUp() {
    el.passwordInput.addEventListener('keyup', () => {
      const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

      if (passwordRegex.test(el.passwordInput.value)) {
        el.passwordForm.addEventListener('submit', password.submit, false);
        el.passwordMessage.innerHTML = 'Password valid';
        el.passwordMessage.style.color = 'blue';
      }
      else {
        el.passwordForm.removeEventListener('submit', password.submit, false);
        el.passwordMessage.innerHTML = 'Password invalid';
        el.passwordMessage.style.color = 'red';
      }
    });
  },
  submit() {
    el.passwordMessage.innerHTML = 'Password submitted';
    el.passwordInput.value = '';
  }
};

const tel = {
  keyUp() {
    el.telInput.addEventListener('keyup', () => {
      const telRegex = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

      if (telRegex.test(el.telInput.value)) {
        el.telForm.addEventListener('submit', tel.submit, false);
        el.telMessage.innerHTML = 'Telephone valid';
        el.telMessage.style.color = 'blue';
      }
      else {
        el.telForm.removeEventListener('submit', tel.submit, false);
        el.telMessage.innerHTML = 'Telephone invalid';
        el.telMessage.style.color = 'red';
      }
    });
  },
  submit() {
    el.telMessage.innerHTML = 'Telephone submitted';
    el.telInput.value = '';
  }
};

const text = {
  keyUp() {
    el.textInput.addEventListener('keyup', () => {
      const textRegex = /^[a-zA-Z0-9,. -]{10,}$/;

      if (textRegex.test(el.textInput.value)) {
        el.textForm.addEventListener('submit', text.submit, false);
        el.textMessage.innerHTML = 'Text valid';
        el.textMessage.style.color = 'blue';
      }
      else {
        el.textForm.removeEventListener('submit', text.submit, false);
        el.textMessage.innerHTML = 'Text invalid';
        el.textMessage.style.color = 'red';
      }
    });
  },
  submit() {
    el.textMessage.innerHTML = 'Text submitted';
    el.textInput.value = '';
  }
};

const time = {
  keyUp() {
    el.timeInput.addEventListener('keyup', () => {
      const timeRegex = /(0[0-9]|1[0-9]|2[0123]??):(0[0-9]|[12345][0-9])$/;

      if (timeRegex.test(el.timeInput.value)) {
        el.timeForm.addEventListener('submit', time.submit, false);
        el.timeMessage.innerHTML = 'Time valid';
        el.timeMessage.style.color = 'blue';
      }
      else {
        el.timeForm.removeEventListener('submit', time.submit, false);
        el.timeMessage.innerHTML = 'Time invalid';
        el.timeMessage.style.color = 'red';
      }
    });
  },
  submit() {
    el.timeMessage.innerHTML = 'Time submitted';
    el.timeInput.value = '';
  }
};

const url = {
  keyUp() {
    el.urlInput.addEventListener('keyup', () => {
      const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

      if (urlRegex.test(el.urlInput.value)) {
        el.urlForm.addEventListener('submit', url.submit, false);
        el.urlMessage.innerHTML = 'URL valid';
        el.urlMessage.style.color = 'blue';
      }
      else {
        el.urlForm.removeEventListener('submit', url.submit, false);
        el.urlMessage.innerHTML = 'URL invalid';
        el.urlMessage.style.color = 'red';
      }
    });
  },
  submit() {
    el.urlMessage.innerHTML = 'URL submitted';
    el.urlInput.value = '';
  }
};

const week = {
  keyUp() {
    el.weekInput.addEventListener('keyup', () => {
      // Format:  yyyy-Wdd  Where dd = 01 through 52 e.g. 1999-W52
      const weekRegex = /^(19|20)\d\d(-W)(0[1-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-2])/;

      if (weekRegex.test(el.weekInput.value)) {
        el.weekForm.addEventListener('submit', week.submit, false);
        el.weekMessage.innerHTML = 'Week valid';
        el.weekMessage.style.color = 'blue';
      }
      else {
        el.weekForm.removeEventListener('submit', week.submit, false);
        el.weekMessage.innerHTML = 'Week invalid';
        el.weekMessage.style.color = 'red';
      }
    });
  },
  submit() {
    el.weekMessage.innerHTML = 'Week submitted';
    el.weekInput.value = '';
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
    color.pick();
    date.init();
    datetimeLocal.init();
    email.keyUp();
    file.upload();
    month.init();
    number.keyUp();
    password.keyUp();
    tel.keyUp();
    text.keyUp();
    time.keyUp();
    url.keyUp();
    week.keyUp();
  }
};

document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    validation.init();
  }
};
