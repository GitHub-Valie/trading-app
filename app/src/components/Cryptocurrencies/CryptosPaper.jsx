import React from 'react';
import {
    Grid, Typography, Link 
} from '@material-ui/core';
import { useStyles } from '../styles/styles';

const CryptosPaper = () => {

    const classes = useStyles();

    return (
        <Grid container>
            <Grid item lg={2} md={2} sm={1} xs={1}>

            </Grid>
            <Grid item lg={8} md={8} sm={10} xs={10}>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>

                        <Typography className={classes.text_title} align='left'>
                            Cryptocurrencies
                        </Typography>

                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className={classes.text_subtitle} align='left'>
                            <Link className={classes.about_link} href='https://brave.com/brave-rewards/' target='_blank'> 
                                Brave BAT
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography align='justify' className={classes.text_body}>
                            The Basic Attention Token (BAT) is a blockchain-based system built on Ethereum. Users of the Brave web browser can receive 
                            Brave Rewards in the form of BAT by accepting to receive advertising content. BAT aims at a fair redistribution of 
                            advertising money between three parties represented by the three angles of the BAT logo: advertisers, publishers, 
                            and readers of ads on the web. This algorithm's wallet was entirely funded with BAT from Brave rewards. This algorithm will
                            trade the BATUSDT Futures pair.
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className={classes.text_subtitle} align='left'>
                            <Link className={classes.about_link} href='https://ripple.com/' target='_blank'> 
                                Ripple XRP
                            </Link>
                        </Typography>    
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography align='justify' className={classes.text_body}>
                            Ripple is both a platform and a cryptocurrency. It was designed to with low transaction costs in mind. XRP is the token used
                            to transfer currencies through the Ripple Network. For this project, XRP is used to transfer funds from an Uphold wallet to
                            Binance. This algorithm will trade the XRPUSDT Futures pair.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={2} md={2} sm={1} xs={1}>

            </Grid>
        </Grid>
    )

}

export default CryptosPaper;