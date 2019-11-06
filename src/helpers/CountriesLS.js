import getErrorEmptyParams from "./getErrorEmptyParams";

const CountriesLS = (q, countries, params) => {
  localStorage.setItem(`${q}${getErrorEmptyParams.checkUrlRequest(params)||'Default'}`, JSON.stringify(countries));
}
CountriesLS.Check = (q,params) => {
  const couStorage = localStorage.getItem(`${q}${getErrorEmptyParams.checkUrlRequest(params)||'Default'}`)
  if (!couStorage) {
    return false
  }
  return true
}
CountriesLS.Get = (q,params) => {
  const couStorage = localStorage.getItem(`${q}${getErrorEmptyParams.checkUrlRequest(params)||'Default'}`)
  return JSON.parse(couStorage)
}
export default CountriesLS;
