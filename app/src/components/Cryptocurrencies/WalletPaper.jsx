import React from 'react';
import {
    Grid, Typography, Link 
} from '@material-ui/core';
import { useStyles } from '../styles/styles';

const WalletPaper = () => {

    const classes = useStyles();

    return (

        <Grid container>
            <Grid item lg={2} md={2} sm={1} xs={1}>

            </Grid>
            <Grid item lg={8} md={8} sm={10} xs={10}>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>

                        <Typography className={classes.text_title} align='left'>
                            Exchange and transactions
                        </Typography>

                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className={classes.text_subtitle} align='left'>
                            <Link className={classes.about_link} href='https://www.binance.com/en/register?ref=41365013' target='_blank'>
                                Binance exchange       
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography align='justify' className={classes.text_body}>
                            Binance is the exchange on which the algorithm is trading cryptocurrency derivatives. It's one of the largest cryptocurrency exchanges worldwide. 
                            It has fairly low trading fees, and that's a prerequisite when running an algorithmic trading bot which will make several trades in a day / hour. 
                            Plus, Binance has a vast variety of cryptocurrencies which is nice for backtesting strategies on many different 
                            trading pairs.
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className={classes.text_subtitle} align='left'>
                            <Link className={classes.about_link} href='https://uphold.com/' target='_blank'>
                                Uphold account
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography align='justify' className={classes.text_body}>
                            An Uphold account is used to ease the process of earning Brave rewards in the form of BAT (cf. "Brave BAT" section).
                            Available BAT are converted to Ripple (XRP), sent to a Binance account and stored in its "Spot" balance 
                            (monthly, manual process). The funds available on the "Spot" wallet are then transferred to the Binance "Futures" wallet, as all trades are made 
                            on Binance's USDT-Futures market.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={2} md={2} sm={1} xs={1}>

            </Grid>
        </Grid>
    )

}

export default WalletPaper;