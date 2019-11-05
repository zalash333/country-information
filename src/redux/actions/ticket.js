import { SubmissionError } from 'redux-form';

function createTicket(data, eventSlug, boatSlug, push, callback) {
  if (push) {
    // eslint-disable-next-line no-param-reassign
    data.pushEvent = push;
  }
  return (dispatch, getState, { api }) => {
    dispatch({ type: 'TICKET_CREATE_REQUESTED' });
    return api({
      method: 'PUT',
      url: `/ticket/`,
      params: {
        eventSlug,
        boatSlug,
      },
      data,
    }).then(
      (returnedData) => {
        const tiket = returnedData.data;
        dispatch({ type: 'TICKET_CREATE_SUCCESS', tiket });
        callback(null, tiket);
      },
      (error) => {
        let err = { _error: 'Server Error. Please try again later' };
        if (error.response && error.response.data) {
          err = {
            ...error.response.data.errors,
            _error: error.response.data.error,
          };
        }
        dispatch({ type: 'TICKET_REQUEST_FAILURE', errors: err });
        // eslint-disable-next-line no-underscore-dangle
        callback(err._error);
        throw new SubmissionError(err);
      },
    );
  };
}
function checkYachtInEvent(callback) {
  return (dispatch, getState, { api }) => {
    dispatch({ type: 'TICKET_CREATE_REQUESTED' });
    return api({
      method: 'GET',
      url: `/ticket/check`,
    }).then(
      (data) => {
        const tiket = data.data;
        dispatch({ type: 'TICKET_CREATE_SUCCESS', tiket });
        callback(null, tiket);
      },
      (error) => {
        let err = { _error: 'Server Error. Please try again later' };
        if (error.response && error.response.data) {
          err = {
            ...error.response.data.errors,
            _error: error.response.data.error,
          };
        }
        dispatch({ type: 'TICKET_REQUEST_FAILURE', errors: err });
        callback(err);
        // throw new SubmissionError(err);
      },
    );
  };
}

export default {
  checkYachtInEvent,
  createTicket,
};