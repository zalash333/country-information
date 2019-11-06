import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { useSelector } from 'react-redux'
import cls from './style.module.scss'

const CountriesBox = ({ country }) => {
    const loading = useSelector((state) => state.countries.isRequested)
    return (
        <Card className={cls.card}>
            <CardHeader
                title={loading ? <Skeleton height={6} width="80%" /> : country.name}
                subheader={loading ? <Skeleton height={6} width="40%" /> : country.alpha2Code}
            />
            {loading ? (
                <Skeleton variant="rect" className={cls.media} />
            ) : (
                    <CardMedia
                        className={cls.media}
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
                        <Typography variant="body2" color="textSecondary" component="p">
                            <p>язык: {country.languages.map((el, index) => `${el.name} (${el.iso639_2})${(country.languages.length - 1 !== index) ? ', ' : ''}`)}</p>
                            <p>столица: {country.capital}</p>
                            <p>валюта: {country.currencies[0].name} ({country.currencies[0].symbol})</p>
                            <p>регион: {country.region}</p>
                            <p>часовые пояса: {country.timezones.map((el, index) => `${el}${(country.timezones.length - 1 !== index) ? ', ' : ''}`)}</p>
                        </Typography>
                    )}
            </CardContent>
        </Card>
    );
}

export default CountriesBox