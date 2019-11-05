import React from 'react';
import cls from './style.module.scss'
import { TextField, InputAdornment } from '@material-ui/core'
import headerLogo from '../../img/51_full.jpg'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'
import clsx from 'clsx';
// import styled from 'styled-components';
// import logo from 'https://ru.seaicons.com/wp-content/uploads/2015/06/Maps-Globe-Filled-icon.png'
import Search from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Selector from '../../components/Selector';

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
// const StyledTextField = styled(TextField)`
// label.Mui-focused {
//     color: #fafafa;
//   }
//   label {
//       color:#dadada;
//   }
//   input {
//       color:#fafafa;
//   }
//   .MuiOutlinedInput-root {
//     fieldset {
//       border-color: #dadada; 
//     }
//     &:hover fieldset {
//       border-color: #fafafa; 
//     }
//     &.Mui-focused fieldset {
//       border-color: #fafafa; 
//     }
//   }
// `;


const Header = () => {
    const classes = useStyles();
    const photoHeader = useSelector((state)=>state.ticket.photoHeader)
    return (
        <div className={cls.header}>
            <img className={cls.header_img} src={photoHeader} alt='header logo' />
            <div className={cls.header_conteiner} id="back-to-top-anchor">
                <div className={cls.header_content}>
                    <div className={cls.header_content_log}>
                        <div className={cls.logo_content}>
                            <img src={'https://ru.seaicons.com/wp-content/uploads/2015/06/Maps-Globe-Filled-icon.png'} alt='logo' />
                            {/* <div>Курицы</div> */}
                        </div>
                    </div>
                    <div className={cls.header_content_menu}>
                        <div>Горячее</div>
                        <div>Сучки</div>
                        <div>Дряни</div>
                        <div>Какашки</div>
                    </div>
                    <div className={cls.header_content_search}>
                        <Selector/>
                        {/* <Input required placeholder={'search'} /> */}
                        <div className={cls.search_input}>
                            {/* <StyledTextField
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
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;