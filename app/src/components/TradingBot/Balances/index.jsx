import React from 'react';
import Paper from '@material-ui/core/Paper';
import { useStyles } from '../../styles/styles';
import { Typography } from '@material-ui/core';
import SpotBalanceDetails from './SpotBalanceGrid';
import FuturesBalanceDetails from './FuturesBalanceGrid';
import { Grid } from '@material-ui/core';

const BalancePaper = () => {
    const classes = useStyles();

    return (
        <Paper elevation={4} className={classes.paper}>

            <Grid container>

                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Typography align="left" className={classes.paper_title}>
                        Balances
                    </Typography>
                </Grid>

                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Typography align="left" className={classes.column_title}>
                        Spot
                    </Typography>
                    <SpotBalanceDetails />
                </Grid>

                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Typography align="left" className={classes.column_title}>
                        Futures
                    </Typography>
                    <FuturesBalanceDetails />
                </Grid>

            </Grid>

        </Paper>
    )
}

export default BalancePaper;