import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import cls from './style.module.scss'
import ticket from '../../redux/actions/ticket';


const Home = (props) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(ticket.getCoutries())
    },[])
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