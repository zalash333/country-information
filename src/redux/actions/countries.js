import CountriesLS from "../../helpers/CountriesLS";
import ImgLS from "../../helpers/ImgLS";

const getCoutries = ({ q ='russian' }) => {
  return (dispatch, getState, { api }) => {
    dispatch({ type: 'TICKET_CREATE_REQUESTED' });
    dispatch({ type: 'LOADING_PHOTO', isRequested: true })
    if (CountriesLS.Check(q)) {
      dispatch({ type: 'COUNTRIES_SUCCESS', countries: CountriesLS.Get(q) })
      dispatch({ type: 'LOADING_PHOTO', isRequested: false })
     return dispatch(getPhoto(q))
    }
    api({
      method: 'GET',
      url: `/name/${q}`
    })
      .then(
        (returnedData) => {
          CountriesLS(q, returnedData.data)
          dispatch({ type: 'COUNTRIES_SUCCESS', countries: returnedData.data })
          dispatch({ type: 'LOADING_PHOTO', isRequested: false })
          dispatch(getPhoto(q))
        },
        (error) => {
          dispatch({ type: 'LOADING_PHOTO', isRequested: false })
        }
      );
  };
}

const getPhoto = (q = 'russian') => {
  return (dispatch, getState, { apiImg }) => {
    if (ImgLS.Check(q)) {
      const random = Math.floor(Math.random() * Math.floor(ImgLS.Get(q).length));
          dispatch({ type: 'PHOTO_COUNTRIES', photoHeader: ImgLS.Get(q)[random].largeImageURL })
     return  dispatch({ type: 'LOADING_PHOTO', isRequested: false })
    }
    return apiImg({
      method: 'GET',
      params: {
        q: q
      }
    })
      .then(
        (returnedData) => {
          ImgLS(q,returnedData.data.hits)
          const random = Math.floor(Math.random() * Math.floor(returnedData.data.hits.length));
          dispatch({ type: 'PHOTO_COUNTRIES', photoHeader: returnedData.data.hits[random].largeImageURL })
          dispatch({ type: 'LOADING_PHOTO', isRequested: false })
        },
        (error) => {
          dispatch({ type: 'LOADING_PHOTO', isRequested: false })
        }
      );
  }
}

export default {
  getCoutries,
  getPhoto
};
