import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

window.addEventListener('load', () => {
  restoreState();
});

const saveState = throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}, 500);

emailInput.addEventListener('input', saveState);
messageInput.addEventListener('input', saveState);

const restoreState = () => {
  const state = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  emailInput.value = state.email || '';
  messageInput.value = state.message || '';
};

const clearState = () => {
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
};

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log({
    email: emailInput.value,
    message: messageInput.value,
  });
  clearState();
});
