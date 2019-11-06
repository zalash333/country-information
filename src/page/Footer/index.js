import React from 'react'
import cls from './style.module.scss'
import { useTranslation } from 'react-i18next';
import Selector from '../../components/Selector';
import DeleteForever from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';

const Footer = () => {
    const { t } = useTranslation()
    return (<div className={cls.foter}>
        <div className={cls.language}>
            {t('language.title')}
            <Selector />
            <div className={cls.clear_ls}>
                {t('footer.title')}
                <IconButton onClick={()=>{
                    localStorage.clear()
                }}><DeleteForever /></IconButton>
            </div>
        </div>
    </div>)
}

export default Footer