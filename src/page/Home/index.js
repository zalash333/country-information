import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import cls from './style.module.scss'
import { useSelector } from 'react-redux'
import countries from '../../redux/actions/countries';
import CountriesBox from '../../components/CountriesBox';


const Home = (props) => {
  const dispatch = useDispatch()
  const countriesAll = useSelector((state) => state.countries.countries)
  useEffect(() => {
    dispatch(countries.getCoutries())
  }, [dispatch])
  return (
    <React.Fragment>
      <div className={cls.home}>
        <div className={cls.home_content}>
        {!countriesAll.length && <h2>Воспользуйтесь поиском</h2>}
          {countriesAll.map(el =>
            <CountriesBox country={el} />)}
        </div>
      </div>
    </React.Fragment>
  )
};

export default Home;