const CountriesLS = (q, countries) => {
  localStorage.setItem(q, JSON.stringify(countries));
}
CountriesLS.Check = (q) => {
  const couStorage = localStorage.getItem(q)
  if (!couStorage) {
    return false
  }
  return true
}
CountriesLS.Get = (q) => {
  const couStorage = localStorage.getItem(q)
  return JSON.parse(couStorage)
}
export default CountriesLS;
