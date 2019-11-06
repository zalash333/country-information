const CountriesLS = (q, countries, params) => {

  let couStorage = JSON.parse(localStorage.getItem(params))
  if(!couStorage){
    couStorage = {}
  }
  couStorage[q] = countries
  localStorage.setItem(params, JSON.stringify(couStorage));
}
CountriesLS.Check = (q, params) => {
  const couStorage = localStorage.getItem(params)
  const cousFull = JSON.parse(couStorage)
  if (!couStorage) {
    return false
  } else if (!cousFull) {
    return false
  } else if (!cousFull[q]) {
    return false
  }
  return true
}
CountriesLS.Get = (q, params) => {
  const couStorage = localStorage.getItem(params)
  return JSON.parse(couStorage)[q]
}
export default CountriesLS;
