import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import cls from './style.module.scss'
import countres from '../../redux/actions/countres';


const Home = (props) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(countres.getCoutries())
    },[dispatch])
  return (
    <React.Fragment>
      <div className={cls.home}>
        <div className={cls.home_content}>

        </div>
      </div>
    </React.Fragment>
  )
};

export default Home;