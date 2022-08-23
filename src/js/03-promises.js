import Notiflix from 'notiflix';


const delay = document.querySelector('[name="delay"]')
const step = document.querySelector('[name="step"]')
const amount = document.querySelector('[name="amount"]')
const btnCreate = document.querySelector('[type="submit"]')


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}


btnCreate.addEventListener('click', evt => {
  evt.preventDefault();

  let delayValue = Number(delay.value)
  let stepValue = Number(step.value)
  let amountValue = Number(amount.value)
  for (let i = 0; i < amountValue; i += 1) {
    createPromise(i, stepValue * i + delayValue)
          .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position  + 1} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position + 1} in ${delay}ms`
        );
      });
  }
})
