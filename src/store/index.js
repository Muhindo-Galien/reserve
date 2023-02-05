import moment from 'moment';
import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState, useGlobalState, getGlobalState }=createGlobalState({
  modal: 'scale-0',
  updateModal: 'scale-0',
  showModal: 'scale-0',
  started:false,
  loading: { show: false, msg: '' },
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


export {
  useGlobalState,
  setGlobalState,
  getGlobalState,
  truncate,
  minutesRemaining
}
