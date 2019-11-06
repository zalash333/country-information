import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import cls from './style.module.scss'
import { useSelector } from 'react-redux'
import countries from '../../redux/actions/countries';
import CountriesBox from '../../components/CountriesBox';
import qs from 'qs'


const Home = ({ location }) => {
  const dispatch = useDispatch()
  const countriesAll = useSelector((state) => state.countries.countries)
  const url = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })
  const [params, setParams] = useState('')
  useEffect(() => {
    if (JSON.stringify(params) !== JSON.stringify(url) && JSON.stringify(url) !== '{}') {
      if(url.q){
        dispatch(countries.getCoutries(url))
        setParams(url)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, url])
  return (
    <div className={cls.home}>
      <div className={cls.home_content}>
        <div className={cls.title}>
          {!countriesAll.length && <h2>Воспользуйтесь поиском</h2>}
          {(countriesAll.length > 0) && <h2>Найдено {countriesAll.length} страны</h2>}
        </div>
        <div className={cls.countries_content}>
          {countriesAll.map((el, index) =>
            <CountriesBox key={index} index={index} country={el} />
          )}
        </div>
      </div>
    </div>
  )
};

export default Home;