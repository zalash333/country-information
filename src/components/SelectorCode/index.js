import React, { useState } from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import qs from 'qs'
import { withRouter } from "react-router";
import codeJson from "../../codeCoontries/code.json";
import getErrorEmptyParams from '../../helpers/getErrorEmptyParams.js';

const SelectorCode = ({ location, history }) => {
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
            history.push(`?${url}`);
        }
    };

    return (
        <FormControl variant="outlined">
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={local}
                onChange={handleChange}
            >
                <MenuItem value='default'>выбери код страны</MenuItem>
                {Object.keys(codeJson).map((el, index) => <MenuItem key={index} value={el}>{el}</MenuItem>)}
            </Select>
        </FormControl>
    )
}
export default withRouter(SelectorCode)