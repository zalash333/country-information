const initialState = {
  isRequested: false,
  error: '',
  countries: [],
  photoHeader:'https://images.pexels.com/photos/461755/pexels-photo-461755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
};
function countries(state = initialState, action) {
  switch (action.type) {
      case 'PHOTO_COUNTRIES':
        return { ...state, photoHeader: action.photoHeader,isRequestedPhoto:false };
        case 'COUNTRIES_SUCCESS':
          return { ...state, countries: action.countries };
          case 'LOADING_PHOTO':
            return {...state,isRequested:action.isRequested}
    default:
      return state;
  }
}

export default countries;
