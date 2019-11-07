import React, { useState } from 'react';
import Search from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import qs from 'qs'
import { withRouter } from "react-router";

import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, InputAdornment } from '@material-ui/core'
import getKeyLS from '../../helpers/getKeyLS';
import { useTranslation } from 'react-i18next';
import cls from '../style.module.scss'
import PropTypes from 'prop-types';

const Input = ({ history, location }) => {
    const {t} = useTranslation()
    const [value, setValue] = useState('')
    const onChange = (val) => {
        setValue(val.target.value)
    }
    const getCoutries = (newValue = null) => {
        let url = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        })
        if (newValue) {
            url.q = newValue
        } else {
            url.q = value
        }
        url = qs.stringify(url, {
            arrayFormat: 'brackets',
        });
        if(value || newValue){
            history.push(`/?${url}`);
        }
        setValue('')
    }
    return (
        <Autocomplete
            options={getKeyLS(qs.parse(location.search, {
                ignoreQueryPrefix: true,
            }))}
            getOptionLabel={(option) => option.title}
            onChange={(e,b) => {
                let createValue = ''
                if (b&&b.title) {
                    createValue = b.title
                } else if (e.target.textContent) { 
                    createValue = e.target.textContent
                }
                if (createValue) {
                    setValue(createValue)
                    getCoutries(createValue)
                }
            }}
            renderInput={params => (<TextField
                {...params}
                id="outlined-adornment-weight"
                className={cls.style_inpunt_and_selector}
                variant="outlined"
                label={t('header.input')}
                value={value}
                onChange={onChange}
                onKeyPress={(e) => {
                    if (e.charCode === 13) {
                        getCoutries()
                    }
                }}
                InputProps={{
                    endAdornment: <InputAdornment onClick={(e) => {
                        e.preventDefault()
                        getCoutries()
                    }} position="end"><IconButton><Search className={cls.iconSearch} /></IconButton></InputAdornment>,
                }}
            />)}
        />
    )
}

Input.propTypes = {
    history: PropTypes.shape({
        push:PropTypes.func
    }).isRequired,
    location: PropTypes.shape({
        search:PropTypes.string
    }).isRequired
}

export default withRouter(Input)