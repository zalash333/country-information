import getErrorEmptyParams from "./getErrorEmptyParams"

const getKeyLS = (params) => {
  let select = Object.keys(localStorage)
  const typeParams = getErrorEmptyParams.checkUrlRequest(params)||'Default'
  select = select.filter(el => el.indexOf(typeParams)>0).map(el => ({ title: el.replace(typeParams,'') }))
  return select
}
export default getKeyLS;
