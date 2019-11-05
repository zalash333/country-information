import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';


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
            width: 340,
            height: 200,
        },
    }),
);

const Selector = () => {
    const classes = useStyles();
    const [local, setLocal] = useState('en');
    const handleChange = (event) => {
        debugger
        setLocal(event.target.value);
    };

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
                local
        </InputLabel>
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