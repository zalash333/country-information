import React, { useState } from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';

const SelectorHeader = () => {
    const [local, setLocal] = useState('default');
    const handleChange = (event) => {
        setLocal(event.target.value);
    };

    return (
        <FormControl variant="outlined" >
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={local}
                onChange={handleChange}
            >
                <MenuItem value='default'>Параметры</MenuItem>
                <MenuItem value='fullText'>Полное название</MenuItem>
                <MenuItem value='currency'>По валюте</MenuItem>
                <MenuItem value='code'>Коды стран</MenuItem>
            </Select>
        </FormControl>
    )
}
export default SelectorHeader