import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { useSelector } from 'react-redux'
import cls from './style.module.scss'

const useStyles = makeStyles((theme) =>
    createStyles({
        card: {
            // maxWidth: 345,
            margin: '1%',
            maxWidth: '23%',
            minWidth: '23%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
        },
        media: {
            height: 190,
            border: '1px solid silver'
        },
    }),
);


const CountriesBox = ({ country, loading = false }) => {
    const isRequestedPhoto = useSelector((state) => state.countries.isRequestedPhoto)
    console.log(country)

    return (
        <Card className={cls.card}>
            <CardHeader
                title={loading ? <Skeleton height={6} width="80%" /> : country.name}
                subheader={loading ? <Skeleton height={6} width="40%" /> : country.alpha2Code}
            />
            {isRequestedPhoto ? (
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
                            <div>язык: {country.languages.map((el, index) => `${el.name} (${el.iso639_2})${(country.languages.length - 1 !== index) ? ', ' : ''}`)}</div>
                            <div>сталица: {country.capital}</div>
                            <div>валюта: {country.currencies[0].name} ({country.currencies[0].symbol})</div>
                            <div>регион: {country.region}</div>
                            <div>часовые пояса: {country.timezones.map((el, index) => `${el}${(country.timezones.length - 1 !== index) ? ', ' : ''}`)}</div>
                        </Typography>
                    )}
            </CardContent>
        </Card>
    );
}

export default CountriesBox