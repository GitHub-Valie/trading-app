import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from '../../styles/styles';
import { Typography } from '@material-ui/core';

const BestTradeDetails = ()=> {

    const classes = useStyles()
    const [bestTradeDetails, setBestTradeDetails] = useState([{}])

    useEffect(()=> {
        fetch('/bestTrade')
        .then(response =>
            response.json()
        )
        .then(data =>
            setBestTradeDetails(data.bestTrade)
            // console.log(data.bestTrade)
        );
    }, []);

    return (
        // <>
        // </>
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12} align='right'>
                <Typography className={classes.numeric} style={{fontSize: 15, marginBottom: '0.1em'}}>
                    {bestTradeDetails.symbol}
                </Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} align='right'>
                <Typography className={classes.numeric} style={{fontSize: 15, marginBottom: '0.1em'}}>
                    {bestTradeDetails.realizedPnl}
                </Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} align='right'>
                <Typography className={classes.numeric} style={{fontSize: 15, marginBottom: '0.1em'}}>
                    {bestTradeDetails.price}
                </Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} align='right'>
                <Typography className={classes.numeric} style={{fontSize: 15, marginBottom: '0.1em'}}>
                    {bestTradeDetails.qty}
                </Typography>
            </Grid>
        </Grid>
    );

}

export default BestTradeDetails;