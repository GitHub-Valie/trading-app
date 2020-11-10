import React, { useState, useEffect } from 'react';
import {
    Grid, Typography
} from '@material-ui/core';
import { useStyles } from '../../styles/styles';

const TradesCounterDetails = ()=> {

    const classes = useStyles()
    const [tradesCounter, setTradesCounter] = useState({})

    useEffect(()=> {
        fetch('/tradesCounter')
        .then(response =>
            response.json()
        )
        .then(data =>
            // console.log(data)
            setTradesCounter(data.tradesCounter)
        );
    }, []);

    return (
        <Grid>
            <Grid container>
                <Grid item lg={6} md={6} sm={6} xs={6} align='left'>
                    <Typography className={classes.numeric} style={{fontSize: 40}}>
                        {tradesCounter.profitCounter}
                    </Typography>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6} align='right'>
                    <Typography className={classes.numeric} style={{fontSize: 40}}>
                        {tradesCounter.lossCounter}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );

}

export default TradesCounterDetails;