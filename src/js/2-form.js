const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';

form.addEventListener('input', e => {
  const fd = new FormData(form);
  formData.email = fd.get('email');
  formData.message = fd.get('message');

  saveToLS(localStorageKey, formData);
});

document.addEventListener('DOMContentLoaded', () => {
  const data = loadFromLS(localStorageKey);

  if (data) {
    form.elements.email.value = data.email;
    form.elements.message.value = data.message;

    formData.email = data.email || '';
    formData.message = data.message || '';
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = {
    email: formData.email.trim(),
    message: formData.message.trim(),
  };

  if (!data.email || !data.message) {
    alert(`Fill please all fields`);
    return;
  }

  console.log(data);

  localStorage.removeItem(localStorageKey);
  form.reset();

  formData.email = '';
  formData.message = '';
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
