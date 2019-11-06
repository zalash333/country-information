const getErrorEmptyParams = (url, value) => {
  let newUrl = {}
  if (!Object.keys(url).length) {
    return newUrl
  }
  if (url.q) {
    newUrl.q = url.q
  }
  if (url[value] && value !== 'default') {
    newUrl[value] = url[value]
  }

  return newUrl
}
getErrorEmptyParams.arrayParams = ['fullText', 'currency', 'code']
getErrorEmptyParams.SelectorCheck = (value) => {
  let params = 'default'
  getErrorEmptyParams.arrayParams.forEach(el => {
    if (value[el]) {
      params = el
    }
  })
  return params
}
getErrorEmptyParams.SelectorCode = (value) => {
  let params = 'default'
    if (value.codeCountry) {
      params = value.codeCountry
    }
  return params
}
getErrorEmptyParams.checkUrlRequest = (value) => {
  let params = ''
  getErrorEmptyParams.arrayParams.forEach(el => {
    if (value[el]) {
      params = el
    }
  })
  return params
}
export default getErrorEmptyParams;
