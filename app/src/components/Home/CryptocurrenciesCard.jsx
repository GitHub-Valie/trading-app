import React from 'react';
import cryptoCardImg from '../../images/cryptos_exchange_img_processed.jpg'
import { Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
} from '@material-ui/core';
import { useStyles } from '../styles/styles';

const TradingCryptosCard = ()=> {

    const classes = useStyles()

    return (
        <Card className={classes.card} elevation={4}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={cryptoCardImg}
                title="Cryptocurrencies"
                />
                <CardContent>
                    <Typography className={classes.card_title}>
                        Cryptos & Exchange
                    </Typography>
                    <Typography className={classes.card_body}>
                        Learn more about the cryptocurrencies traded by this algorithm, the exchange used for making trades and the unusual way this trading bot was funded.
                    </Typography>
                </CardContent>
                <CardActions className={classes.card_button}>
                    <Button href="/cryptos-exchange">
                        <Typography className={classes.card_button_text}>
                            More details
                        </Typography>
                    </Button>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
export default TradingCryptosCard;