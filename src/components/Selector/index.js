import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import i18n from 'i18next';
import Language from '../../helpers/language';


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            'margin-top': 20,
            'margin-left': 20,
            width: 150,
            height: 150,
        },
    }),
);

const Selector = () => {
    const classes = useStyles();
    const [local, setLocal] = useState(Language());
    const handleChange = (event) => {
        setLocal(event.target.value);
        localStorage.setItem('language', event.target.value);
        i18n.changeLanguage(event.target.value);
    };

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={local}
                onChange={handleChange}
            >
                <MenuItem value='ru'>RU</MenuItem>
                <MenuItem value='en'>EN</MenuItem>
            </Select>
        </FormControl>
    )
}
export default Selector