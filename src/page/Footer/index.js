import React from 'react'
import cls from './style.module.scss'
import { useTranslation } from 'react-i18next';
import Selector from '../../components/Selector';

const Footer = () => {
    const {t} = useTranslation()
    return (<div className={cls.foter}>
        {t('footer.rights')}
        <Selector/>
    </div>)
}

export default Footer