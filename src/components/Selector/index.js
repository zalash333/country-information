import React, { useState } from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import i18n from 'i18next';
import Language from '../../helpers/language';

const Selector = () => {
    const [local, setLocal] = useState(Language());
    const handleChange = (event) => {
        setLocal(event.target.value);
        localStorage.setItem('language', event.target.value);
        i18n.changeLanguage(event.target.value);
    };

    return (
        <FormControl variant="outlined" >
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