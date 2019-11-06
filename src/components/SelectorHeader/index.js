import React, { useState } from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';

import qs from 'qs'
import { withRouter } from "react-router";
import getErrorEmptyParams from '../../helpers/getErrorEmptyParams';
const SelectorHeader = ({ location, history }) => {
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
        history.push(`?${url}`);
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
export default withRouter(SelectorHeader)