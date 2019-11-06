const ImgLS = (q, photos) => {
  localStorage.setItem(`${q}Photos`, JSON.stringify(photos));
}
ImgLS.Check = (q) => {
  const imgStorage = localStorage.getItem(`${q}Photos`)
  if (!imgStorage) {
    return false
  }
  return true
}
ImgLS.Get = (q) => {
  const imgStorage = localStorage.getItem(`${q}Photos`)
  return JSON.parse(imgStorage)
}
export default ImgLS;
