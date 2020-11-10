import React from 'react';
import Paper from '@material-ui/core/Paper';
import { useStyles } from '../../styles/styles';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import FuturesPositionsGrid from './FuturesPositionsGrid';

const FuturesPositionsPaper = () => {
    const classes = useStyles();

    return (
        <Paper elevation={4} className={classes.paper}>
            <Typography align="left" className={classes.paper_title}>
                Positions
            </Typography>
            <Grid container>
                <Grid item lg={3} md={3} sm={3} xs={3} align='left' className={classes.column_title}>
                    Symbol
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3} align='right' className={classes.column_title}>
                    Entry price
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3} align='right' className={classes.column_title}>
                    Leverage
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={3} align='right' className={classes.column_title}>
                    P/L
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <FuturesPositionsGrid />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default FuturesPositionsPaper;