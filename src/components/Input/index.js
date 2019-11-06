import React, { useState } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import Search from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import qs from 'qs'
import { withRouter } from "react-router";

import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, InputAdornment } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import getKeyLS from '../../helpers/getKeyLS';
import { useTranslation } from 'react-i18next';
// import cls from './style.module.scss'


const StyledTextField = styled(TextField)`
label.Mui-focused {
    color: #fafafa;
  }
  label {
      color:#dadada;
  }
  input {
      color:#fafafa;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #dadada; 
    }
    &:hover fieldset {
      border-color: #fafafa; 
    }
    &.Mui-focused fieldset {
      border-color: #fafafa; 
    }
  }
`;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            height: 130,
        },
        margin: {
            margin: 4,
        },
        textField: {
            flexBasis: 200,
            color: '#fafafa',
        },
        search: {
            color: '#dadada'
        }
    }),
);


const Input = ({ history, location }) => {
    const {t} = useTranslation()
    const classes = useStyles();
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
            url = qs.stringify(url, {
                arrayFormat: 'brackets',
            });
        } else {
            url.q = value
            url = qs.stringify(url, {
                arrayFormat: 'brackets',
            });
        }
        history.push(`?${url}`);
    }
    return (
        <Autocomplete
            options={getKeyLS(qs.parse(location.search, {
                ignoreQueryPrefix: true,
            }))}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            onChange={(e) => {
                if (e.target.textContent) {
                    setValue(e.target.textContent)
                    getCoutries(e.target.textContent)
                }
            }}
            renderInput={params => (<StyledTextField
                {...params}
                id="outlined-adornment-weight"
                className={clsx(classes.margin, classes.textField)}
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
                    }} position="end"><IconButton><Search className={clsx(classes.search)} /></IconButton></InputAdornment>,
                }}
            />)}
        />
    )
}
export default withRouter(Input)