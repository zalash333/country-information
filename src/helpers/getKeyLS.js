const getKeyLS = (params ='default') => {
  let select = []
  const local = localStorage.getItem(params)
  if(local){
    select =  Object.keys(JSON.parse(local))
  }
  select = select.map(el => ({ title: el }))
  return select
}
export default getKeyLS;
