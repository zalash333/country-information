import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { useSelector } from 'react-redux'
import cls from './style.module.scss'
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const CountriesBox = ({ country, length }) => {

    const { t } = useTranslation()
    const loading = useSelector((state) => state.countries.isRequested)
    if(!country){
        return null
    }
    return (
        <Card className={`${cls.card} ${length === 1 && cls.max2} ${length === 2 && cls.max}`}>
            <CardHeader
                title={loading ? <Skeleton height={6} width="80%" /> : country.name}
                subheader={loading ? <Skeleton height={6} width="40%" /> : country.alpha2Code}
            />
            {loading ? (
                <Skeleton variant="rect" className={cls.media} />
            ) : (
                    <CardMedia
                        className={`${cls.media}  ${length === 1 && cls.media2}`}
                        image={country.flag}
                        title={country.name}
                    />
                )}
            <CardContent>
                {loading ? (
                    <React.Fragment>
                        <Skeleton height={6} />
                        <Skeleton height={6} width="80%" />
                    </React.Fragment>
                ) : (
                        <Typography variant="body2" color="textSecondary" component="div">
                            <p>{t('box.language')}: {country.languages.map((el, index) => `${el.name} (${el.iso639_2})${(country.languages.length - 1 !== index) ? ', ' : ''}`)}</p>
                            <p>{t('box.capital')}: {country.capital}</p>
                            <p>{t('box.currency')}: {country.currencies[0].name} ({country.currencies[0].symbol}) ({country.currencies[0].code})</p>
                            <p>{t('box.region')}: {country.region}</p>
                            <p>{t('box.sentinels')}: {country.timezones.map((el, index) => `${el}${(country.timezones.length - 1 !== index) ? ', ' : ''}`)}</p>
                        </Typography>
                    )}
            </CardContent>
        </Card>
    );
}

CountriesBox.defaultProps={
    countries:{}
}

CountriesBox.propTypes = {
    countries: PropTypes.shape({
        flag: PropTypes.string,
        name: PropTypes.string,
        capital: PropTypes.string,
        region: PropTypes.string,
        currencies: PropTypes.arrayOf({
            name: PropTypes.string,
            symbol: PropTypes.string,
            code: PropTypes.string,
        }),
        languages: PropTypes.arrayOf({
            name: PropTypes.string,
            iso639_2: PropTypes.string,
        }),
        timezones: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    length: PropTypes.number.isRequired,
}

export default CountriesBox