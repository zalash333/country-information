const localStorageAllCode = () => {
  let select = Object.keys(localStorage)
  select = select.filter(el => el !== 'language' && el.indexOf('Photos') === -1)
  
  return select
}

export default localStorageAllCode;
