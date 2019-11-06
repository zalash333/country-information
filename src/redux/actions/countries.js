import CountriesLS from "../../helpers/CountriesLS";
import ImgLS from "../../helpers/ImgLS";


const createUrl = (params) => {
  let url = `/name/`
  if(params.q){
    url = `${url}${params.q}`
  }
  if(params.fullText){
   return url = `${url}?fullText=true`
  }
  if(params.code){
    return `/alpha/${params.q}`
  }
  if(params.currency){
    return `currency/${params.q}`
  }
  return url
}

const getCoutries = (params) => {
  const { q ='russian' } = params
  return (dispatch, getState, { api }) => {
    dispatch({ type: 'TICKET_CREATE_REQUESTED' });
    dispatch({ type: 'LOADING_PHOTO', isRequested: true })
    if (CountriesLS.Check(q,params)) {
      dispatch({ type: 'COUNTRIES_SUCCESS', countries: CountriesLS.Get(q,params) })
      dispatch({ type: 'LOADING_PHOTO', isRequested: false })
     return dispatch(getPhoto(q))
    }
    if(!params.q){
      return null
    }
    api({
      method: 'GET',
      url: createUrl(params)
    })
      .then(
        (returnedData) => {
          let countries = returnedData.data
          if(!Array.isArray(countries)){
            countries = [countries]
          }
          CountriesLS(q, countries,params)
          dispatch({ type: 'COUNTRIES_SUCCESS', countries})
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
          dispatch({ type: 'PHOTO_COUNTRIES', photoHeader: ImgLS.Get(q)[random] && ImgLS.Get(q)[random].largeImageURL })
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
          dispatch({ type: 'PHOTO_COUNTRIES', photoHeader: returnedData.data.hits[random] && returnedData.data.hits[random].largeImageURL })
          dispatch({ type: 'LOADING_PHOTO', isRequested: false })
        },
        (error) => {
          dispatch({ type: 'LOADING_PHOTO', isRequested: false })
        }
      );
  }
}

export default {
  getCoutries
};
