import React, { useState } from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import qs from 'qs'
import { withRouter } from "react-router";
import codeJson from "../../codeCoontries/code.json";
import getErrorEmptyParams from '../../helpers/getErrorEmptyParams.js';
import { useTranslation } from 'react-i18next';
import cls from '../style.module.scss'
import PropTypes from 'prop-types';

const SelectorCode = ({ location, history }) => {
    const {t} = useTranslation()
    const [local, setLocal] = useState(getErrorEmptyParams.SelectorCode(qs.parse(location.search, {
        ignoreQueryPrefix: true,
    })));
    const handleChange = (event) => {
        setLocal(event.target.value);
        let url = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        })
        url.code = true
        if (event.target.value !== 'default') {
            url.q = event.target.value
            url = qs.stringify({...url}, {
                arrayFormat: 'brackets',
            });
            history.push(`/?${url}`);
        }
    };

    return (
        <FormControl variant="outlined">
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                className={cls.style_inpunt_and_selector}
                value={local}
                onChange={handleChange}
            >
                <MenuItem value='default'>{t('header.codeSelector')}</MenuItem>
                {Object.keys(codeJson).map((el, index) => <MenuItem key={index} value={el}>{el}</MenuItem>)}
            </Select>
        </FormControl>
    )
}

SelectorCode.propTypes = {
    history: PropTypes.shape({
        push:PropTypes.func
    }).isRequired,
    location: PropTypes.shape({
        search:PropTypes.string
    }).isRequired
}

export default withRouter(SelectorCode)