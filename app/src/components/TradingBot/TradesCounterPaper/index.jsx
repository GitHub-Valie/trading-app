import React from 'react';
import {
    Paper, Typography, Grid
} from '@material-ui/core';
import { useStyles } from '../../styles/styles';
import TradesCounterDetails from './TradesCounterDetails';

const TradesCounterPaper = () => {
    const classes = useStyles();

    return (
        <Paper elevation={4} className={classes.paper}>
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Typography className={classes.paper_title} align="left">
                        Trades Counter
                    </Typography>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Typography className={classes.column_title} align='left'>
                        Win COunter
                    </Typography>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Typography className={classes.column_title} align='right'>
                        Loss Counter
                    </Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TradesCounterDetails />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TradesCounterPaper