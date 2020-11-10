import React from 'react';
import dashboardCardImg from '../../images/trading_bot_img_processed.jpg';
import { Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
} from '@material-ui/core';
import { useStyles } from '../styles/styles';

const TradingBotCard = ()=> {

    const classes = useStyles()

    return (
        <Card className={classes.card} elevation={4}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={dashboardCardImg}
                title="Dashboard"
                />
                <CardContent>
                    <Typography className={classes.card_title}>
                        Trading Algorithm
                    </Typography>
                    <Typography className={classes.card_body}>
                        Check the trading algorithm's performance, latest positions, balances and get a live overview of the price movements.
                    </Typography>
                    {/* <Typography className={classes.card_body}>
                        <br/>
                    </Typography> */}

                </CardContent>
                <CardActions className={classes.card_button}>
                    <Button href="/dashboard">
                        <Typography className={classes.card_button_text}>
                            Explore
                        </Typography>
                    </Button>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
export default TradingBotCard;