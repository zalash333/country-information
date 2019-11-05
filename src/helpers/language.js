const Language = () => {
  let language = 'en'
  const lngStorage = localStorage.getItem('language')
  if (lngStorage && (lngStorage === 'en' || lngStorage === 'ru')) {
    language = lngStorage
  }else {
    localStorage.setItem('language', 'en');
  }
  return language
}

export default Language;
