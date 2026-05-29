const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const textarea = form.elements.message;
const email = form.elements.email;

const localStorageKey = 'feedback-form-state';

form.addEventListener('input', e => {
  const formData = {
    email: email.value,
    message: textarea.value,
  };

  saveToLS(localStorageKey, formData);
});
form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = {
    email: email.value,
    message: textarea.value,
  };
  if (formData.email === '' || formData.message === '') {
    alert(`Fill please all fields`);
  }

  console.log(formData);

  localStorage.removeItem(localStorageKey);
  form.reset();
});

function saveToLS(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}
