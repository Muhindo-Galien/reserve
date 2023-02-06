import moment from 'moment';
import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState, useGlobalState, getGlobalState }=createGlobalState({
  modal: 'scale-0',
  started:false,
  alert: { show: true, msg: 'Minting', color: 'red' },
  loading: { show: false, msg: '' },
  started:false,
  connectedAccount: '',
  ticket: null,
  eventDetails: null,
  silverTickets: [],
  vipTickets: [],
  myTickets: [],
  myEvents: [],
  allEvents: [],
  contract: null,
});

const truncate = (text, startChars, endChars, maxLength) => {
  if (text.length > maxLength) {
    var start = text.substring(0, startChars)
    var end = text.substring(text.length - endChars, text.length)
    while (start.length + end.length < maxLength) {
      start = start + '.'
    }
    return start + end
  }
  return text
}

const minutesRemaining = (days) => {
  const todaysdate = moment();
  days = Number((days + '000').slice(0));
  days = moment(days).format('YYYY-MM-DD');
  days = moment(days);
  let minutes = days.diff(todaysdate, 'minutes');
  return minutes < 0 ? 0 : minutes;
}
const setAlert = (msg, color = 'green') => {
  setGlobalState('loading', false)
  setGlobalState('alert', { show: true, msg, color })
  setTimeout(() => {
    setGlobalState('alert', { show: false, msg: '', color })
  }, 3000)
}

const setLoadingMsg = (msg) => {
  const loading = getGlobalState('loading')
  setGlobalState('loading', {show: true, msg })
}


export {
  useGlobalState,
  setGlobalState,
  getGlobalState,
  truncate,
  minutesRemaining,
  setLoadingMsg,
  setAlert
}
