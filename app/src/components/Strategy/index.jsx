import React from 'react';
import { useStyles } from '../styles/styles';
import {
    Grid, Typography 
} from '@material-ui/core';

const MainPaper = () => {

    const classes = useStyles();

    return (
        <Grid container>
            <Grid item lg={2} md={2} sm={1} xs={1}>

            </Grid>
            <Grid item lg={8} md={8} sm={10} xs={10}>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>

                        <Typography className={classes.text_title} align='left'>
                            Trading strategy
                        </Typography>

                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className={classes.text_subtitle} align='left'>
                            Algorithmic trading
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} >
                        <Typography align='justify' className={classes.text_body}>
                            An algorithm is a mathematical process, programmed to <b>output</b> an answer, given a particular <b>input</b>. In the case of trading algorithms, we are looking for
                            a particular answer to the question <b>"Should I buy or sell?"</b>. To answer this question, trading algorithms are given inputs: the first and most important
                            one being <b>price data</b>.
                        </Typography>
                        <Typography align='justify' className={classes.text_body}>
                            In this particular case, TradeRat is provided with additional data to decide whether it should buy or sell, because it has been created
                            with a <b>trading strategy</b> in mind. The strategy itself is based on <b>technical indicators</b> that should help the algorithm take the right decision at the right time.
                            Simply put, the algorithm will process price data by performing calculation in real time. This processed data serves as an insight for the algorithm.
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className={classes.text_subtitle} align='left'>
                            Which technical indicators are used?
                        </Typography>    
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography align='justify' className={classes.text_body}>
                            TradeRat uses the <b>Awesome Oscillator</b> as a technical indicator for its trading strategy. The Awesome Oscillator is calculated using
                            two <b>simple moving averages</b> (SMA): one with a short time frame, and the other with a longer time frame. The value of the Awesome Oscillator 
                            is the difference between the short period SMA and the long period SMA.
                        </Typography>
                        <Typography align='justify' className={classes.text_body}>
                            It is worth noting that both SMAs are calculated using the <b>median price</b> (high - low) instead of the, more usual, closing price.
                            It is well known that cryptocurrencies markets are highly volatile, and the median price helps capturing this volatility.
                            The Awesome Oscillator oscillates around zero: greater than zero indicates a bullish momentum, while less than zero 
                            indicates that our crypto is losing value.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={2} md={2} sm={1} xs={1}>

            </Grid>
        </Grid>
    )

}

export default MainPaper;