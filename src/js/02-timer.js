import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const chooseDate = document.querySelector('#datetime-picker')
const btnStart = document.querySelector('[data-start]')
const days = document.querySelector('[data-days]')
const hours = document.querySelector('[data-hours]')
const minutes = document.querySelector('[data-minutes]')
const seconds = document.querySelector('[data-seconds]')

btnStart.disabled = true

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < new Date()) {
    Notiflix.Notify.failure('Please choose a date in the future');
      }
      else {
          btnStart.disabled = false
          Notiflix.Notify.success('Date is correct');
      }
  },
};

flatpickr(chooseDate, options)

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}



btnStart.addEventListener('click', () => {
 let timerID = setInterval(() => {
    let deltaTime = new Date(chooseDate.value) - new Date()
     let timeValues = convertMs(deltaTime)
     if (deltaTime > 0) {
        days.textContent = addLeadingZero(timeValues.days)
        hours.textContent = addLeadingZero(timeValues.hours)
        minutes.textContent = addLeadingZero(timeValues.minutes) 
        seconds.textContent = addLeadingZero(timeValues.seconds)
         
     }
     else {
         Notiflix.Notify.success('Countdown is over');
         document.body.style.backgroundColor = 'Aquamarine'
         clearInterval(timerID)
     }
        }, 1000)
})
