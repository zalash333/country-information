import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import Search from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

import { TextField, InputAdornment } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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

const useStyles = makeStyles((theme: Theme) =>
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


const Input = () => {
    const classes = useStyles();
    return (
        <StyledTextField
            id="outlined-adornment-weight"
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            label="search"
            // value={values.weight}
            // onChange={handleChange('weight')}
            // helperText="Weight"
            InputProps={{
                endAdornment: <InputAdornment position="end"><IconButton><Search className={clsx(classes.search)} /></IconButton></InputAdornment>,
            }}
        />
    )
}
export default Input