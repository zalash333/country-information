
const getCoutries = (value = {q:'russian'}) => {
  return (dispatch, getState, { api, apiImg }) => {
    dispatch({ type: 'TICKET_CREATE_REQUESTED' });
    api({
      method: 'GET',
      url: `/name/${value.q}`
    })
      .then(
        (returnedData) => {
          dispatch({ type: 'COUNTRIES_SUCCESS', countries: returnedData.data })
          dispatch({ type: 'LOADING_PHOTO', isRequestedPhoto: true})
          apiImg({
            method: 'GET',
            params: {
              value
            }
          })
            .then(
              (returnedData) => {
                const random = Math.floor(Math.random() * Math.floor(returnedData.data.hits.length));
                dispatch({ type: 'PHOTO_COUNTRIES', photoHeader: returnedData.data.hits[random].largeImageURL })
                dispatch({ type: 'LOADING_PHOTO', isRequestedPhoto: false})
              },
              (error) => {
                dispatch({ type: 'LOADING_PHOTO', isRequestedPhoto: false})
              }
            );
        },
        (error) => {
        }
      );
  };
}

const createTicket = (data, eventSlug, boatSlug, push, callback) => {
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
  getCoutries
};
