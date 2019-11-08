import React, { useState, useEffect } from 'react';
import cls from './style.module.scss'
import { useSelector } from 'react-redux'
import Input from '../../components/Input';
import SelectorHeader from '../../components/SelectorHeader';
import qs from 'qs'
import { withRouter } from "react-router";
import SelectorCode from '../../components/SelectorCode';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import defaultImg from '../../img/51_full.jpg'
import logoImg from '../../img/countries.png'
import { Link } from 'react-router-dom';

const Header = ({ location }) => {
    const { t } = useTranslation()
    const url = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    })
    const photoHeader = useSelector((state) => state.countries.photoHeader)
    const [src, setSrc] = useState(photoHeader)
    useEffect(() => {
        setSrc(photoHeader)
    }, [photoHeader])
    return (
        <div className={cls.header}>
            <img className={cls.header_img} src={src || defaultImg} onError={(e, a) => {
                setSrc(defaultImg)
            }} alt='header logo' />
            <div className={cls.header_conteiner} id="back-to-top-anchor">
                <div className={cls.header_content}>
                    <div className={cls.container_logo_title}>
                        <div className={cls.header_content_log}>
                            <div className={cls.logo_content}>
                                <Link to="/">  <img src={logoImg} alt='logo' /></Link>
                            </div>
                        </div>
                        <div className={cls.header_content_menu}>
                            <Link to="/">{t('header.title')}</Link>
                        </div>
                    </div>
                    <div className={cls.header_content_search}>
                        <SelectorHeader />
                        <div className={cls.search_input}>
                            {!url.code ? <Input /> : <SelectorCode />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

SelectorCode.propTypes = {
    location: PropTypes.shape({
        search: PropTypes.string
    }).isRequired
}

export default withRouter(Header);