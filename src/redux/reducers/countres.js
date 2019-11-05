const initialState = {
  isRequested: false,
  error: '',
  tiket: null,
  photoHeader:'https://images.pexels.com/photos/461755/pexels-photo-461755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
};
function countres(state = initialState, action) {
  switch (action.type) {
    case 'TICKET_CREATE_REQUESTED':
      return { ...state, isRequested: true, error: null };
      case 'PHOTO_COUNTRIES':
        return { ...state, photoHeader: action.photoHeader };
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

export default countres;
