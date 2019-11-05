const initialState = {
  isRequested: false,
  error: '',
  tiket: null,
};
function tiket(state = initialState, action) {
  switch (action.type) {
    case 'TICKET_CREATE_REQUESTED':
      return { ...state, isRequested: true, error: null };
    case 'TICKET_CREATE_SUCCESS':
      return {
        ...state,
        isRequested: false,
        tiket: action.tiket,
      };
    case 'TICKET_REQUEST_FAILURE':
      return { ...state, isRequested: false, error: action.errors };
    default:
      return state;
  }
}

export default tiket;
