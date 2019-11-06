import React from 'react';
import cls from './style.module.scss'
import { useSelector } from 'react-redux'
import Input from '../../components/Input';
import SelectorHeader from '../../components/SelectorHeader';
import qs from 'qs'
import { withRouter } from "react-router";
import SelectorCode from '../../components/SelectorCode';
import { useTranslation } from 'react-i18next';

const Header = ({location}) => {
    const {t} = useTranslation()
    const url = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      })
    const photoHeader = useSelector((state)=>state.countries.photoHeader)
    return (
        <div className={cls.header}>
            <img className={cls.header_img} src={photoHeader} alt='header logo' />
            <div className={cls.header_conteiner} id="back-to-top-anchor">
                <div className={cls.header_content}>
                    <div className={cls.header_content_log}>
                        <div className={cls.logo_content}>
                            <img src={'https://ru.seaicons.com/wp-content/uploads/2015/06/Maps-Globe-Filled-icon.png'} alt='logo' />
                        </div>
                    </div>
                    <div className={cls.header_content_menu}>
                        <div>{t('header.title')}</div>
                    </div>
                    <div className={cls.header_content_search}>
                    <SelectorHeader/>
                        <div className={cls.search_input}>
                            {!url.code ? <Input/>:<SelectorCode/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default withRouter(Header);