import React, { useState } from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';

import qs from 'qs'
import { withRouter } from "react-router";
import getErrorEmptyParams from '../../helpers/getErrorEmptyParams';
import { useTranslation } from 'react-i18next';
import cls from '../style.module.scss'
import PropTypes from 'prop-types';


const SelectorHeader = ({ location, history }) => {
    const {t} = useTranslation()
    const [local, setLocal] = useState(getErrorEmptyParams.SelectorCheck(qs.parse(location.search, {
        ignoreQueryPrefix: true,
    })));
    const handleChange = (event) => {
        setLocal(event.target.value);
        let url = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        })
        url[event.target.value] = true
        delete url.q
        url = qs.stringify(getErrorEmptyParams(url, event.target.value), {
            arrayFormat: 'brackets',
        });
        history.push(`/?${url}`);
    };

    return (
        <FormControl variant="outlined">
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={local}
                onChange={handleChange}
                className={cls.style_inpunt_and_selector}
            >
                <MenuItem value='default'>{t('header.searchParams.default')}</MenuItem>
                <MenuItem value='fullText'>{t('header.searchParams.fullText')}</MenuItem>
                <MenuItem value='currency'>{t('header.searchParams.currency')}</MenuItem>
                <MenuItem value='code'>{t('header.searchParams.code')}</MenuItem>
            </Select>
        </FormControl>
    )
}

SelectorHeader.propTypes = {
    history: PropTypes.shape({
        push:PropTypes.func
    }).isRequired,
    location: PropTypes.shape({
        search:PropTypes.string
    }).isRequired
}

export default withRouter(SelectorHeader)