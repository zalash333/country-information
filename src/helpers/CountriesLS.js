const CountriesLS = (q, countries) => {
  localStorage.setItem(`${q}Default`, JSON.stringify(countries));
}
CountriesLS.Check = (q) => {
  const couStorage = localStorage.getItem(`${q}Default`)
  if (!couStorage) {
    return false
  }
  return true
}
CountriesLS.Get = (q) => {
  const couStorage = localStorage.getItem(`${q}Default`)
  return JSON.parse(couStorage)
}
export default CountriesLS;
