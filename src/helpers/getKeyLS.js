const getKeyLS = () => {
  let select = Object.keys(localStorage)
  select = select.filter(el => el !== 'language' && el.indexOf('Photos') === -1).map(el => ({ title: el }))
  return select
}
export default getKeyLS;
