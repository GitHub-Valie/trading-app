import React from 'react';
import strategyCardImg from '../../images/trading_strategy_img_processed.jpg'
import { Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
} from '@material-ui/core';
import { useStyles } from '../styles/styles';

const StrategyCard = ()=> {

    const classes = useStyles()

    return (
        <Card className={classes.card} elevation={4}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={strategyCardImg}
                title="Strategy"
                />
                <CardContent>
                    <Typography className={classes.card_title}>
                        Trading strategy
                    </Typography>
                    <Typography className={classes.card_body}>
                        What trading strategy could this bot be driven by? Discover how this trading algorithm works, and the strategy used to make it work.
                    </Typography>
                </CardContent>
                <CardActions className={classes.card_button}>
                    <Button href="/trading-strategy">
                        <Typography className={classes.card_button_text}>
                            Discover
                        </Typography>
                    </Button>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
export default StrategyCard;