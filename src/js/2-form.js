const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

document.addEventListener('DOMContentLoaded', () => {
  const savedData = loadFromLS(localStorageKey);

  if (savedData) {
    Object.assign(formData, savedData);

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
});

form.addEventListener('input', e => {
  const { name, value } = e.target;

  formData[name] = value;

  saveToLS(localStorageKey, formData);
});

form.addEventListener('submit', e => {
  e.preventDefault();

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
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}
