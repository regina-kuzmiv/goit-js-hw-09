const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';

// document.addEventListener('DOMContentLoaded', () => {
//   const data = loadFromLS(localStorageKey);

//   if (data) {
//     form.elements.email.value = data.email;
//     form.elements.message.value = data.message;

//     formData.email = data.email || '';
//     formData.message = data.message || '';
//   }
// });

form.elements.email.value = data.email;
form.elements.message.value = data.message;

// form.addEventListener('input', e => {
//   const fd = new FormData(form);
//   formData.email = fd.get('email');
//   formData.message = fd.get('message');

//   saveToLS(localStorageKey, formData);
// });

form.addEventListener('input', ({ target }) => {
  const { name, value } = target;

  formData[name] = value;

  saveToLS(localStorageKey, formData);
});

form.addEventListener('submit', e => {
  e.preventDefault();

  // const data = {
  //   email: formData.email.trim(),
  //   message: formData.message.trim(),
  // };

  // if (!data.email || !data.message) {
  //   alert(`Fill please all fields`);
  //   return;
  // }

  // console.log(data);
  const email = formData.email.trim();
  const message = formData.message.trim();

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }
  localStorage.removeItem(localStorageKey);

  formData.email = '';
  formData.message = '';
  form.reset();
});

function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    return JSON.parse(json);
  } catch {
    return json;
  }
}
